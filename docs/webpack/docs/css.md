# 处理 css

项目中通常是在 js 中引入 css 的，需要配置响应的 loader 才能处理响应的样式文件，并且提取 css 成单独的文件

- style-loader 在页面中创建 style 标签并且将 css 创建到 html 中
- css-loader 让 js 可以 import css
- 需要注意 loader 的先后顺序
