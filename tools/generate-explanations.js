const fs = require("fs");
const vm = require("vm");

const box = { window: {} };
vm.runInNewContext(fs.readFileSync("data/questions.js", "utf8"), box);
const questions = box.window.EMBEDDED_QUESTIONS || [];

const byText = new Map();
const explanations = {};

for (const question of questions) {
  const key = [
    question.question,
    question.answer,
    question.options.A,
    question.options.B,
    question.options.C,
    question.options.D
  ].join("\u0001");

  if (!byText.has(key)) {
    byText.set(key, buildExplanation(question));
  }
  explanations[question.id] = byText.get(key);
}

const output = `window.QUESTION_EXPLANATIONS = ${JSON.stringify(explanations, null, 2)};\n`;
fs.writeFileSync("data/explanations.js", output, "utf8");
console.log(`Generated explanations for ${Object.keys(explanations).length} questions.`);

function buildExplanation(q) {
  const text = q.question;
  const answerText = q.options[q.answer] || "";
  const result = {
    answerStatus: "ok",
    explanation: "",
    calculation: "",
    review: ""
  };

  const set = (explanation, calculation = "", review = "") => {
    result.explanation = explanation;
    result.calculation = calculation;
    result.review = review;
    if (review) result.answerStatus = "review";
    return result;
  };

  const optionReason = `本题给出的标准答案是 ${q.answer}（${answerText}）。`;

  if (/0x[0-9a-fA-F]+\s*&\s*0x[0-9a-fA-F]+/.test(text)) {
    const [a, b] = text.match(/0x[0-9a-fA-F]+/g).map((item) => Number(item));
    const value = a & b;
    return set(
      `${optionReason} 这是十六进制按位与运算，只有两个操作数对应位都为 1 时，结果位才为 1。`,
      `${hex(a)} = ${bin(a)}，${hex(b)} = ${bin(b)}，按位与得到 ${bin(value)}，即 ${hex(value)}。`
    );
  }

  if (/0x[0-9a-fA-F]+\s*\|\s*0x[0-9a-fA-F]+/.test(text)) {
    const [a, b] = text.match(/0x[0-9a-fA-F]+/g).map((item) => Number(item));
    const value = a | b;
    return set(
      `${optionReason} 这是十六进制按位或运算，只要两个操作数对应位有一个为 1，结果位就是 1。`,
      `${hex(a)} = ${bin(a)}，${hex(b)} = ${bin(b)}，按位或得到 ${bin(value)}，即 ${hex(value)}。`
    );
  }

  if (/位带别名地址/.test(text)) {
    const address = text.match(/0x[0-9a-fA-F]+/)?.[0];
    const bit = Number(text.match(/第(\d+)位/)?.[1] || 0);
    if (address) {
      const addr = Number(address);
      const isSram = addr >= 0x20000000 && addr <= 0x200fffff;
      const base = isSram ? 0x22000000 : 0x42000000;
      const region = isSram ? 0x20000000 : 0x40000000;
      const alias = base + (addr - region) * 32 + bit * 4;
      return set(
        `${optionReason} STM32 位带别名地址公式为：别名基地址 + 字节偏移 × 32 + 位号 × 4。SRAM 位带别名基地址为 0x22000000，外设位带别名基地址为 0x42000000。`,
        `${address} 属于${isSram ? "SRAM" : "外设"}位带区，计算为 ${hex(base, 8)} + (${hex(addr, 8)} - ${hex(region, 8)}) × 32 + ${bit} × 4 = ${hex(alias, 8)}。`
      );
    }
  }

  if (/大端模式|小端模式/.test(text)) {
    const big = /大端模式/.test(text);
    const target = text.match(/200[0-3]H/)?.[0] || "目标地址";
    return set(
      `${optionReason} 大端模式把高有效字节放在低地址，小端模式把低有效字节放在低地址。`,
      "题干写作 0x2168465，若按 32 位数理解应补成 0x02168465，四个字节依次为 0x02、0x16、0x84、0x65。大端地址 2000H 到 2003H 为 02 16 84 65，小端则为 65 84 16 02。",
      `此题题干数值像是少写了一个十六进制位；若原意是 0x02168465，则 ${target} 的判断可按${big ? "大端" : "小端"}规则得到。`
    );
  }

  if (/GPIOC->ODR\s*=\s*1<<11/.test(text)) {
    return set(
      `${optionReason} 左移 11 位表示把第 11 位置 1，其数值为 2^11。`,
      "1 << 11 = 0x800，因此赋给 ODR 后输出寄存器值为 0x800。"
    );
  }

  if (/GPIOC->CRH\s*&=\s*0xFFF00FFF/.test(text)) {
    return set(
      `${optionReason} &= 操作只会把掩码中为 0 的位清零，掩码中为 1 的位保持原值。`,
      "0xFFF00FFF 的第 12 到 19 位为 0，因此 GPIOC->CRH 的第 12 到 19 位被清零，其他位不变。"
    );
  }

  if (/GPIOC->CRH\s*=\s*0xFFF00FFF/.test(text)) {
    return set(
      `${optionReason} 直接赋值会把整个寄存器写成该常量，而不是只修改某几位。`,
      "0xFFF00FFF 的第 12 到 19 位为 0，其他位为 1，所以赋值后表现为第 12 到 19 位为 0，其他位置 1。"
    );
  }

  if (/GPIOC->CRH\s*\|=\s*0x00038000/.test(text)) {
    return set(
      `${optionReason} |= 操作只会把掩码中为 1 的位置 1，掩码中为 0 的位保持原值。`,
      "0x00038000 对应第 15 到 17 位为 1，因此会设置这些位为 1，其他位不变。"
    );
  }

  if (/GPIOC->CRH\s*=\s*0x00038000/.test(text)) {
    return set(
      `${optionReason} 直接赋值会覆盖整个寄存器内容。`,
      "0x00038000 中第 15 到 17 位为 1，其他位为 0，因此赋值后就是这些位为 1、其余位为 0。"
    );
  }

  if (/共阴极八段数码管显示0/.test(text)) {
    return set(`${optionReason} 共阴极数码管段选为高电平点亮，数字 0 通常点亮 a、b、c、d、e、f 六段，不点亮 g 段，对应常用编码 0x3f。`);
  }

  if (/共阴极八段数码管显示1/.test(text)) {
    return set(`${optionReason} 共阴极数码管显示 1 时通常只点亮 b、c 两段，对应常用段码 0x06。`);
  }

  if (/采样定理/.test(text)) {
    return set(`${optionReason} 奈奎斯特采样定理要求采样频率至少为信号最高频率的 2 倍，才能避免混叠。`);
  }

  if (/数字音频信息数字化/.test(text)) {
    return set(`${optionReason} 模拟声音转数字音频通常先按时间间隔采样，再把样本幅值量化，最后编码成二进制数据。`);
  }

  if (/波特率表示/.test(answerText) || /比特率是/.test(answerText)) {
    return set(`${optionReason} 比特率描述每秒传输的二进制位数，波特率描述每秒符号或调制状态变化次数；简单二进制调制下二者可能相等，但一般不能混同。`);
  }

  if (/RS422/.test(text)) return set(`${optionReason} RS-422 通常使用差分发送和差分接收两对信号线，因此数据线为 4 根。`);
  if (/RS485/.test(text)) return set(`${optionReason} RS-485 常见半双工连接使用一对差分线 A/B，因此数据线通常为 2 根。`);
  if (/RS232最少/.test(text)) return set(`${optionReason} RS-232 最基本全双工通信至少需要 TXD、RXD 和 GND 三根线。`);
  if (/RS232通信的传输方向/.test(text)) return set(`${optionReason} 标准 RS-232 有独立发送和接收线，通信方式可实现全双工。`);

  if (/RTOS/.test(text)) return set(`${optionReason} RTOS 是 Real-Time Operating System 的缩写，即实时操作系统。`);
  if (/实时系统/.test(text)) return set(`${optionReason} 实时系统强调在规定时间内完成响应。飞行控制系统对响应时限要求严格，因此属于典型实时系统。`);
  if (/实时操作系统/.test(text)) return set(`${optionReason} VxWorks、RTAI、RTLinux 都面向实时应用；Windows 7 是通用桌面操作系统，不属于典型实时操作系统。`);

  if (/硬件抽象层/.test(text)) {
    return set(`${optionReason} HAL 主要屏蔽底层硬件差异，提供访问硬件的例程和接口，便于上层软件或操作系统移植；它不一定是操作系统内核本身的重要组成部分。`);
  }

  if (/嵌入式系统包括/.test(text)) {
    return set(`${optionReason} 嵌入式系统通常可分为硬件层、板级支持包、操作系统层和应用软件层，几个层次共同构成完整系统。`);
  }

  if (/不是嵌入式操作系统的特点/.test(text)) {
    return set(`${optionReason} 嵌入式操作系统更强调内核可裁剪、专用性、实时性和资源占用小；“功能强大”不是它相对于通用操作系统的典型特征。`);
  }

  if (/嵌入式系统的特点|不属于嵌入式系统特点|不是嵌入式系统的特点/.test(text)) {
    return set(`${optionReason} 嵌入式系统通常面向特定任务，强调专用性、可靠性、实时性、低功耗和资源受限。与这些特征相反或过于绝对的说法，一般就是本题要选的项。`);
  }

  if (/嵌入式开发需要专门/.test(answerText)) {
    return set(`${optionReason} 嵌入式开发通常涉及目标硬件、交叉编译器、烧录调试器、仿真器或 JTAG/SWD 等工具，因此比普通桌面软件开发更依赖专门软硬件环境。`);
  }

  if (/嵌入式系统软件/.test(text)) {
    return set(`${optionReason} 嵌入式系统软件通常包括系统软件、驱动程序、中间件和应用软件；FPGA 编程软件属于开发工具，不是运行在嵌入式系统中的软件组成。`);
  }

  if (/微控制器/.test(text)) {
    return set(`${optionReason} 微控制器通常把 CPU、存储器和外设集成在单芯片中，适合控制类应用。题中把 Intel 80386 这类微处理器作为微控制器典型代表是不准确的。`);
  }

  if (/DSP/.test(text) || /FFT/.test(text)) {
    return set(`${optionReason} DSP 面向数字信号处理，适合滤波、FFT、谱分析等大量乘加和信号处理任务；STM32F103 属于通用 Cortex-M 微控制器，不是典型 DSP。`);
  }

  if (/MPU/.test(text)) {
    return set(`${optionReason} 嵌入式 MPU 源自通用 CPU，常保留面向嵌入式应用的核心能力。大量特殊高性能计算更偏向 DSP、专用加速器或 ASIC，不是 MPU 的典型定位。`);
  }

  if (/国产CPU/.test(text)) {
    return set(`${optionReason} 意法半导体 STMicroelectronics 不是国产厂商；沁恒、极海、海思属于国产芯片相关厂商或品牌。`);
  }

  if (/应用领域/.test(text)) {
    return set(`${optionReason} 工业控制、消费电子、机器人都属于嵌入式系统常见应用场景；“通用软件”是软件类别，不是嵌入式系统应用领域。`);
  }

  if (/严格要求/.test(text)) {
    return set(`${optionReason} 嵌入式系统是面向特定功能的专用计算机系统，设计时通常要同时约束可靠性、成本、体积和功耗。`);
  }

  if (/不属于嵌入式系统产品|不属于嵌入式系统的是/.test(text)) {
    return set(`${optionReason} 嵌入式产品通常嵌入到专用设备中完成固定功能；个人计算机或服务器属于通用计算平台，不是典型嵌入式系统产品。`);
  }

  if (/代码固化|固化程序/.test(text)) {
    return set(`${optionReason} 嵌入式软件经常需要烧写到 Flash、ROM 等非易失性存储器中运行，这个“固化/烧录”环节是嵌入式开发相对突出的步骤。`);
  }

  if (/逻辑组成/.test(text)) {
    return set(`${optionReason} 嵌入式系统也由硬件和软件组成，但 CPU 并不都简单到 8 位；现代嵌入式处理器覆盖 8、16、32、64 位等多种字长。`);
  }

  if (/SoC|片上系统/.test(text)) {
    return set(`${optionReason} SoC 把处理器、存储控制、外设接口甚至模拟/射频模块集成到单芯片中，已经广泛用于手机、平板和大量嵌入式设备；说它没有广泛使用或平板仍多用传统 Intel 处理器不准确。`);
  }

  if (/最小硬件系统/.test(text)) {
    return set(`${optionReason} 嵌入式最小系统一般包括处理器、电源、时钟、复位和必要存储资源；许多 MCU 片内已经集成 Flash/RAM，不一定必须外扩存储器。`);
  }

  if (/数码相机/.test(text)) {
    return set(`${optionReason} 闪存卡通常用于保存照片、视频等用户数据，不是作为运行程序的内存；程序运行依赖 RAM 和片内/片外非易失性存储。`);
  }

  if (/简单输入设备和简单输出设备/.test(text)) {
    return set(`${optionReason} LED 数码管由多个 LED 段组成，常见接法分为共阳极和共阴极；其他选项对键盘、触摸屏或 LED 驱动的描述过于绝对或错误。`);
  }

  if (/RS-232|RS-485|UART/.test(text)) {
    return set(`${optionReason} RS-485 使用差分传输，抗干扰强、距离远，通常比 RS-232 更适合远距离通信；说 RS-232 比 RS-485 距离更远、速率更高是错误的。`);
  }

  if (/RISC/.test(text)) {
    return set(`${optionReason} RISC 通常强调指令简单、长度较固定、寻址方式较少、Load/Store 架构和较多通用寄存器；“指令长度不固定、寻址丰富、功能复杂”更接近 CISC 特征。`);
  }

  if (/哈佛结构/.test(text)) return set(`${optionReason} 哈佛结构的核心特征是程序存储空间和数据存储空间分离，可分别取指和访问数据。`);
  if (/冯·诺依曼/.test(text)) return set(`${optionReason} 冯·诺依曼结构的核心特征是程序和数据共用同一存储空间。`);
  if (/小端模式/.test(answerText)) return set(`${optionReason} 小端模式把低有效字节存放在低地址，高有效字节存放在高地址。`);

  if (/ARM Cortex-M3.*工作状态/.test(text)) {
    return set(`${optionReason} Cortex-M3 只执行 Thumb/Thumb-2 指令，不支持传统 ARM 状态；教材中常把 Thumb 状态和调试状态作为其状态描述。`);
  }

  if (/堆栈生成方向/.test(text)) {
    return set(`${optionReason} ARM 的多寄存器访存指令可通过 IA、IB、DA、DB 等寻址方式体现堆栈增长方向，所以方向由具体指令形式决定。`);
  }

  if (/CPU.*特点/.test(text)) {
    return set(`${optionReason} 嵌入式 CPU 更强调实时处理、低功耗、片上集成和可靠性；追求高主频不是嵌入式 CPU 相对通用 CPU 的典型特点。`);
  }

  if (/ARM处理器说法正确/.test(text)) {
    return set(`${optionReason} 小端格式是低字节放低地址、高字节放高地址；MPU 是存储器保护单元，MMU 是存储器管理单元，题中其他选项存在概念错误。`);
  }

  if (/ARM处理器的命名/.test(text)) {
    return set(`${optionReason} Cortex-R 面向实时应用，Cortex-A 才是高端应用处理器系列；因此把 Cortex-R 说成高端应用型处理器是错误的。`);
  }

  if (/R14/.test(text)) return set(`${optionReason} ARM/Cortex-M 中 R14 是 LR（Link Register，链接寄存器），常用于保存函数返回地址。`);
  if (/R15/.test(text)) return set(`${optionReason} ARM/Cortex-M 中 R15 是 PC（Program Counter，程序计数器），保存当前执行位置相关地址。`);
  if (/R12/.test(text)) return set(`${optionReason} R0 到 R12 通常作为通用寄存器使用，R12 又常称为 IP。`);

  if (/Cortex-M3处理器内核采用ARMv8-M/.test(text)) {
    return set(`${optionReason} Cortex-M3 基于 ARMv7-M 架构，而不是 ARMv8-M。`);
  }

  if (/Thumb状态和ARM状态/.test(answerText)) {
    return set(`${optionReason} Cortex-M3 只支持 Thumb/Thumb-2 指令集，不支持传统 ARM 状态，因此说它具有 Thumb 状态和 ARM 状态是错误的。`);
  }

  if (/NVIC/.test(text)) {
    return set(`${optionReason} NVIC 支持中断优先级和优先级分组，通常分为抢占优先级和响应/子优先级；题中“主优先级”的说法不规范，按该题语境判为错误项。`, "", "不同教材对“响应优先级/子优先级”的叫法可能不一致，建议按课堂术语复核。");
  }

  if (/交叉编译/.test(text)) {
    return set(`${optionReason} 交叉编译是指在宿主平台上生成面向另一目标平台/处理器运行的代码，例如在 Windows 上用 ARM 工具链生成 ARM 目标程序。`);
  }

  if (/交叉开发软件/.test(text)) {
    return set(`${optionReason} IAR EWARM、Keil MDK、ARM Developer Suite 都可用于 ARM 嵌入式交叉开发，因此选择“以上都是”。`);
  }

  if (/JTAG/.test(text)) {
    return set(`${optionReason} JTAG 边界扫描可观察和控制芯片引脚相关状态，但并非任何状态下都能任意观察和控制；TAP 常见信号包括 TMS、TCK、TDI、TDO、TRST，并没有标准的 Test Data Require。`);
  }

  if (/调试工具|调试方法/.test(text)) {
    return set(`${optionReason} 在线仿真器、JTAG、示波器、BDM 等都可用于嵌入式调试；传感器是被测系统外设，不是开发调试工具，“单独调试”也不是常见调试方法分类。`);
  }

  if (/GPIO/.test(text)) {
    return set(`${optionReason} GPIO 是通用输入/输出接口，可由软件配置方向、模式和复用功能。STM32 并非所有引脚都 5V 容忍，GPIO 也不适合直接承担 SDRAM 这类高速专用总线功能。`);
  }

  if (/ADC|A\/D/.test(text)) {
    return set(`${optionReason} A/D 转换通常包括采样、保持、量化和编码等环节，常见结构包括积分型、逐次比较型、Σ-Δ 型等；保存数据不是 ADC 转换本身的功能。`);
  }

  if (/Reset|SysTick|NMI|HardFault/.test(`${text} ${Object.values(q.options).join(" ")}`)) {
    return set(
      `${optionReason} Cortex-M 异常优先级中 Reset 的优先级最高，其次通常是 NMI、HardFault，再到可配置异常和外设中断。`,
      "",
      "如果题目语境只讨论“中断”而排除复位异常，则 NMI 通常高于 SysTick 和普通外设中断；本题把 Reset 放入选项时，按异常优先级应选 Reset。"
    );
  }

  if (/中断|EXTI|ISER|ICER|IABR/.test(text)) {
    return set(`${optionReason} STM32/Cortex-M 中断由 NVIC 管理，使能/除能/挂起等寄存器多采用写 1 触发对应动作。中断嵌套由抢占优先级决定，响应优先级主要决定同抢占级下的响应顺序。`);
  }

  if (/uC\/OS|μC\/OS|OS[A-Za-z]/.test(text)) {
    return set(`${optionReason} uC/OS-II 是可裁剪、可移植、可固化的实时内核，提供任务管理、时间管理、信号量、消息队列、事件标志、内存管理等服务；它不提供通用网络协议栈或虚拟内存这类完整通用 OS 功能。`);
  }

  if (/嵌入式操作系统/.test(text)) {
    return set(`${optionReason} 嵌入式操作系统面向嵌入式资源管理和任务调度，可以是实时的，也可以不是强实时；说它必须是实时多任务且仅适用于特定 CPU 过于绝对。`);
  }

  if (/传输速率/.test(text)) {
    return set(`${optionReason} 传输速率相关概念中，比特率看每秒传输多少 bit，波特率看每秒符号变化多少次；二者只有在每个符号承载 1 bit 时才相等。`);
  }

  if (/串口/.test(text)) {
    return set(`${optionReason} 串口异步通信需要双方波特率、数据位、停止位、校验等参数一致；接收乱码最常见原因是波特率或帧格式不匹配。`);
  }

  if (/处理器|CPU/.test(text)) {
    return set(`${optionReason} 这类题主要考查嵌入式处理器相对通用处理器的定位：低功耗、片上集成、面向控制或特定应用，而不是单纯追求通用高性能。`);
  }

  return set(`${optionReason} 根据题干关键词和选项含义，标准答案对应的说法最符合嵌入式系统课程中的常规定义；其余选项通常存在概念过宽、过于绝对或与教材定义不符的问题。`);
}

function hex(value, width = 2) {
  return `0x${value.toString(16).toUpperCase().padStart(width, "0")}`;
}

function bin(value) {
  return value.toString(2).padStart(8, "0").replace(/(.{4})/g, "$1 ").trim();
}
