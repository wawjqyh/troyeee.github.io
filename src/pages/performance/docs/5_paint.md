# 回流与重绘

## css 会让 js 变慢

频繁触发重绘与回流，回导致 UI 频繁渲染，最终导致 js 变慢

## 回流和重绘的概念

### 回流

- 当 render tree 中的一部分（或全部）因为元素的规模尺寸、布局、隐藏等改变而需要重新构建。这就称为回流
- 当页面的布局和几何属性改变时，就需要回流

会触发回流的 css 属性：

- 盒子模型相关属性。width, height, padding, margin, display, border, min-height
- 定位属性和浮动。top, bottom, left, right, position, float, clear
- 改变节点内部文字结构。text-aligin, overflow, font-weight, font-family, line-height, vertival-aligin, font-size

### 重绘

- 当 render tree 中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如 `background-color`。这就称为重绘

**回流一定会引起重绘，而重绘不一定会引起回流**

只触发重绘的 css 属性：

color, border-style, border-radius, visibility, text-decoration, background, background-image, background-position, background-repeat, background-size, outline-color, outline-style, box-shadow

## 新建 DOM 的过程

1. 获取 DOM 后分割为多个图层
2. 对每个图层的节点计算样式结果（recalculate style - 样式重计算）
3. 为每个节点生成图形和位置（layout - 回流和重布局）
4. 将每个节点绘制填充到图层位图中（paint - 重绘）
5. 图层作为纹理上传到 GPU
6. 合成多个图层到页面上生成最终屏幕图像（composite layers - 图层重组）
