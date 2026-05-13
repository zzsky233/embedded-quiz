window.QUESTION_EXPLANATIONS = {
  "Sheet1-1": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式操作系统通常针对特定应用设计，内核精简、专用性强、高实时性是其主要特点，而功能强大并非其追求目标，相反，嵌入式系统往往资源受限，功能相对专一。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-2": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统通常由硬件层、板级支持包（BSP）、实时操作系统（RTOS）和应用软件组成，因此选项D“以上都是”正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-3": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统通常需要软硬件协同设计，开发时需使用交叉编译工具链、调试器（如J-Link）和开发板等专门设备。A选项错误，因为并非所有电子设备都是嵌入式系统（如通用计算机）。C选项过于绝对，CISC和RISC各有优势，目前共存。D选项错误，STM32F103VBT6的GPIO端口组数取决于具体封装和型号，通常为5组（GPIOA~GPIOE），并非6组。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-4": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统通常具有实时约束，其操作系统往往需要满足实时性要求，因此选项B说“不具有实时约束”是错误的，故B不是嵌入式系统的特点。其他选项A、C、D均为嵌入式系统的典型特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-5": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统通常具有专用性、隐蔽性、资源受限等特点，但性能不一定低，价格也不一定便宜（如高端嵌入式系统可能成本较高）。因此D选项描述不准确，不属于嵌入式系统的特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-6": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统通常资源受限，内存比PC少，因此D选项错误。A、B、C均为嵌入式系统的常见特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-7": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "实时系统要求对外部事件在限定时间内做出响应。飞行控制系统对响应时间有严格限制，属于硬实时系统；电子邮件系统、电子书阅读器、微信允许一定延迟，属于非实时或软实时系统。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-8": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "实时操作系统（RTOS）要求确定性响应时间。VxWorks 是商业 RTOS，RTAI 和 RTLinux 是 Linux 的实时扩展。Windows 7 是通用操作系统，非实时。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-9": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "硬件抽象层（HAL）位于硬件和操作系统之间，用于屏蔽硬件差异，方便移植。它本身不是操作系统内核的组成部分，内核通常包含进程管理、内存管理、文件系统等核心模块。选项D错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-10": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式系统软件包括系统软件（如操作系统）、驱动和中间件等。FPGA编程软件是用于开发FPGA硬件的工具，属于开发软件而非嵌入式系统本身的软件组成部分。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-11": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式微处理器通常强调实时性、低功耗、高可靠性和可扩展性，而非大量数据运算能力。大量数据运算通常是通用处理器或DSP的强项。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-12": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "嵌入式微控制器的典型代表是单片机，如8051、ARM Cortex-M系列等，而Intel 80386是微处理器（MPU），用于PC，不是微控制器（MCU）。因此A错误。B、C、D描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-13": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "DSP处理器是专门用于数字信号处理的处理器，在结构和指令上针对信号处理算法优化，广泛应用于数字滤波、FFT等。STM32F103是基于ARM Cortex-M3的通用微控制器，并非DSP处理器，因此D选项错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-14": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "MPU（嵌入式微处理器）通常由通用CPU裁剪而来，保留核心功能，去除冗余，具有体积小、成本低等优点。但MPU并非专门用于实现大量特殊高性能计算，其设计更注重通用性和低功耗，而DSP或ASIC等更适合特殊高性能计算。因此C说法错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-15": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "意法半导体（STMicroelectronics）是欧洲公司，其ARM芯片非国产；沁恒、极海、海思均为中国公司。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-16": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "嵌入式软件通常针对特定硬件和应用，规模相对较小，而通用软件（如操作系统、办公软件）规模往往更大。因此“规模较大”不是嵌入式软件的特点。其他选项（软件固化存储、开发难度大、高实时性和可靠性要求）均为嵌入式软件的典型特征。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-17": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "嵌入式系统通常用于特定功能的专用计算机系统，如工业控制、消费电子、机器人等。通用软件（如办公软件、游戏）运行在通用计算机上，不属于嵌入式系统的典型应用领域。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-18": {
    "answerStatus": "review",
    "suggestedAnswer": "A",
    "explanation": "嵌入式系统通常对功能、可靠性、成本、体积、功耗有严格要求，这是嵌入式系统定义的常见表述。但不同教材可能强调性能或安全性，因此标准答案A可能正确，但需根据具体教材确认。",
    "calculation": "",
    "review": "标准答案A是常见说法，但部分教材可能强调性能或安全性，建议核对教材定义。",
    "confidence": "medium"
  },
  "Sheet1-19": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式系统是专用计算机系统，用于特定功能。PDA、ATM取款机、机顶盒都是嵌入式系统产品，而个人计算机是通用计算机，不属于嵌入式系统。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-20": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式软件开发通常需要将代码固化到ROM/Flash中，而通用软件开发一般不需要此环节。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-21": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "RTOS是Real-Time Operating System的缩写，即实时操作系统，用于满足实时性要求。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-22": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式系统的CPU并不都是8位字长，也有16位、32位甚至64位的处理器，如ARM Cortex系列。因此选项C的说法过于绝对，是错误的。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-23": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "智能手机和平板电脑都广泛采用SoC，例如苹果A系列、高通骁龙等，而Intel处理器也用于部分平板（如Surface Pro），但说“大多还使用传统的Intel处理器”不符合事实，因此D错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-24": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "嵌入式处理器本身只是一个芯片，需要外接电源、时钟、复位电路以及存储器等才能构成最小硬件系统，因此A错误。B和C是基本工作条件，D正确，ARM处理器通常提供JTAG或SWD调试接口。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-25": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统是专用计算机系统，通常用于控制、监视或辅助设备运行。服务器是通用计算机，用于提供计算服务，不属于嵌入式系统。有线电视机顶盒、电饭煲、路由器都是典型的嵌入式系统。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-26": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统设计通常优先考虑低成本、低功耗和实时性，而高性能往往不是首要目标，因为嵌入式系统资源受限，需在性能与功耗、成本间权衡。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-27": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式微控制器（MCU）集成了CPU、存储器、I/O接口等，具有高可靠性、低功耗和丰富的外设，非常适合工业控制中的实时控制和数据采集。嵌入式微处理器（MPU）通常需要外部存储器，不适合恶劣环境；DSP主要用于数字信号处理，而非通用控制。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-28": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "FFT计算涉及大量乘加运算和数字信号处理，DSP处理器具有专用的乘累加单元和哈佛结构，最适合此类计算。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-29": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式最小硬件系统通常包括嵌入式处理器、时钟电路和电源电路。现代许多嵌入式处理器片内集成了一定容量的存储器（如Flash、SRAM），因此不一定需要外扩存储器。选项D说法过于绝对，故错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-30": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统应用领域广泛，具有实时性，由硬件和软件组成。选项B说嵌入式系统性能较低、价格便宜，这过于绝对，因为许多嵌入式系统（如高端手机、工业控制器）性能高、价格贵，因此B错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-31": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "数码相机使用闪存卡（如CF卡、SD卡）作为外部存储介质，用于保存照片文件，而非作为内存存储运行的软件。运行软件通常使用RAM或内部Flash。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-32": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "A错误：线性键盘每个按键需一个I/O引脚，矩阵键盘通过行列扫描可减少引脚数（如16键矩阵需4+4=8引脚，线性需16引脚）。B错误：电容式触摸屏通常用手指或导电笔，无需专用硬笔；电阻屏才需硬笔。C错误：LED需串联限流电阻，不能直接连接GPIO，否则可能损坏引脚或LED。D正确：LED数码管内部LED有共阳极（公共端接高电平）和共阴极（公共端接地）两种接法。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-33": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "RS-232标准通常通信距离约15米，速率最高约115.2kbps；而RS-485标准在平衡传输方式下通信距离可达1200米以上，速率可达10Mbps。因此RS-232的通信距离和速率均不如RS-485，选项B说法错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-34": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统应用软件通常针对特定硬件和功能进行优化，追求代码精简、轻量化和低资源占用，因此D正确。A错误，许多嵌入式系统（如智能手机、平板）具有图形用户界面；B错误，嵌入式系统可以不含操作系统（如裸机程序）；C错误，嵌入式系统以提高系统效率、可靠性和实时性为目的，而非单纯追求使用方便。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-35": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统并非新生事物，其历史可追溯到20世纪60年代的阿波罗导航计算机等早期系统，已有数十年发展历程。选项D说只有十年左右历史明显错误。A、B、C均为正确描述。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-36": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统通常需要操作系统（如RTOS）来管理资源，但并非所有嵌入式系统都必须有操作系统，然而题目问的是“不属于嵌入式系统特点”，B选项“不需要操作系统”过于绝对，实际上很多嵌入式系统使用操作系统，因此B不是普遍特点。A、C、D均为嵌入式系统的典型特点。",
    "calculation": "",
    "review": "标准答案B正确。注意：有些极简单的嵌入式系统可能无操作系统，但作为特点描述，“不需要操作系统”不准确，因为大多数嵌入式系统需要操作系统。",
    "confidence": "high"
  },
  "Sheet1-37": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式系统通常针对特定应用设计，内核小、专用性强、系统精简是其典型特点。而“可执行多任务”并非嵌入式系统独具，通用操作系统也支持多任务，且许多嵌入式系统（如低端MCU）甚至不支持多任务。因此C不是嵌入式系统独具的特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-38": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "寄存器组位于CPU内部，与CPU同速，存取速度最快；Cache次之，内存和Flash更慢。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-39": {
    "answerStatus": "wrong",
    "suggestedAnswer": "A",
    "explanation": "大端模式将最高有效字节存储在最低地址。32位数0x2168465的十六进制表示为0x02168465（补齐8位），最高字节是0x02，但题目中0x2168465实际是7位十六进制数，应视为0x02168465。最低地址2000H存储最高字节0x02？注意：0x2168465的二进制：0010 0001 0110 1000 0100 0110 0101，最高字节是0x21（前8位），次高字节0x68，第三字节0x46，最低字节0x65。大端模式下，地址2000H存最高字节0x21，2001H存0x68，2002H存0x46，2003H存0x65。标准答案D（0x02）错误，应为0x21。",
    "calculation": "0x2168465 = 0x02168465（若补全8位），实际字节：0x21, 0x68, 0x46, 0x65。大端：低地址存高字节，故2000H存0x21。",
    "review": "标准答案D（0x02）错误，可能误将0x2168465视为0x02168465并取最高字节0x02，但实际最高字节是0x21。注意0x2168465是7位十六进制数，最高位是2，但字节划分时，0x21是一个字节。",
    "confidence": "high"
  },
  "Sheet1-40": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "小端模式将最低有效字节存储在最低地址。32位数0x2168465的十六进制表示为0x02168465（补齐8位），最低字节是0x65，因此地址2000H存储0x65。",
    "calculation": "0x2168465 = 0x02168465，字节从低到高：0x65, 0x84, 0x16, 0x02。小端模式下2000H存最低字节0x65。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-41": {
    "answerStatus": "wrong",
    "suggestedAnswer": "B",
    "explanation": "大端模式将最高有效字节存储在最低地址。32位数0x2168465的十六进制表示为0x02168465（补齐8位），字节从高到低为0x02, 0x16, 0x84, 0x65。地址从低到高2000H~2003H，2000H存0x02，2001H存0x16，2002H存0x84，2003H存0x65。因此2003H内容为0x65。",
    "calculation": "0x2168465 = 0x02168465，字节拆分：0x02, 0x16, 0x84, 0x65。大端：低地址存高位字节，2000H:0x02, 2001H:0x16, 2002H:0x84, 2003H:0x65。",
    "review": "标准答案D（0x02）错误，可能混淆了大小端或地址顺序。大端模式下最低地址存最高字节，2003H是最高地址，应存最低字节0x65。",
    "confidence": "medium"
  },
  "Sheet1-42": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "小端模式将最低有效字节存储在最低地址。32位数0x2168465的十六进制表示为0x02168465（补齐8位），字节从低到高为：0x65, 0x84, 0x16, 0x02。地址2000H存0x65，2001H存0x84，2002H存0x16，2003H存0x02。但选项中没有0x02，而标准答案为B（0x68），可能原数有误。若数为0x2168465，实际应为0x02168465，则2003H为0x02。但若数为0x2168465（即0x2168465，共7位十六进制），则字节为0x65,0x84,0x16,0x02，2003H为0x02。然而标准答案B是0x68，可能原题数为0x2168468？或为0x2168465但小端下2003H为0x02，无此选项。检查选项：A:0x21, B:0x68, C:0x65, D:0x02。D是0x02，但标准答案选B。可能题目实际数为0x2168468？若为0x2168468，则字节：0x68,0x84,0x16,0x02，2003H为0x02，仍不是0x68。若数为0x68216846？不。常见错误：将最高字节放在最高地址，小端下2003H是最高地址，应存最高字节0x02。但标准答案B为0x68，可能是大端模式？大端下2003H存最低字节0x65？也不对。可能题目中地址顺序相反？或数实际为0x2168465，但小端下2000H存0x65，2003H存0x02，D选项正确。但标准答案B，可能题库有误。鉴于题目明确小端，且计算得2003H为0x02，而D选项存在，故标准答案B可能错误。但作为助教，应指出矛盾。",
    "calculation": "0x2168465 = 0x02168465（32位）。小端：低地址存低字节。地址2000H: 0x65, 2001H: 0x84, 2002H: 0x16, 2003H: 0x02。",
    "review": "标准答案B（0x68）与计算不符。若数为0x2168465，则2003H应为0x02（选项D）。可能原题数为0x2168468？但那样2003H仍为0x02。或为大端模式？大端下2003H存最低字节0x65（选项C）。均不匹配。建议核实题目数据或标准答案。",
    "confidence": "low"
  },
  "Sheet1-43": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "ARM Cortex-M3 处理器支持 Thumb 状态（执行 Thumb 指令）和调试状态（调试操作）。运行状态和休眠状态是处理器的工作模式，而非工作状态。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-44": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "RISC（精简指令集计算机）的特点包括：指令长度固定、大多数指令单周期执行、采用流水线、拥有大量通用寄存器、只有Load/Store指令访问内存。选项C描述的是CISC（复杂指令集计算机）的特点，因此不属于RISC特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-45": {
    "answerStatus": "review",
    "suggestedAnswer": "C",
    "explanation": "ARM的堆栈操作指令（如STM/LDM、PUSH/POP）允许指定堆栈是满递增、满递减、空递增或空递减，因此生成方向由指令决定。但不同教材可能强调默认堆栈方向（如满递减），故需复核。",
    "calculation": "",
    "review": "标准答案C可能正确，但部分教材认为ARM默认堆栈是向下生成（满递减），而指令可改变方向。题干未明确是默认还是可配置，存在歧义。",
    "confidence": "medium"
  },
  "Sheet1-46": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式CPU通常强调实时处理、低功耗和集成测试电路（如JTAG），而高主频并非其核心特点，因为嵌入式系统更关注功耗和实时性，主频往往低于通用CPU。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-47": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "SoC（系统级芯片）将处理器、存储器、I/O接口等集成在单一芯片上，已广泛应用于智能手机、物联网设备等领域，因此D选项说“目前还没有得到广泛使用”是错误的。A、B、C选项均正确描述了SoC的特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-48": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "A错误：RISC是精简指令集计算机，CISC才是复杂指令集。B错误：哈佛结构将程序存储器和数据存储器分开，冯·诺依曼结构才是统一存储。C错误：ARM处理器支持16位Thumb指令和32位ARM指令，并非全部32位。D正确：ARM Cortex-M系列专为微控制器和嵌入式控制设计。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-49": {
    "answerStatus": "wrong",
    "suggestedAnswer": "A",
    "explanation": "小端格式定义：低字节存放在低地址，高字节存放在高地址。选项A描述正确。B错误，ARM处理器支持8、16、32位，不支持24位。C错误，MPU是存储器保护单元。D错误，MMU是存储器管理单元。标准答案A正确，但选项B、C、D明显错误，故标准答案正确。",
    "calculation": "",
    "review": "标准答案A正确，但选项B、C、D错误明显，无需复核。",
    "confidence": "high"
  },
  "Sheet1-50": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "ARM Cortex-R系列是实时处理器，面向实时控制、汽车电子等，并非高端应用型；高端应用型是Cortex-A系列。因此C说法错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-51": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "在ARM Cortex-M3处理器中，R14是链接寄存器（LR），用于保存子程序调用返回地址。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-52": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "Cortex-M3处理器基于ARMv7-M架构，而非ARMv8-M。ARMv8-M用于Cortex-M23/M33等。B选项：Thumb-2是ARMv7-M的指令集，Cortex-M3使用其子集。C选项：Cortex-M3采用哈佛架构（指令和数据总线分离）。D选项：Cortex-M3采用三级流水线（取指、译码、执行）并支持分支预测。因此A错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-53": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "Cortex-M3处理器仅支持Thumb-2指令集，没有ARM状态，因此选项A错误。选项B、C、D均为Cortex-M3的正确特性。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-54": {
    "answerStatus": "review",
    "suggestedAnswer": "D",
    "explanation": "NVIC是Cortex-M3内核的一部分，实现中断控制。选项D中“主优先级”应为“子优先级”或“响应优先级”，术语不准确。但标准答案选D，可能认为该说法不正确。",
    "calculation": "",
    "review": "选项D中“主优先级”表述不规范，通常称为“子优先级”或“响应优先级”。但标准答案选D，可能基于此。需确认教材术语。",
    "confidence": "medium"
  },
  "Sheet1-55": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "在ARM Cortex-M3处理器中，R15是程序计数器（PC），用于存储当前正在执行的指令地址。通用寄存器为R0-R12，链接寄存器为R14（LR），程序状态寄存器为xPSR。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-56": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "在ARM Cortex-M3处理器中，R0-R12均为通用寄存器，R13为堆栈指针（SP），R14为链接寄存器（LR），R15为程序计数器（PC）。因此R12属于通用寄存器。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-57": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "位带别名地址计算公式：别名地址 = 0x22000000 + (字节地址-0x20000000)*32 + 位号*4。字节地址0x20000000，位号2，计算得0x22000000 + 0*32 + 2*4 = 0x22000008。",
    "calculation": "别名地址 = 0x22000000 + (0x20000000 - 0x20000000)*32 + 2*4 = 0x22000000 + 0 + 8 = 0x22000008",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-58": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x22000000 + (A-0x20000000)*32 + bit*4。其中A=0x20000001，bit=2。计算：(0x20000001-0x20000000)=1，1*32=32=0x20，bit*4=8=0x08，总和0x28，加上基址0x22000000得0x22000028。",
    "calculation": "A=0x20000001, bit=2; offset = (A-0x20000000)*32 + bit*4 = 1*32 + 2*4 = 32+8=40=0x28; alias = 0x22000000 + 0x28 = 0x22000028",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-59": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式处理器通常将通用CPU中由板卡完成的功能（如存储器控制器、外设接口等）集成到芯片内部，以提高集成度和可靠性。A错误，两者在功耗、成本、集成度等方面有显著差别；C错误，SoC是系统级芯片，包含处理器核及其他功能模块，嵌入式处理器不一定是SoC；D错误，DSP是数字信号处理器，是嵌入式处理器的一种类型，但不等同。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-60": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "RISC（精简指令集计算机）的特点是：指令长度固定、指令种类少、寻址方式少、指令功能简单、设置大量通用寄存器、访问存储器指令简单（通常只有Load/Store指令）、选取使用频率高的简单指令。选项B描述的是CISC（复杂指令集计算机）的特点，即寻址方式丰富、指令功能增强，因此不符合RISC特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-61": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式微控制器（MCU）集成了CPU、存储器、I/O接口等，具有高可靠性、低成本和丰富的外设，非常适合工业控制中的实时控制和数据采集。嵌入式微处理器（MPU）通常需要外接存储器，适合复杂系统；DSP专用于数字信号处理，不适合通用控制。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-62": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "小端模式（Little-Endian）是指数据的高字节存放在高地址，低字节存放在低地址，即“低字节占低地址”。题干描述完全符合小端模式的定义。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-63": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "哈佛结构的主要特点是程序存储器和数据存储器在物理上分离，各自独立编址，可以同时访问，提高执行效率。选项A正确描述了这一特征。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-64": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "冯·诺依曼结构采用单一存储器空间，程序指令和数据共用同一存储空间，即程序存储空间与数据存储空间合并。选项A描述的是哈佛结构的特点，选项B和D与冯·诺依曼结构无关。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-65": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "ARM Cortex-M系列是专为微控制器设计的嵌入式处理器，面向控制领域，因此D正确。A错误：RISC是精简指令集计算机，不是复杂指令集。B错误：哈佛结构将程序存储器和数据存储器分开，不是统一存储。C错误：ARM处理器支持Thumb指令集（16位）和Thumb-2指令集（16/32位混合），并非全部32位。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-66": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A-0x40000000)*32 + bit*4。其中A=0x40011111，bit=1。计算：(0x40011111-0x40000000)=0x11111，乘以32得0x2222220，加bit*4=4得0x2222224，再加0x42000000得0x42222224。",
    "calculation": "A-0x40000000 = 0x11111\n0x11111 * 32 = 0x2222220\nbit*4 = 1*4 = 4\n0x2222220 + 4 = 0x2222224\n0x42000000 + 0x2222224 = 0x42222224",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-67": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A-0x40000000)*32 + bit*4。其中A=0x40011111，bit=2。计算：(0x40011111-0x40000000)=0x11111，乘以32得0x2222220，加上bit*4=8得0x2222228，再加0x42000000得0x42222228。故选C。",
    "calculation": "A-0x40000000 = 0x11111\n0x11111 * 32 = 0x2222220\nbit*4 = 2*4 = 8 = 0x8\n0x2222220 + 0x8 = 0x2222228\n0x42000000 + 0x2222228 = 0x42222228",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-68": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A - 0x40000000)*32 + bit*4。其中A=0x4001180C，bit=3。计算得0x4223018C。",
    "calculation": "AliasAddr = 0x42000000 + (0x4001180C - 0x40000000)*32 + 3*4 = 0x42000000 + 0x1180C*32 + 12 = 0x42000000 + 0x230180 + 0xC = 0x4223018C",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-69": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A - 0x40000000)*32 + bit*4。其中A=0x4001180C，bit=2。计算得0x42230188。",
    "calculation": "A=0x4001180C，偏移=(0x4001180C-0x40000000)=0x1180C，乘以32得0x1180C*20=0x230180，加上bit*4=8得0x230188，加上基址0x42000000得0x42230188。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-70": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A - 0x40000000)*32 + bit*4。其中A=0x40010C0C，bit=4。计算得0x42218190。",
    "calculation": "A=0x40010C0C，偏移=(0x40010C0C-0x40000000)=0x10C0C，乘以32得0x218180，加上bit*4=16得0x218190，加上基址0x42000000得0x42218190。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-71": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A - 0x40000000)*32 + bit*4。其中A=0x40010C0C，bit=0。计算得：偏移 = (0x40010C0C - 0x40000000) = 0x10C0C，乘以32得0x218180，加上0x42000000得0x42218180。",
    "calculation": "AliasAddr = 0x42000000 + (0x40010C0C - 0x40000000)*32 + 0*4 = 0x42000000 + 0x10C0C*32 = 0x42000000 + 0x218180 = 0x42218180",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-72": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "CPU速度主要由指令系统结构、cache容量、流水线数目等内部架构决定。I/O接口的类型和数目影响外设通信，但不直接影响CPU指令执行速度。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-73": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式CPU通常强调实时处理能力、低功耗和集成测试电路（如JTAG），而高主频并非其核心特点，因为嵌入式系统更注重能效比和实时性，主频往往低于通用CPU。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-74": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式CPU的字长并不局限于32位或64位，8位和16位CPU在低端嵌入式应用中仍广泛使用（如8051、PIC等），因此C选项错误。A、B、D选项描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-75": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "在线仿真器、JTAG适配器和示波器都是嵌入式系统开发中常用的调试工具，用于定位软硬件错误。传感器是用于感知环境参数的输入设备，不属于调试工具。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-76": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "交叉编译是指在一个平台上编译出在另一个不同平台上运行的可执行代码。选项A中，在Windows（x86）上使用KEIL编译出针对ARM CPU的代码，属于交叉编译。其他选项均未明确目标平台与宿主平台不同。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-77": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "交叉编译是指在一种平台上编译出针对另一种不同平台的可执行代码。选项A中gcc通常用于本地编译，且Windows到Linux是不同平台，但gcc本身是本地编译器，除非配置为交叉编译，但通常不称为交叉编译；选项B明确使用arm-elf-gcc交叉编译器，从Windows编译到Linux ARM，符合定义；选项C和D都是本地编译。因此B正确。",
    "calculation": "",
    "review": "选项A可能被误解为交叉编译，但gcc默认是本地编译器，且Windows到Linux平台不同，但通常交叉编译需要特定交叉编译器，故A不准确。",
    "confidence": "high"
  },
  "Sheet1-78": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "交叉开发软件指在宿主机上开发、编译，生成目标机可执行代码的集成开发环境。IAR EWARM、Keil ARM-MDK 和 ARM Developer Suite 均支持 ARM 嵌入式系统的交叉开发，因此以上都是。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-79": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "边界扫描链通过串行方式输入输出，但并非在任何状态下都能观察和控制芯片，例如芯片处于复位或低功耗模式时可能无法正常工作。选项D说法过于绝对，因此错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-80": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "JTAG的TAP（Test Access Port）标准信号包括TCK（时钟）、TMS（模式选择）、TDI（数据输入）、TDO（数据输出），以及可选的TRST（复位）。选项A的TDR（Test Data Require）不是标准JTAG TAP信号。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-81": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统开发不一定必须基于嵌入式操作系统，许多简单嵌入式系统采用裸机开发（前后台系统），因此B选项说法过于绝对，不属于嵌入式系统开发的必然特点。A、C、D均为常见特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-82": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "在线仿真器、JTAG适配器和示波器都是嵌入式系统开发中常用的调试工具，用于定位软硬件错误。传感器是用于感知环境参数的输入设备，不属于调试工具。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-83": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统开发中，宿主机和目标机通常架构不同，因此需要交叉编译环境将源代码编译为目标机可执行的代码。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-84": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统常见调试方法包括模拟调试、软件调试和BDM/JTAG调试。'单独调试'并非标准术语，通常不被视为一种调试方法。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-85": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "STM32的GPIO有8种模式：输入浮空、输入上拉、输入下拉、模拟输入、开漏输出、推挽输出、复用开漏输出、复用推挽输出。选项C“浮空输出”不属于其中，因为输出模式只有开漏和推挽，没有浮空输出。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-86": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "STM32的GPIO有8种模式：输入浮空、输入上拉、输入下拉、模拟输入、开漏输出、推挽输出、推挽复用、开漏复用。开漏输入不属于这8种，输入模式只有浮空、上拉、下拉三种。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-87": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "STM32的GPIO有8种模式：输入浮空、输入上拉、输入下拉、模拟输入、开漏输出、推挽输出、复用开漏输出、复用推挽输出。选项A“上拉复用”不是标准模式，而B、C、D都是。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-88": {
    "answerStatus": "review",
    "suggestedAnswer": "uncertain",
    "explanation": "GPIO通常用于通用数字输入输出，不直接用于模拟Flash接口（Flash通常需要专用控制器或时序模拟，但某些MCU可通过GPIO模拟，故A可能正确但非典型描述）。B错误，SDRAM需要专用控制器，GPIO无法高速传输。C错误，GPIO可配置为双向（开漏或推挽+输入）。D错误，GPIO可查询状态（读取输入寄存器）。A选项有争议，取决于教材是否将GPIO模拟Flash接口视为典型功能。",
    "calculation": "",
    "review": "标准答案A可能不严谨：GPIO通常不直接用于模拟Flash接口，但某些低端MCU可通过GPIO模拟时序访问Flash，故A有歧义。建议根据教材口径判断。",
    "confidence": "medium"
  },
  "Sheet1-89": {
    "answerStatus": "review",
    "suggestedAnswer": "C",
    "explanation": "STM32F103VBT6的GPIO端口通常为3.3V逻辑，但部分引脚（如FT引脚）可容忍5V输入，并非所有端口都兼容5V。选项C表述过于绝对，因此错误。",
    "calculation": "",
    "review": "标准答案C正确，但需注意：STM32F103VBT6有5组GPIO（A-E），每组16个引脚，最大电流25mA（单个引脚），但并非所有引脚都是5V容忍，只有标注FT的引脚才支持5V输入。题干和选项基本严谨。",
    "confidence": "high"
  },
  "Sheet1-90": {
    "answerStatus": "review",
    "suggestedAnswer": "C",
    "explanation": "GPIO通常具有通用输入/输出功能，部分端口支持外部中断，但并非所有端口都有外部中断能力。选项C表述为'部分端口都有外部中断能力'，其中'都'字可能引起歧义，实际应为'部分端口有外部中断能力'。选项B的软件重新映射IO复用功能是某些MCU（如STM32）的特性，但并非所有GPIO都具备，因此可能不是GPIO的普遍特点。标准答案选C，但需注意题干表述的严谨性。",
    "calculation": "",
    "review": "题干'下列不是GPIO特点的是'，选项C'部分端口都有外部中断能力'表述不严谨，'都'字可能误导。实际上，许多MCU的GPIO部分端口具有外部中断能力，但并非所有。选项B的软件重新映射功能并非所有GPIO都支持，可能也是非普遍特点。建议根据具体教材确认。",
    "confidence": "medium"
  },
  "Sheet1-91": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "STM32的每组GPIO端口包含配置寄存器（CRL、CRH）、输入数据寄存器（IDR）、输出数据寄存器（ODR）、位复位寄存器（BRR）和位设置/复位寄存器（BSRR），因此A、B、C选项中的寄存器都属于GPIO寄存器组，故D正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-92": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "STM32的GPIO端口寄存器包括配置寄存器（CRL/CRH）、数据寄存器（IDR/ODR）、置位/复位寄存器（BSRR）、复位寄存器（BRR）等，但不包括中断屏蔽寄存器（IMR）。IMR属于EXTI（外部中断）模块，用于控制中断线是否被屏蔽，不属于GPIO端口寄存器。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-93": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "1<<11 表示将1左移11位，二进制为 100000000000，即十六进制 0x800。因此 GPIOC->ODR 被设置为 0x800。",
    "calculation": "1 << 11 = 2^11 = 2048 = 0x800",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-94": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "GPIOC->CRH是32位寄存器，0xFFF00FFF的二进制为1111 1111 1111 0000 0000 1111 1111 1111，其中第12-19位（从0开始）为0，其余为1。与操作后，第12-19位被清零，其他位保持不变。",
    "calculation": "0xFFF00FFF = 0b1111 1111 1111 0000 0000 1111 1111 1111，位12-19（共8位）为0，其余为1。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-95": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "GPIOC->CRH是32位寄存器，0xFFF00FFF的二进制为1111 1111 1111 0000 0000 1111 1111 1111，其中第12-19位（从0开始）为0，其余位为1。因此该操作将第12-19位清零，其他位置1。",
    "calculation": "0xFFF00FFF = 0b1111 1111 1111 0000 0000 1111 1111 1111，位12-19对应中间8个0。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-96": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "|= 是按位或赋值操作，0x00038000 的二进制为 0000 0000 0000 0011 1000 0000 0000 0000，其中第15-17位（从0开始计数）为1，其他位为0。与原有值按位或后，第15-17位被置1，其他位保持不变。",
    "calculation": "0x00038000 = 0b 0000 0000 0000 0011 1000 0000 0000 0000，位15-17为1。|= 操作：结果位 = 原值位 | 1，故这些位变为1，其他位不变。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-97": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "0x00038000的二进制为0000 0000 0000 0011 1000 0000 0000 0000，从最低位（位0）开始，位15-17对应二进制位15、16、17，该范围内位15=1、16=1、17=1，其余位均为0。因此该操作将CRH寄存器的位15-17置1，其他位清0。",
    "calculation": "0x00038000 = 0b 0000 0000 0000 0011 1000 0000 0000 0000\n位15: 1, 位16: 1, 位17: 1, 其余位为0。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-98": {
    "answerStatus": "wrong",
    "suggestedAnswer": "B",
    "explanation": "STM32F103的GPIO输出速度寄存器可配置为10MHz、2MHz和50MHz三种，没有1MHz选项。标准答案A（1MHz）不存在，实际不包含的是2MHz？但选项B是2MHz，而2MHz是存在的，因此不包含的应是1MHz，但选项A是1MHz，所以标准答案A错误。正确选项应为B？需仔细：STM32F103输出速度可选2MHz、10MHz、50MHz，没有1MHz，所以不包含的模式是1MHz，对应选项A。但标准答案给A，说A是正确？题目问“不包含”，标准答案选A，即认为1MHz不包含，这正确。但解析中常误以为2MHz不包含？实际上2MHz是存在的。因此标准答案A正确。但题干可能混淆，需确认：STM32F103的GPIO输出速度寄存器位为[1:0]，配置00为2MHz，01为10MHz，10为50MHz，11保留。所以1MHz确实不包含。标准答案A正确。但常见误区是认为2MHz不包含，实际包含。故answerStatus应为ok。",
    "calculation": "",
    "review": "标准答案A正确。但需注意：STM32F103输出速度只有2MHz、10MHz、50MHz，无1MHz。选项A的1MHz确实不包含。",
    "confidence": "high"
  },
  "Sheet1-99": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "STM32端口编程通常包括使能时钟、初始化参数（模式、速度、上下拉等）和操作IO口。复位端口IO不是标准步骤，因为复位通常在系统初始化时完成，且复位操作不针对单个端口。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-100": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "共阴极数码管，公共端接低电平，段选端高电平点亮。显示数字0需要点亮a,b,c,d,e,f段（g和dp不亮），对应段码为0x3F（二进制0011 1111）。",
    "calculation": "共阴极段码：a(bit0)~dp(bit7)，0点亮a,b,c,d,e,f：二进制0111111 = 0x3F。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-101": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "共阴极数码管，段码为高电平点亮。显示数字1时，b和c段亮，对应位为b=1,c=1，其他段为0。若a为最低位（dp最高），则段码二进制为00000110，即0x06。",
    "calculation": "共阴极，1亮0灭。数字1：b,c亮。假设段顺序a,b,c,d,e,f,g,dp，a为LSB。则二进制：dp g f e d c b a = 0 0 0 0 0 1 1 0 = 0x06。",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-102": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "按键抖动通常持续5~10ms，延时10ms可避开抖动，读取稳定状态。延时1ms可能不足，1秒和10秒过长影响响应。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-103": {
    "answerStatus": "review",
    "suggestedAnswer": "C",
    "explanation": "STM32F103系列有60个可屏蔽中断（外部中断），但不同型号数量不同。选项A：STM32并非所有型号都有256个中断，通常最多240多个。选项B：内核中断（如SysTick、NMI等）数量很少，通常十几个，不是76。选项D：STM32中断优先级为16级（4位）或8级（3位），不是256级。因此C相对正确，但需注意型号差异。",
    "calculation": "",
    "review": "标准答案C可能正确，但STM32不同型号可屏蔽中断数量不同（如F103为60，F407为82等）。题干未指定具体型号，建议明确。选项A、B、D明显错误。",
    "confidence": "medium"
  },
  "Sheet1-104": {
    "answerStatus": "review",
    "suggestedAnswer": "D",
    "explanation": "STM32F103系列有60个可屏蔽中断（外部中断）和16个内核中断（如SysTick、PendSV等），共76个中断。但中断优先级通常为16级（4位抢占优先级+0位子优先级或4位抢占优先级+4位子优先级等），并非256级。因此D选项错误。但不同型号STM32中断数量可能不同，需确认具体型号。",
    "calculation": "",
    "review": "标准答案D正确，但需注意STM32不同系列中断数量可能不同（如F4系列有82个可屏蔽中断），题干未指定具体型号，存在歧义。",
    "confidence": "high"
  },
  "Sheet1-105": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "在STM32中，抢占优先级决定是否能够打断当前中断（即中断嵌套），而响应优先级用于同抢占优先级下的中断响应顺序。因此，只有抢占优先级可以实现中断嵌套。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-106": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "在ARM Cortex-M系列处理器中，中断使能寄存器组ISER（Interrupt Set-Enable Register）用于使能中断。每个ISER位对应一个中断，写1使能该中断，写0无影响。因此，使能某个中断只需将对应位置1，其他位保持原状，无需清零。选项A正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-107": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "在ARM Cortex-M内核的NVIC中，中断除能寄存器ICER（Interrupt Clear-Enable Register）用于禁用中断。该寄存器写1有效（将对应位写1以清除中断使能位），写0无效（写0不影响当前状态）。因此选项B正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-108": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "中断嵌套的发生取决于抢占式优先级（即主优先级）。只有高抢占式优先级的中断可以打断低抢占式优先级的中断，从而形成嵌套。响应优先级（子优先级）仅用于同抢占优先级下的中断排队，不会引发嵌套。因此选项B正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-109": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "中断激活标志位寄存器组IABR是只读寄存器，用于指示当前正在执行的中断，不能通过软件置1来激活中断。激活中断需通过设置中断挂起寄存器或触发中断源。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-110": {
    "answerStatus": "review",
    "suggestedAnswer": "A",
    "explanation": "EXTI（外部中断/事件控制器）通常管理多个中断/事件线，每个线都有独立的边沿检测器。选项A正确。选项B说管理16个中断/事件线，但实际STM32中EXTI有多个线（如16个GPIO线加几个专用线），所以B不准确。选项C和D关于GPIOA的说法错误，因为多个GPIO端口（如PA、PB等）都可以映射到EXTI。标准答案A基本正确，但B有争议，需根据具体教材确认。",
    "calculation": "",
    "review": "选项B可能不准确：STM32 EXTI通常有16个GPIO线（对应PA0~PG0等）加上几个专用线（如PVD、RTC等），并非仅16个。选项C和D明显错误。标准答案A正确，但需注意教材可能将“16个中断/事件线”理解为GPIO线，此时B也可视为正确。建议根据具体教材口径判断。",
    "confidence": "medium"
  },
  "Sheet1-111": {
    "answerStatus": "review",
    "suggestedAnswer": "B",
    "explanation": "外部中断输入需要初始化IO口为输入（A）、配置中断/事件线（C）和NVIC（D），而IO口重映射（B）通常用于复用功能，不是外部中断的必要步骤。但标准答案选A，可能认为初始化IO口为输入是默认或隐含步骤，但题目问“不需要的步骤”，A是必需的，B才是可选的。",
    "calculation": "",
    "review": "标准答案A可能错误。外部中断必须将IO口配置为输入模式，因此A是需要的步骤。而重映射通常用于改变引脚功能映射，不是外部中断的必要步骤。建议答案改为B。",
    "confidence": "high"
  },
  "Sheet1-112": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "RS422采用差分信号传输，需要一对发送线（T+、T-）和一对接收线（R+、R-），共4根数据信号线。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-113": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "RS485采用差分信号传输，通常使用一对双绞线（A、B）作为数据信号线，因此有2根数据信号线。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-114": {
    "answerStatus": "review",
    "suggestedAnswer": "uncertain",
    "explanation": "RS232标准定义中，最基本的数据传输只需要TXD（发送数据）和RXD（接收数据）两根数据信号线，但通常还需要GND（信号地）作为参考电平，因此最少需要3根线（TXD、RXD、GND）。然而，题干问的是“数据信号线”，如果严格区分数据信号线和地线，则可能认为只需2根数据线。不同教材口径不同，建议根据课程教材确认。",
    "calculation": "",
    "review": "标准答案B（3根）通常指包含地线的情况，但题干明确“数据信号线”，地线是否算作数据信号线存在歧义。部分教材认为最少2根（TXD、RXD），部分认为3根（含GND）。建议复核课程教材定义。",
    "confidence": "medium"
  },
  "Sheet1-115": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "RS232标准定义了独立的发送和接收数据线（TXD和RXD），允许数据同时双向传输，因此属于全双工通信。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-116": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "比特率定义为单位时间内传输的二进制位数，即每秒传输的比特数。波特率是每秒传输的符号数（调制信号变化次数），两者不一定相等，取决于每个符号携带的比特数。选项A正确，B、C、D错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-117": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "波特率（Baud rate）指每秒钟信号变化的次数（即码元传输速率），而比特率（Bit rate）指每秒钟传输的二进制位数。在二进制调制中，一个码元携带1比特，两者数值相等；但在多进制调制中，一个码元可携带多个比特，此时比特率大于波特率。因此选项A正确，B、C、D错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-118": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "STM32串口异步通信必须配置起始位（固定1位）、数据位（8或9位）、停止位（1、1.5或2位）和波特率，缺一不可。选项A、B、C分别只包含部分参数，D涵盖全部，因此选D。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-119": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "串口通信中，乱码最常见的原因是波特率不匹配，导致接收方采样时序错误，无法正确解析数据位。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-120": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "A/D转换器通常包括采样、保持、量化和编码四个步骤，其中比较是量化的一种实现方式（如逐次逼近型ADC中的比较器），但并非所有ADC都显式包含比较环节，且题目问的是“功能不包括”，采样、保持、编码是基本功能，比较不是独立功能步骤。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-121": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "A/D转换器将模拟信号转换为数字信号，核心步骤包括采样、量化和编码。保存不是A/D转换的功能，而是后续存储或处理环节。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-122": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "A/D转换器常见类型包括积分型、逐次比较型和Σ-Δ型，因此选项D“以上都是”正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-123": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "根据奈奎斯特采样定理，为了无失真地恢复模拟信号，采样频率必须大于或等于信号最高频率的两倍。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-124": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "A/D转换器常见类型包括逐次比较型（含电容阵列逐次比较型）、Σ-Δ型、压频变换型等。Σ-Ω型并非标准类型，可能是Σ-Δ型的笔误或混淆。",
    "calculation": "",
    "review": "选项C中的Σ-Ω型应为Σ-Δ型（Sigma-Delta），但题目问的是“不属于”，故C正确。",
    "confidence": "high"
  },
  "Sheet1-125": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "数字音频数字化过程首先对模拟信号进行取样（采样），得到离散时间信号；然后对取样值进行量化，将连续幅度转换为离散电平；最后进行编码，将量化值转换为二进制数字。因此顺序为取样→量化→编码。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-126": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "STM32F1系列ADC为12位分辨率，并非16位，故A错误。B、C、D描述正确：ADC有18个通道（16外部+2内部），输入时钟不超过14MHz，支持单次和连续转换模式。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-127": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "ADC_CR1的SCAN位（位8）控制扫描模式：0表示关闭扫描模式（单通道转换），1表示开启扫描模式（多通道序列转换）。选项A错误，因为该位由软件设置；选项B错误，因为1开启扫描模式；选项C正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-128": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "ADC使用步骤中，GPIO需配置为模拟输入，无需开启复用功能（复用功能用于外设如USART、SPI等，ADC直接连接模拟输入引脚）。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-129": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "RS-485采用差分信号，抗干扰能力强，最长通信距离可达1200米以上，而RS-232通常只有15米左右，两者距离不相当，故B错误。A、C、D描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-130": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "数字音频数字化过程首先对模拟信号进行采样（时间离散化），然后对采样值进行量化（幅度离散化），最后将量化值编码为二进制数字信号。顺序不可颠倒。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-131": {
    "answerStatus": "ok",
    "suggestedAnswer": "A",
    "explanation": "在STM32的异常向量表中，Reset的优先级最高（-3），其次是NMI（-2）和HardFault（-1），SysTick为可编程中断，优先级低于上述异常。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-132": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式实时操作系统（RTOS）的核心指标包括实时性（中断响应、任务切换时间）、可裁剪性（尺寸）和可扩展性（支持内核、中间件等）。成本虽然重要，但通常不属于操作系统的技术指标，而是产品设计或选型时的综合考量。因此，成本不是RTOS的重要指标。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-133": {
    "answerStatus": "review",
    "suggestedAnswer": "A",
    "explanation": "uC/OS是一个实时操作系统，其特点包括可移植、可固化、可裁剪等，而高性能并非其典型特点，因为它是为嵌入式系统设计的轻量级内核，性能相对有限。但不同教材对性能的描述可能有差异，需注意。",
    "calculation": "",
    "review": "标准答案A可能正确，但需确认教材中是否将高性能列为特点。部分资料可能提及uC/OS性能较高，但通常不将其作为主要特点。",
    "confidence": "medium"
  },
  "Sheet1-134": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "uC/OS是一个实时操作系统，支持多任务（D），具有可确定性（B），每个任务有自己的任务栈（A）。但uC/OS是单线程的，不支持多线程（C），因此C不是其性能特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-135": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "uC/OS是一个实时操作系统，其特点包括公开源代码、支持中断管理和提供系统服务（如任务管理、信号量等）。它通常运行在无MMU的微控制器上，不支持虚拟内存。因此，虚拟内存不是uC/OS的性能特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-136": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "uC/OS-II 是一个实时操作系统内核，提供任务管理、时间管理、同步与通信（如信号量、消息队列、事件标志）以及内存管理等功能，但不包含网络协议栈。网络协议通常由第三方组件或上层应用实现。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-137": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "uC/OS-II是一个实时操作系统内核，主要提供任务管理、信号量、消息邮箱、消息队列、事件标志组、内存管理、时钟管理等服务，但不包括设备管理。设备管理通常由板级支持包（BSP）或上层软件实现，不属于内核直接提供的系统服务。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-138": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "uC/OS-II的任务状态包括睡眠态、就绪态、运行态、等待态（挂起态）和中断服务态，没有专门的“删除状态”。任务删除后进入睡眠态。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-139": {
    "answerStatus": "review",
    "suggestedAnswer": "B",
    "explanation": "OSTimeDly() 使任务延迟指定时间，进入等待状态。但 OSSemPend() 也可使任务因等待信号量而进入等待状态。题目未明确等待类型，通常指时间等待。",
    "calculation": "",
    "review": "标准答案 B 在常见教材中正确，但 D 也能使任务进入等待状态（等待信号量）。题干未限定“仅因时间”，建议明确为“让任务进入时间等待状态的调用”。",
    "confidence": "medium"
  },
  "Sheet1-140": {
    "answerStatus": "review",
    "suggestedAnswer": "uncertain",
    "explanation": "在uC/OS-II中，多个函数可使任务进入等待状态：OSSemPend()等待信号量，OSMutexPend()等待互斥信号量，OSTimeDlyHMSM()延时等待。题目未指定等待类型，标准答案C是延时等待，但A和D也是等待调用。需根据上下文判断。",
    "calculation": "",
    "review": "标准答案C可能正确，但A和D同样使任务等待，题干未限定等待类型，存在歧义。建议明确等待条件或修改题干。",
    "confidence": "medium"
  },
  "Sheet1-141": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "uC/OS-II是一个轻量级实时操作系统，设计用于嵌入式系统，通常不需要MMU（内存管理单元）。它可以在没有MMU的处理器上运行，如ARM7、Cortex-M3等。选项A、B、C是移植uC/OS-II的必要条件：需要可重入代码、支持中断和定时中断、能开关中断。因此，不需要MMU。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-142": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式操作系统并非必须是实时多任务系统，也有非实时或单任务系统（如uC/OS-II可配置为单任务），且许多嵌入式操作系统支持多种CPU架构，并非仅适用于特定CPU。A、B、D描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-143": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "uC/OS-II 2.5版本支持64个任务，优先级0最高，63最低。系统占用优先级最低的6个任务（如统计任务、空闲任务等），通常保留优先级0、1、2、3、4、5的说法错误，实际保留的是高优先级还是低优先级需明确。但根据常见教材，系统保留的是最低的6个优先级（如58~63），而非最高的0~5。因此C选项错误。",
    "calculation": "",
    "review": "标准答案C正确。注意：不同版本或教材可能对保留优先级描述有差异，但通常系统占用的是低优先级任务，而非高优先级。",
    "confidence": "high"
  },
  "Sheet1-144": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "硬件抽象层（HAL）位于硬件和操作系统之间，用于屏蔽硬件差异，方便移植。它本身不是操作系统内核的组成部分，内核通常包含进程管理、内存管理、文件系统等核心模块。选项D错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-145": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "μC/OS-II 2.5版本最多支持64个任务，其中优先级0~63，但优先级最低的4个（60~63）保留给系统使用，因此用户任务最多60个。但题目问的是“能够支持的任务数最多”，包括系统任务，故为64。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-146": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "在uC/OS-II移植中，与处理器相关的代码集中在os_cpu.h、os_cpu_a.asm和os_cpu_c.c中，这些文件需要根据目标ARM处理器进行修改。os_core.c是内核核心文件，与处理器无关，通常不需要修改。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-147": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "按位与运算：0x15 = 0001 0101，0x1A = 0001 1010，逐位与得 0001 0000 = 0x10。",
    "calculation": "0x15 = 0b00010101, 0x1A = 0b00011010, 与运算: 00010101 & 00011010 = 00010000 = 0x10",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-148": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "按位或运算：0x15 = 0001 0101，0x1A = 0001 1010，逐位或得 0001 1111 = 0x1F。",
    "calculation": "0x15 = 0b00010101, 0x1A = 0b00011010, 按位或: 00010101 | 00011010 = 00011111 = 0x1F",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-149": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "按位与运算：0x25 = 0010 0101，0x4A = 0100 1010，逐位与得 0000 0000 = 0x00。",
    "calculation": "0x25 = 0b00100101, 0x4A = 0b01001010, 按位与: 0b00000000 = 0x00",
    "review": "",
    "confidence": "high"
  },
  "Sheet1-150": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "按位或运算：0x25 = 0010 0101, 0x4A = 0100 1010, 逐位或得 0110 1111 = 0x6F。",
    "calculation": "0x25 = 0b00100101, 0x4A = 0b01001010, 按位或: 0b01101111 = 0x6F",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-82": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "按位与运算：0x15 = 0001 0101，0x1A = 0001 1010，逐位与得 0001 0000 = 0x10。",
    "calculation": "0x15 = 0b00010101, 0x1A = 0b00011010, 按位与: 0001 0101 & 0001 1010 = 0001 0000 = 0x10",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-83": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "按位或运算：0x15 = 0001 0101, 0x1A = 0001 1010, 逐位或得 0001 1111 = 0x1F。",
    "calculation": "0x15 = 0b00010101, 0x1A = 0b00011010, 或运算: 00010101 | 00011010 = 00011111 = 0x1F",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-84": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "按位与运算：0x25 = 0010 0101, 0x4A = 0100 1010, 逐位与得 0000 0000 = 0x00。",
    "calculation": "0x25 = 0b00100101, 0x4A = 0b01001010, 与运算: 0b00000000 = 0x00",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-85": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "按位或运算：0x25 = 0010 0101, 0x4A = 0100 1010, 逐位或得 0110 1111 = 0x6F。",
    "calculation": "0x25 = 0b00100101, 0x4A = 0b01001010, 或运算: 00100101 | 01001010 = 01101111 = 0x6F",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-65": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "A/D转换器通常包括采样、保持、量化和编码四个步骤，其中量化环节涉及比较（如逐次逼近型ADC使用比较器），但“比较”本身不是独立的功能步骤，而是量化的一种实现方式。题目问“不包括”，采样、保持、编码都是明确的功能，而“比较”是量化过程的一部分，并非所有ADC都显式称为“比较”功能，因此C最符合题意。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-66": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "A/D转换器将模拟信号转换为数字信号，基本步骤包括采样、量化和编码。保存不是A/D转换的功能，而是后续存储或处理环节。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-67": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "A/D转换器常见类型包括积分型、逐次比较型、Σ-Δ型等，因此选项D“以上都是”正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-22": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "ARM Cortex-M3 处理器支持 Thumb 状态（执行 Thumb 指令）和调试状态（调试模式），运行状态和休眠状态是处理器的工作模式而非工作状态。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-24": {
    "answerStatus": "review",
    "suggestedAnswer": "uncertain",
    "explanation": "ARM处理器支持多种堆栈模式（满递增、满递减、空递增、空递减），堆栈生成方向由具体指令（如STM/LDM、PUSH/POP）和堆栈指针设置决定，并非固定。但题目问的是“ARM的堆栈生成方向”，可能指默认或常见方向。标准答案C“在指令中指出堆栈的生成方向”有一定道理，因为ARM指令可以指定是向上还是向下生成（通过栈指针调整方向）。然而，更常见的说法是ARM堆栈通常是向下生成（递减栈），且多数教材强调ARM使用满递减堆栈。因此选项A也可能正确。此题存在歧义，建议根据教材确认。",
    "calculation": "",
    "review": "题干“ARM的堆栈生成方向”表述模糊。ARM支持多种堆栈模式，但典型默认是向下生成（满递减）。标准答案C认为方向由指令指出，但实际指令中通常隐含方向（如PUSH对应递减）。建议复核教材具体定义。",
    "confidence": "medium"
  },
  "Sheet2-29": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "在ARM Cortex-M3处理器中，R14是链接寄存器（LR），用于保存子程序返回地址。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-31": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "在ARM Cortex-M3处理器中，R15是程序计数器（PC），用于存储当前正在执行的指令地址。通用寄存器为R0-R12，链接寄存器为R14（LR），程序状态寄存器为xPSR。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-62": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "RS232标准定义了一种异步串行通信接口，其信号线包括独立的发送数据线（TXD）和接收数据线（RXD），允许数据同时双向传输，因此属于全双工通信。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-61": {
    "answerStatus": "review",
    "suggestedAnswer": "B",
    "explanation": "RS-232标准中，最简单的三线制连接只需要TXD、RXD和GND三根线即可实现基本通信，因此最少需要3根数据信号线。但严格来说，GND是信号地线，并非数据信号线，题干中“数据信号线”可能产生歧义。若仅指数据线，则只需TXD和RXD两根。但通常教材中认为RS232最少需要3根线（含地线）。",
    "calculation": "",
    "review": "题干中“数据信号线”表述不严谨。RS232标准中，最少连接方式为TXD、RXD和GND三根线，但GND通常被视为信号地线而非数据信号线。若严格区分，数据信号线仅TXD和RXD两根。但多数教材和考题中默认三根线（含地线）为最少数量，故标准答案B（3根）在常见教学口径下正确，但建议明确表述。",
    "confidence": "medium"
  },
  "Sheet2-60": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "RS422采用差分信号传输，需要一对发送线（T+、T-）和一对接收线（R+、R-），共4根数据信号线。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-86": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "RTOS是Real-Time Operating System的缩写，即实时操作系统，用于满足实时性要求。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-64": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "串口通信中，乱码最常见的原因是波特率不匹配，导致接收端采样时刻错误，从而解析出错误的位组合。选项A和B硬件损坏可能性较小，且通常不会只导致乱码；选项D设备不同（如TTL与RS232电平）可能通信失败，但乱码更常见于波特率不一致。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-106": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A - 0x40000000)*32 + bit*4。其中A=0x40010C0C，bit=0。计算得：偏移=(0x40010C0C-0x40000000)=0x10C0C，乘以32得0x218180，加上0x42000000得0x42218180。",
    "calculation": "AliasAddr = 0x42000000 + (0x40010C0C - 0x40000000)*32 + 0*4 = 0x42000000 + 0x10C0C*32 = 0x42000000 + 0x218180 = 0x42218180",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-105": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A - 0x40000000)*32 + bit*4。其中A=0x40010C0C，bit=4。计算：(0x40010C0C-0x40000000)=0x10C0C，乘以32得0x218180，加上bit*4=16得0x218190，再加0x42000000得0x42218190。",
    "calculation": "A-0x40000000=0x10C0C; 0x10C0C*32=0x218180; bit*4=16=0x10; 0x218180+0x10=0x218190; 0x42000000+0x218190=0x42218190",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-104": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A-0x40000000)*32 + bit*4。其中A=0x4001180C，bit=2。计算：(0x4001180C-0x40000000)=0x1180C，乘以32得0x230180，加上bit*4=8得0x230188，再加0x42000000得0x42230188。",
    "calculation": "A-0x40000000 = 0x1180C; 0x1180C * 32 = 0x1180C * 0x20 = 0x230180; bit*4 = 2*4 = 8; 0x230180 + 8 = 0x230188; 0x42000000 + 0x230188 = 0x42230188",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-103": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A - 0x40000000)*32 + bit*4。其中A=0x4001180C，bit=3。计算得0x4223018C。",
    "calculation": "A=0x4001180C，偏移=(0x4001180C-0x40000000)=0x1180C，乘以32得0x1180C*20=0x230180，加上bit*4=12得0x23018C，加上基址0x42000000得0x4223018C。",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-41": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "STM32的GPIO有8种模式：输入浮空、输入上拉、输入下拉、模拟输入、开漏输出、推挽输出、复用开漏输出、复用推挽输出。选项C“浮空输出”不属于其中，正确说法是“浮空输入”。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-42": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "STM32的GPIO有8种模式：输入浮空、输入上拉、输入下拉、模拟输入、开漏输出、推挽输出、推挽复用功能、开漏复用功能。开漏输入不属于其中，输入模式只有浮空、上拉、下拉三种。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-50": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "STM32端口编程通常包括使能时钟、初始化参数和操作IO口，复位端口IO不是标准步骤，一般通过配置寄存器实现初始化。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-63": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "STM32串口异步通信必须配置起始位（固定1位）、数据位（8或9位）、停止位（1、1.5、2位）和波特率，缺一不可。选项A、B、C分别只包含部分参数，D涵盖全部，因此选D。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-119": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "μC/OS-II 2.5版本最多支持64个任务，其中优先级0~63，但优先级最低的4个（60~63）保留给系统使用，因此用户任务最多60个。题目问“能够支持的任务数最多”，通常指系统支持的总任务数（包括系统任务），即64个。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-53": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "按键抖动通常持续5-10ms，延时10ms可有效避开抖动期，读取稳定状态。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-68": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "根据奈奎斯特采样定理，为了无失真地恢复模拟信号，采样频率必须大于或等于信号最高频率的两倍。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-2": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统通常由硬件层、板级支持包（BSP）、实时操作系统（RTOS）和应用软件组成，因此选项D“以上都是”正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-18": {
    "answerStatus": "wrong",
    "suggestedAnswer": "A",
    "explanation": "大端模式将最高有效字节存储在最低地址。32位数0x2168465的十六进制表示为0x02168465（补齐8位），最高字节是0x02，但题目中给出的数是0x2168465，实际是0x02168465，最高字节为0x02。然而，选项D是0x02，但标准答案选D，而我认为应该是0x21？仔细分析：0x2168465是7位十六进制数，实际数值为0x02168465，最高字节是0x02，最低字节是0x65。大端模式下，地址2000H存最高字节0x02，2001H存0x16，2002H存0x84，2003H存0x65。所以2000H内容应为0x02，对应选项D。但题目中选项A是0x21，B是0x65，C是0x05，D是0x02。标准答案D正确。我之前的判断有误，应确认标准答案正确。",
    "calculation": "0x2168465 = 0x02168465，大端：低地址存高位，2000H存0x02。",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-20": {
    "answerStatus": "wrong",
    "suggestedAnswer": "B",
    "explanation": "大端模式将最高有效字节存储在最低地址。32位数0x2168465的十六进制表示为0x02168465（补齐8位），字节从高到低为：0x02, 0x16, 0x84, 0x65。地址从2000H到2003H递增，2000H存0x02，2001H存0x16，2002H存0x84，2003H存0x65。因此2003H内容为0x65。",
    "calculation": "0x2168465 = 0x02168465，字节拆分：0x02, 0x16, 0x84, 0x65。大端：低地址存高位，2000H:0x02, 2001H:0x16, 2002H:0x84, 2003H:0x65。",
    "review": "标准答案D（0x02）错误，混淆了大小端。大端模式下最低地址存最高字节，2003H是最高地址，应存最低字节0x65。",
    "confidence": "medium"
  },
  "Sheet2-19": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "小端模式将最低有效字节存储在最低地址。0x2168465的十六进制表示为0x02168465（补齐32位），最低字节是0x65，因此地址2000H存储0x65。",
    "calculation": "0x2168465 = 0x02168465，字节从低到高：0x65, 0x84, 0x16, 0x02。小端模式下2000H存最低字节0x65。",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-21": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "小端模式将最低有效字节存储在最低地址。0x2168465的十六进制表示为0x02168465（补齐32位），最低字节是0x65，次低字节0x84，次高字节0x16，最高字节0x02。地址2000H存最低字节0x65，2001H存0x84，2002H存0x16，2003H存最高字节0x02。但标准答案B是0x68，与计算不符。注意：0x2168465实际是0x02168465，最高字节为0x02，不是0x68。可能原题数字有误或标准答案错误。",
    "calculation": "0x2168465 = 0x02168465，小端存储：2000H:0x65, 2001H:0x84, 2002H:0x16, 2003H:0x02。",
    "review": "标准答案B(0x68)与计算得到的0x02不符。可能原题数字为0x2168468？若为0x2168468，则最高字节为0x02，仍不是0x68。若为0x2168465，则2003H应为0x02。请确认题目数据。",
    "confidence": "medium"
  },
  "Sheet2-47": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "GPIOC->CRH是32位寄存器，0xFFF00FFF的二进制为1111 1111 1111 0000 0000 1111 1111 1111，其中第12-19位（从0开始）为0，其余为1。与操作将对应位清零，其他位不变。",
    "calculation": "0xFFF00FFF = 0b1111 1111 1111 0000 0000 1111 1111 1111，位12-19为0，其余为1。",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-49": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "操作符|=表示按位或后赋值，0x00038000的二进制为0000 0000 0000 0011 1000 0000 0000 0000 0000，其中第15-17位（从0开始计数）为111，其余位为0。按位或操作会将对应位设置为1，其他位保持不变。因此选项B正确。",
    "calculation": "0x00038000 = 0b 0000 0000 0000 0011 1000 0000 0000 0000，位15-17为1。",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-48": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "GPIOC->CRH是32位寄存器，0xFFF00FFF的二进制为1111 1111 1111 0000 0000 1111 1111 1111，其中第12-19位（从0开始计数）为0，其余位为1。因此该操作将第12-19位清零，其他位置1。",
    "calculation": "0xFFF00FFF = 0b1111 1111 1111 0000 0000 1111 1111 1111，位12-19（共8位）为0，其余为1。",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-51": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "共阴极数码管，公共端接地，段选高电平有效。显示数字0时，需要点亮a,b,c,d,e,f段（g和dp不亮），对应段码为0x3F（二进制0011 1111）。",
    "calculation": "共阴极0段码：a=1,b=1,c=1,d=1,e=1,f=1,g=0,dp=0 → 二进制 0011 1111 → 十六进制 0x3F",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-52": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "共阴极数码管，段码为高电平点亮。显示数字1时，b和c段亮，对应段码位：a=0,b=1,c=1,d=0,e=0,f=0,g=0,dp=0，二进制0110 0000，即0x60。但选项均为8位，常见编码顺序为dp g f e d c b a，则1的编码为0x06（二进制0000 0110）。标准答案D正确。",
    "calculation": "共阴极，1亮b,c段。若段码顺序为dp,g,f,e,d,c,b,a，则b=1,c=1对应位1和2（从0开始），二进制0000 0110 = 0x06。",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-71": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "ADC_CR1的SCAN位（位8）控制扫描模式：0表示关闭扫描模式（单通道转换），1表示开启扫描模式（多通道序列转换）。选项A错误，因为SCAN位由软件设置和清除；选项B错误，因为1开启扫描模式；选项C正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-28": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "ARM Cortex-R系列是实时处理器，面向实时控制、汽车电子等，并非高端应用型；高端应用型是Cortex-A系列。因此C说法错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-56": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "在STM32中，抢占优先级决定是否能够打断当前中断（即中断嵌套），而响应优先级用于同抢占优先级下的中断响应顺序。因此，只有抢占优先级可以实现中断嵌套。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-55": {
    "answerStatus": "review",
    "suggestedAnswer": "D",
    "explanation": "STM32F103系列有60个可屏蔽中断（外部中断）和16个内核中断（如SysTick、PendSV等），共76个中断。但中断优先级并非256级，而是16级（4位优先级位）或更少，具体取决于芯片型号。D选项说256级可编程中断优先级是错误的，因此D不正确。但需注意不同STM32系列可能不同，教材口径可能影响。",
    "calculation": "",
    "review": "标准答案D正确，但需注意STM32不同系列中断数量和优先级位数可能不同。F103系列为16级优先级（4位），F4系列可能更多。题干未指定具体系列，但通常以F103为例。",
    "confidence": "high"
  },
  "Sheet2-54": {
    "answerStatus": "review",
    "suggestedAnswer": "C",
    "explanation": "STM32F103系列有60个可屏蔽中断（外部中断），但不同型号数量不同，C选项在常见教材中正确。A选项256个中断错误；B选项内核中断通常为16个（如SysTick、NMI等），76个不准确；D选项中断优先级为16级（4位），非256级。",
    "calculation": "",
    "review": "标准答案C可能正确，但需注意STM32不同系列可屏蔽中断数量不同（如F1为60，F4为82等），题干未指定具体型号，建议明确。",
    "confidence": "medium"
  },
  "Sheet2-12": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "DSP处理器是专门用于数字信号处理的处理器，在结构和指令上针对信号处理算法优化，广泛应用于数字滤波、FFT等。STM32F103系列是基于ARM Cortex-M3的通用微控制器，并非DSP处理器；广泛应用的嵌入式DSP处理器如TI的TMS320系列、ADI的Blackfin等。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-34": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式处理器通常将通用CPU中由板卡完成的任务（如存储器、外设接口等）集成到芯片内部，以提高集成度和可靠性。A错误，嵌入式处理器与通用处理器在功耗、体积、成本等方面有显著差别；C错误，SoC是系统级芯片，包含处理器核及其他功能模块，嵌入式处理器不一定是SoC；D错误，DSP是数字信号处理器，是嵌入式处理器的一种类型，但不等同。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-13": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "MPU（嵌入式微处理器）通常由通用CPU裁剪而来，保留核心计算功能，去除冗余外设，具有体积小、成本低等优点。但MPU本身并不以“最低功耗和资源实现大量特殊高性能计算”为设计目标，这更多是DSP或专用ASIC的特点。MPU强调通用性和灵活性，而非针对特殊计算的高性能优化。因此C选项描述错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-30": {
    "answerStatus": "review",
    "suggestedAnswer": "D",
    "explanation": "NVIC是Cortex-M3内核的一部分，实现中断控制，支持优先级分组，但通常分为抢占优先级和子优先级（或响应优先级），而非“主优先级”。术语“主优先级”可能不标准，但选项D描述基本正确。其他选项A、B、C均正确。因此D可能为不正确选项，但需注意教材术语差异。",
    "calculation": "",
    "review": "标准答案D可能正确，但需确认教材中优先级分组术语。通常Cortex-M3使用抢占优先级和子优先级，而非“主优先级”。若教材使用“主优先级”指代子优先级，则D正确；否则可能错误。建议复核教材定义。",
    "confidence": "medium"
  },
  "Sheet2-9": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "硬件抽象层（HAL）位于硬件和操作系统之间，为上层提供统一接口，但并非操作系统内核的组成部分。内核通常包含进程管理、内存管理、中断处理等核心功能，而HAL属于底层硬件适配层。选项A、B、C描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-118": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "硬件抽象层（HAL）位于硬件和操作系统之间，为上层提供统一接口，但本身不是操作系统内核的组成部分。内核通常包含进程管理、内存管理等核心模块，而HAL属于更底层的软件层。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-58": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "中断嵌套的发生条件是：高优先级（抢占式优先级）的中断可以打断低优先级的中断服务程序。响应优先级（子优先级）仅用于同抢占优先级下的中断排队，不会引发嵌套。因此，只要抢占式优先级不同，就可能发生嵌套。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-123": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "在uC/OS-II移植中，与处理器相关的文件包括os_cpu.h（数据类型定义、堆栈方向等）、os_cpu_a.asm（汇编函数如任务切换）、os_cpu_c.c（C语言接口如OSTaskStkInit）。os_core.c是内核核心文件，与处理器无关，通常不需要修改。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-45": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "STM32的每组GPIO端口包含配置寄存器（CRL/CRH）、输入数据寄存器（IDR）、输出数据寄存器（ODR）、位复位寄存器（BRR）和位设置/复位寄存器（BSRR），因此A、B、C选项中的寄存器都属于GPIO寄存器组，故选择“以上都是”。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-46": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "STM32的GPIO端口寄存器包括配置寄存器（CRL/CRH）、数据寄存器（IDR/ODR）、置位/复位寄存器（BSRR）、复位寄存器（BRR）等，但不包括中断屏蔽寄存器（IMR）。IMR属于EXTI（外部中断）模块，用于控制外部中断线的屏蔽，而非GPIO端口寄存器。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-88": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "智能手机和平板电脑都广泛采用SoC，例如苹果A系列、高通骁龙等，Intel处理器也用于平板电脑（如Surface Pro），但平板电脑并非大多使用传统Intel处理器，很多使用ARM架构SoC。因此D项错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-73": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式实时操作系统的核心指标包括实时性（中断响应、任务切换）、可裁剪性（尺寸）和可扩展性（内核、中间件）。成本虽然重要，但通常不作为操作系统本身的性能指标，而是系统设计时考虑的因素。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-16": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式软件开发与通用软件开发的主要区别在于，嵌入式软件最终需要固化到非易失性存储器（如Flash、ROM）中，因此增加了代码固化环节。而代码编写、调试和测试在通用软件开发中同样存在。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-98": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统开发中，应用软件不一定必须在嵌入式操作系统上开发，也可以采用裸机编程（前后台系统）或实时操作系统。其他选项均为嵌入式开发的典型特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-107": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "CPU速度主要由指令系统结构、Cache容量、流水线深度等内部架构决定。I/O接口的类型和数目影响外设通信，但不直接影响CPU执行指令的速度。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-113": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式CPU的字长并不局限于32位或64位，8位和16位CPU在低端嵌入式应用中仍广泛使用（如8051、PIC等），因此C选项错误。A、B、D选项描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-100": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统开发通常使用宿主机编写和编译代码，生成的目标代码在目标机上运行，这种开发模式称为交叉开发，核心工具是交叉编译器。因此需要交叉编译环境。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-37": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "在线仿真器、JTAG适配器和示波器都是嵌入式系统开发中常用的调试工具，用于定位软硬件错误。传感器是用于感知环境参数的输入设备，不属于调试工具。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-99": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "在线仿真器、JTAG适配器和示波器都是嵌入式系统开发中常用的调试工具，用于定位软硬件错误。传感器是用于感知环境参数的输入设备，不属于调试工具。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-26": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "SoC（系统级芯片）将处理器、存储器、外设接口等功能集成在单一芯片上，已广泛应用于智能手机、物联网设备等领域，因此D选项说“目前还没有得到广泛使用”是错误的。A、B、C选项均正确描述了SoC的特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-10": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式系统软件包括系统软件（如操作系统）、驱动和中间件等。FPGA编程软件是用于开发FPGA硬件的工具，属于开发软件而非嵌入式系统本身的软件组成部分。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-109": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式CPU通常强调实时处理能力、低功耗和集成测试电路（如JTAG），而高主频并非其核心特点，因为嵌入式系统更注重功耗和实时性，主频往往低于通用CPU。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-25": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式CPU通常强调实时处理、低功耗和集成测试电路（如JTAG），而高主频并非其核心特点，因为嵌入式系统更关注功耗和实时性，主频往往低于通用CPU。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-79": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "OSTimeDly() 是 uC/OS-II 中用于将当前任务延时指定时间，从而让任务进入等待状态的函数。OSTimeTick() 是时钟节拍服务函数，OSStart() 启动多任务，OSSemPend() 等待信号量也可能导致任务等待，但题目明确要求“让任务进入等待状态的调用”，通常指主动延时，且标准答案为 B，故选择 B。",
    "calculation": "",
    "review": "注意：OSSemPend() 也会使任务进入等待状态（等待信号量），但题目可能特指“延时等待”，且标准答案为 B，故按标准答案处理。",
    "confidence": "medium"
  },
  "Sheet2-80": {
    "answerStatus": "review",
    "suggestedAnswer": "uncertain",
    "explanation": "uC/OS-II中，OSTimeDlyHMSM()用于任务延时，使任务进入等待状态；OSSemPend()和OSMutexPend()用于等待信号量或互斥量，也会使任务进入等待状态。题目可能期望OSTimeDlyHMSM()，但其他选项同样可导致等待。",
    "calculation": "",
    "review": "标准答案C可能正确，但选项A和D也会使任务进入等待状态（等待信号量/互斥量）。题目表述不严谨，未明确是哪种等待。",
    "confidence": "medium"
  },
  "Sheet2-110": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "数码相机使用闪存卡（如CF卡、SD卡）作为外部存储介质，用于存储照片等数据，而非作为内存存储运行的软件。软件通常存储在ROM或内部闪存中。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-44": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "GPIO（通用输入/输出）的特点包括通用输入/输出功能、软件可重新映射IO复用功能、单独的位设置或位清除（位操作）。部分端口具有外部中断能力是某些微控制器的特性，但不是所有GPIO都具备，且并非所有端口都有，因此“部分端口都有外部中断能力”表述不准确，不是GPIO的普遍特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-4": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统通常具有实时约束，其操作系统往往需要支持实时性（如RTOS），因此选项B说“不具有实时约束”是错误的，故B不是嵌入式系统的特点。其他选项均为嵌入式系统的典型特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-8": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "实时操作系统（RTOS）要求任务在规定时间内完成。VxWorks、RTAI、RTLinux均为实时操作系统，而Windows7是通用操作系统，不具备硬实时特性。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-89": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统是专用计算机系统，通常用于控制、监视或辅助设备运行。服务器是通用计算机系统，用于提供计算服务，不属于嵌入式系统。有线电视机顶盒、电饭煲、路由器均为嵌入式系统。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-43": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "STM32F103VBT6的GPIO端口并非所有都兼容5V，只有部分引脚（如FT引脚）可容忍5V，普通引脚仅支持3.3V。A选项：该芯片有GPIOA~GPIOE共5组，正确；B选项：每个GPIO引脚最大输出电流为25mA，正确；D选项：每组IO口有16个引脚，正确。因此描述错误的是C。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-40": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "边界扫描链通过串行方式输入输出，但并非任何状态下都能观察和控制芯片，例如芯片处于复位或低功耗模式时可能无法正常工作。选项D表述过于绝对，因此错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-59": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "IABR是只读寄存器，用于指示当前正在执行的中断，不能通过软件置1来激活中断。激活中断需通过设置ISPR或软件触发中断寄存器。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-23": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "RISC（精简指令集计算机）的特点包括：指令长度固定、大多数指令单周期执行、大量通用寄存器、采用流水线技术、只有Load/Store指令访问内存。选项C描述的是CISC（复杂指令集计算机）的特点，因此不属于RISC特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-122": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式系统通常具有系统内核小、专用性强、系统精简等特点，但多任务执行并非其独具特点，通用操作系统也支持多任务。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-15": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式系统是专用计算机系统，PDA、ATM取款机、机顶盒都是嵌入式系统产品，而个人计算机是通用计算机，不属于嵌入式系统。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-3": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式开发通常需要交叉编译工具链、调试器（如J-Link）和开发板等专门软硬件，因此B正确。A错误，因为并非所有电子设备（如普通PC）都是嵌入式系统；C错误，CISC和RISC各有适用领域，不会完全取代；D错误，STM32F103VBT6有GPIOA~GPIOE共5组，不是6组。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-7": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "实时系统要求在规定时间内完成响应，飞行控制系统对时间要求严格，属于硬实时系统；电子邮件系统、电子书阅读器、微信允许一定延迟，属于非实时或软实时系统。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-116": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式操作系统不一定是实时多任务系统（如Linux可用于非实时场景），也不仅适用于特定CPU（许多嵌入式OS支持多种架构）。A、B、D描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-72": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "ADC使用步骤通常包括：开启GPIO时钟并设为模拟输入、使能ADC时钟并设置分频、配置ADC工作模式（如单次/连续转换、对齐方式等）。端口复用功能（AFIO）用于将引脚连接到外设，但ADC引脚默认就是模拟输入，无需额外复用配置，因此B是不需要的步骤。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-94": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "RS-485采用差分信号，抗干扰能力强，最长通信距离可达1200米以上，而RS-232通常只有15米左右，两者距离不相当，故B错误。A、C、D描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-91": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "冯·诺依曼结构采用单一存储空间，程序指令和数据共用同一存储器，即程序存储空间与数据存储空间合并。选项A描述的是哈佛结构的特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-97": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式最小硬件系统通常包括嵌入式处理器、时钟电路和电源电路。现代许多嵌入式处理器（如STM32）片内集成Flash和RAM，无需外扩存储器即可运行简单程序，因此D选项说法过于绝对，是错误的。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-112": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "RS-232标准通常用于短距离通信（约15米），而RS-485标准支持更远的通信距离（可达1200米以上）和更高的通信速率。因此选项B的说法错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-108": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统应用领域广泛，具有实时性，由硬件和软件组成。选项B说嵌入式系统性能较低、价格便宜，这过于绝对，因为高端嵌入式系统（如手机、汽车电子）性能高、价格贵，因此B错误。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-115": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统历史悠久，早在20世纪60年代就已用于航天等领域，并非只有十年左右的历史。A、B、C选项均正确描述了嵌入式系统的现状和重要性。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-87": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "嵌入式系统的CPU并不都是8位字长，还有16位、32位甚至64位的处理器，因此C选项错误。A、B、D选项描述正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-111": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "A错误：线性键盘每个按键需独立I/O引脚，矩阵键盘通过行列扫描可减少引脚数（如16键矩阵只需8个引脚）。B错误：电容式触摸屏通常用手指或导电笔，无需专用硬笔；电阻屏才需硬笔。C错误：LED需串联限流电阻，不能直接连接GPIO，否则可能损坏引脚或LED。D正确：LED数码管内部LED有共阳极（公共端接高电平）和共阴极（公共端接地）两种接法。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-1": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式操作系统通常具有内核精简、专用性强、高实时性等特点，而“功能强大”并非其典型特征，因为嵌入式系统往往资源受限，追求的是针对特定应用的优化而非通用功能的强大。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-36": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式微控制器（MCU）集成了CPU、存储器、I/O接口等，具有高可靠性、低成本和丰富的外设，非常适合工业控制中的实时控制和数据采集。嵌入式微处理器（MPU）通常需要外部存储器，适合复杂计算；DSP专用于数字信号处理，不适合通用控制。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-92": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式微控制器（MCU）集成了CPU、存储器、I/O接口等，具有高可靠性、低功耗和丰富的控制功能，非常适合工业控制中的实时控制和数据采集。嵌入式微处理器（MPU）通常需要外设芯片，成本高且不适合复杂环境；DSP主要用于数字信号处理，控制能力较弱。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-93": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "FFT计算涉及大量乘加运算和数字信号处理，DSP处理器专为这类算法优化，具有硬件乘法器、流水线结构和专用指令，效率远高于通用微处理器和微控制器。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-121": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统常见调试方法包括模拟调试、软件调试和BDM/JTAG调试，而“单独调试”并非标准术语或常用方法。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-117": {
    "answerStatus": "wrong",
    "suggestedAnswer": "D",
    "explanation": "在μC/OS-II中，任务优先级号并不等同于任务编号（ID），优先级号用于调度，而任务ID通常由用户定义或通过其他方式标识。选项D的说法错误。选项C：μC/OS-II 2.5版本确实占用6个任务（空闲任务、统计任务等），保留优先级0~5，但说法基本正确。选项A：2.5版本支持64个任务，每个任务有唯一优先级，正确。选项B：系统总是运行就绪态中优先级最高的任务，正确。",
    "calculation": "",
    "review": "标准答案C可能源于对“保留优先级”的理解差异，但μC/OS-II 2.5版本确实占用优先级0~5共6个任务，说法正确。而D明显错误，因为优先级号不是任务ID。",
    "confidence": "medium"
  },
  "Sheet2-81": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "uC/OS-II是一个轻量级实时操作系统，设计用于嵌入式系统，通常不需要MMU（内存管理单元）。它可以在没有MMU的微控制器上运行。选项A、B、C是移植uC/OS-II的必要条件：需要可重入代码、支持中断和定时中断、以及能够用C语言控制中断的开关。因此，不需要的条件是D。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-78": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "uC/OS-II的任务状态包括：睡眠态、就绪态、运行态、等待态（挂起态）和中断服务态。没有“删除状态”，任务删除后进入睡眠态。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-76": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "uC/OS-II是一个实时操作系统内核，提供任务管理、时间管理、同步与通信（如信号量、消息邮箱、消息队列、事件标志）以及内存管理等功能，但不包含网络协议栈。网络协议通常由第三方软件或上层应用实现。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-77": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "uC/OS-II是一个实时操作系统内核，主要提供任务管理、任务间通信与同步（如信号量、消息邮箱、消息队列）、时钟管理（如延时函数）等核心服务，但不包含设备管理功能。设备管理通常由板级支持包（BSP）或上层应用实现，不属于内核直接提供的系统服务。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-74": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "uC/OS是一个实时操作系统，支持多任务（D），每个任务有独立的栈（A），且具有可确定性（B），即系统响应时间可预测。而多线程（C）通常指同一进程内的多个执行流，uC/OS的任务是独立进程，不强调线程概念，因此多线程不是其性能特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-75": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "uC/OS是一个实时操作系统，其特点包括公开源代码、支持中断管理和提供系统服务（如任务管理、信号量等）。它不提供虚拟内存管理功能，因为虚拟内存通常需要MMU支持，而uC/OS多用于无MMU的嵌入式系统。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-14": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "意法半导体（STMicroelectronics）是欧洲公司，其ARM芯片非国产。沁恒、极海、海思均为中国公司，属于国产CPU。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-11": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式微处理器通常针对实时多任务、存储保护和可扩展结构进行优化，但并非以大量数据运算为主要目标，大量数据运算更偏向通用处理器或DSP。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-69": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "A/D转换器常见类型包括逐次比较型、电容阵列逐次比较型、压频变换型等。Σ-Ω型应为Σ-Δ型（Sigma-Delta），Ω是电阻单位，此处为笔误，故不属于正确类型。",
    "calculation": "",
    "review": "选项C中Σ-Ω型应为Σ-Δ型，属于常见笔误，标准答案正确。",
    "confidence": "high"
  },
  "Sheet2-27": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "RISC是精简指令集计算机，A错；哈佛结构是程序与数据分开存储，B错；ARM处理器有16位Thumb指令，C错；Cortex-M系列专为微控制器设计，面向控制应用，D正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-96": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "RISC是精简指令集计算机，A错误；哈佛结构是程序与数据分开存储，B错误；ARM处理器有16位Thumb指令和32位ARM指令，C错误；ARMCortex-M系列专为微控制器设计，面向控制应用，D正确。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-114": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统资源受限，应用软件通常需要精简代码、轻量化设计以节省存储和运行资源。A选项过于绝对，许多嵌入式系统（如智能手机、车载系统）也具备图形用户界面；B选项错误，部分嵌入式系统（如简单传感器节点）可能无操作系统；C选项描述的是通用计算机系统的设计目标，嵌入式系统更注重实时性、可靠性和资源效率。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-90": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统设计通常优先考虑低成本、低功耗和实时性，而高性能往往不是首要目标，因为嵌入式系统资源受限，需在性能与功耗、成本间权衡。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-38": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "交叉编译是指在一个平台上生成另一个平台上的可执行代码。选项B中，在Windows（x86）上使用arm-elf-gcc编译出针对Linux ARM平台的可执行代码，符合交叉编译的定义。选项A是本地编译（gcc通常生成当前平台代码，但Windows上gcc生成Windows代码，不是Linux）。选项C是本地编译。选项D是本地编译。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-39": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "交叉开发软件指在宿主机上开发、编译、链接，生成目标机可执行代码的集成开发环境。IAR EWARM、Keil ARM-MDK 和 ARM Developer Suite 均支持 ARM 嵌入式系统的交叉开发，因此以上都是。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-35": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "RISC（精简指令集计算机）的特点是：指令长度固定、种类少；寻址方式简单，指令功能单一；设置大量通用寄存器，简化存储器访问；选取使用频率高的简单指令。选项B描述的是CISC（复杂指令集计算机）的特点，因此不符合RISC特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-120": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "嵌入式系统通常需要操作系统（如RTOS）来管理资源，但并非所有嵌入式系统都必须有操作系统，然而题目问的是“不属于嵌入式系统特点”，B选项说“不需要操作系统”过于绝对，实际上很多嵌入式系统使用操作系统，因此B不是普遍特点。A、C、D均为嵌入式系统的典型特点。",
    "calculation": "",
    "review": "标准答案B正确。但需注意：有些极简单的嵌入式系统可能确实没有操作系统，但作为特点描述，“不需要操作系统”并不准确，因为大多数嵌入式系统需要操作系统支持。",
    "confidence": "high"
  },
  "Sheet2-5": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统通常具有专用性、隐蔽性、资源受限等特点，但并非所有嵌入式系统性能都低或价格便宜，例如高端嵌入式系统（如手机、汽车电子）性能强大且价格不菲。因此D选项描述不准确，不属于嵌入式系统的必然特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-6": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "嵌入式系统通常资源受限，内存容量远小于PC，因此D选项明显错误。A、B、C均为嵌入式系统的典型特点。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-32": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "位带别名地址计算公式：别名地址 = 位带基址 + (字节偏移*32) + (位号*4)。对于SRAM区，位带基址为0x22000000，字节偏移为0x20000000-0x20000000=0，位号为2，因此别名地址=0x22000000 + (0*32+2)*4 = 0x22000000 + 8 = 0x22000008。",
    "calculation": "位带基址=0x22000000，字节偏移=0，位号=2，别名地址=0x22000000 + (0*32+2)*4 = 0x22000008",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-33": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "位带别名地址计算公式：别名地址 = 位带基址 + (字节偏移*32 + 位号*4)。字节偏移 = 0x20000001 - 0x20000000 = 1，位号=2，位带基址=0x22000000。计算：1*32+2=34，34*4=136=0x88，别名地址=0x22000000+0x88=0x22000088。但选项C为0x22000028，与计算结果不符。注意：题干中“第2位(位从0算起)”可能指位2，但标准答案C=0x22000028对应字节偏移0，位号10？重新计算：若字节偏移=0，位号=10，则(0*32+10)*4=40=0x28，别名地址=0x22000028。但题干明确字节地址0x20000001，位2。可能标准答案有误？实际上，位带别名地址计算：对于SRAM区，位带基址0x22000000，位带区基址0x20000000。地址0x20000001的位2：字节偏移=1，位号=2，则别名地址=0x22000000 + (1*32+2)*4 = 0x22000000 + 34*4 = 0x22000000 + 136 = 0x22000088。但选项无此值。若按位带区地址0x20000000的位2（即字节0，位2），则别名地址=0x22000000 + (0*32+2)*4 = 0x22000008，也不匹配。选项C=0x22000028，对应(0*32+10)*4=40，即字节0位10。因此，题干或选项可能有误。但根据常见考题，有时会问“0x20000000的第2位”答案为0x22000008，或“0x20000001的第2位”答案为0x22000088。此处标准答案C=0x22000028，可能对应的是0x20000000的第10位？或者教材中位带别名公式不同？建议复核。",
    "calculation": "位带别名地址 = 0x22000000 + (字节偏移*32 + 位号)*4。字节偏移=0x20000001-0x20000000=1，位号=2，得0x22000088。但选项无此值。若字节偏移=0，位号=10，得0x22000028。",
    "review": "标准答案C=0x22000028，但根据位带别名公式，0x20000001的第2位应得0x22000088，不在选项中。可能题干或选项有误，或教材使用不同公式。建议确认题目是否应为0x20000000的第10位，或位带基址不同。",
    "confidence": "low"
  },
  "Sheet2-101": {
    "answerStatus": "ok",
    "suggestedAnswer": "D",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A-0x40000000)*32 + bit*4。其中A=0x40011111，bit=1。计算：(0x40011111-0x40000000)=0x11111，乘以32得0x2222220，加上bit*4=4得0x2222224，再加0x42000000得0x42222224。",
    "calculation": "A-0x40000000 = 0x11111\n0x11111 * 32 = 0x2222220\nbit*4 = 1*4 = 4\n0x2222220 + 4 = 0x2222224\n0x42000000 + 0x2222224 = 0x42222224",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-102": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "位带别名地址计算公式：AliasAddr = 0x42000000 + (A-0x40000000)*32 + bit*4。其中A=0x40011111，bit=2。计算：(0x40011111-0x40000000)=0x11111，乘以32得0x2222220，加上bit*4=8得0x2222228，再加0x42000000得0x42222228。",
    "calculation": "A-0x40000000 = 0x11111\n0x11111 * 32 = 0x2222220\nbit*4 = 2*4 = 8 = 0x8\n0x2222220 + 0x8 = 0x2222228\n0x42000000 + 0x2222228 = 0x42222228",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-17": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "寄存器组位于CPU内部，与CPU同速，存取速度最快；Cache次之，内存和Flash更慢。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-70": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "数字音频数字化过程首先对模拟信号进行取样（采样），得到离散时间信号；然后对取样值进行量化，将连续幅度映射为离散电平；最后进行编码，将量化值转换为二进制数字。因此顺序为取样→量化→编码。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-95": {
    "answerStatus": "ok",
    "suggestedAnswer": "C",
    "explanation": "数字音频数字化过程首先对模拟信号进行采样（时间离散化），然后对采样值进行量化（幅度离散化），最后将量化值编码为二进制数字信号。因此顺序为采样→量化→编码。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  },
  "Sheet2-57": {
    "answerStatus": "ok",
    "suggestedAnswer": "B",
    "explanation": "在ARM Cortex-M内核的NVIC中，中断除能寄存器ICER（Interrupt Clear-Enable Register）用于禁用中断。其特性是：写1将对应的中断使能位清零（即禁用中断），写0无效。因此，ICER是写1有效、写0无效。",
    "calculation": "",
    "review": "",
    "confidence": "high"
  }
};
