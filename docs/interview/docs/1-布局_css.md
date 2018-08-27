# html css

## 页面布局

### 注意事项

- 语义化掌握到位
- 页面布局理解深刻
- css 基础知识扎实
- 思维灵活且积极上进
- 代码书写规范

题目：假设高度已知，请写出三栏布局，其中左栏、右栏宽度各为 300px，中间自适应（延伸：优缺点，高度未知，兼容性）

#### 1、浮动

脱离文档流，需要注意清除浮动，兼容性好

```html
<section class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center"></div>
</section>
```

```css
.container {
  position: relative;
}

.left {
  width: 300px;
  float: left;
}

.right {
  width: 300px;
  float: right;
}

.center {
  margin-left: 300px;
  margin-right: 300px;
}
```

#### 2、绝对定位

脱离文档流，兼容性好，可使用性比较差

```html
<section class="container">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</section>
```

```css
.left {
  width: 300px;
  position: absolute;
  left: 0;
}

.right {
  width: 300px;
  position: absolute;
  right: 0;
}

.center {
  padding: 0 300px 0 300px;
}
```

#### 3、flex

方便，兼容性不好

```css
.container {
  position: relative;
  display: flex;
}

.left {
  width: 300px;
}

.right {
  width: 300px;
}

.center {
  flex-grow: 1;
  height: 100px;
}
```

#### 4、table 布局

```css
.container {
  display: table;
  width: 100%;
}

.left {
  width: 300px;
  display: table-cell;
}

.right {
  width: 300px;
  display: table-cell;
}

.center {
  display: table-cell;
}
```
