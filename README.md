# 嵌入式个人刷题工具

一个用于个人复习嵌入式选择题的静态网页刷题工具。打开 `index.html` 就能使用，也可以直接部署到 GitHub Pages。

本项目采用 vibe coding 方式完成：先基于真实题库快速做出能用的刷题体验，再根据使用反馈逐步迭代题目栏、错题记录、解析展示和页面布局。

## 功能

- 顺序刷题、随机刷题、错题重练
- 题目栏快速跳题
- 自动判题与正确/错误高亮
- 本地保存答题进度、错题和收藏
- 展示题目解析、计算过程和复核提示
- 支持静态部署，不需要后端服务

## 使用方式

直接双击打开：

```text
index.html
```

浏览器会加载：

```text
data/questions.js
data/explanations.js
```

答题记录保存在浏览器 `localStorage` 中。更换浏览器或清理浏览器数据后，本地答题记录会消失，但题库和解析不会受影响。

## 文件取舍

部署和正常使用必须保留：

```text
index.html
style.css
app.js
data/questions.js
data/explanations.js
```

建议保留：

```text
README.md
.gitignore
.env.example
tools/generate-explanations.js
```

其中 `tools/generate-explanations.js` 是早期本地生成解析的辅助脚本，不影响网页运行。保留它方便以后重新生成或参考解析格式。

可以不提交或不保留：

```text
.env
data/deepseek_explanations_cache.json
__pycache__/
*.pyc
```

说明：

- `.env` 用于存放 API Key，不能提交到公开仓库。
- `data/deepseek_explanations_cache.json` 是 DeepSeek 批量生成解析时的中间缓存，网页不需要它。
- 原始 Excel 题库不是网页运行必需文件；如果只部署网页，可以不上传。
- DeepSeek Python 脚本属于开发辅助工具，不是静态网页运行必需文件；如果后续还要重新用 AI 批量生成解析，可以再保留或补回。

## 数据格式

题库数据在：

```text
data/questions.js
```

解析数据在：

```text
data/explanations.js
```

网页会读取 `window.EMBEDDED_QUESTIONS` 和 `window.QUESTION_EXPLANATIONS` 两个全局变量。只要保持这两个文件的结构不变，页面就可以正常渲染。

## GitHub Pages 部署

这是纯静态项目，部署 GitHub Pages 不需要额外构建步骤。

推荐提交：

```text
index.html
style.css
app.js
data/questions.js
data/explanations.js
README.md
.gitignore
.env.example
tools/generate-explanations.js
```

部署步骤：

1. 将项目推送到 GitHub 仓库。
2. 打开仓库 `Settings`。
3. 进入 `Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 构建完成。

访问地址通常是：

```text
https://你的用户名.github.io/仓库名/
```

GitHub Pages 只负责展示静态网页。如果后续要调用 DeepSeek 生成解析，建议在本地先生成 `data/explanations.js`，再提交生成后的静态文件。

## 后续想法

- 按知识点、章节、难度筛选题目
- 增加模拟考试模式
- 增加答题报告和错题导出
- 增加题目搜索
- 优化移动端题目栏
- 增加题目纠错和人工备注功能
