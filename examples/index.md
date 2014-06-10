# Dialog - 基础调用

- order: 1

---

主要演示传入各种 content，以及传入 url 的自动识别和高度管理。本页面载入了一份预设样式 [dialog.css](../src/dialog.css)。

<link href="http://aralejs.org/dialog/src/dialog.css" rel="stylesheet">
<style>
.fn-hide {display:none;}
</style>

---

### 1. 基本调用，内容传入字符串

<button id="example1">内容传入字符串</button>

````javascript
seajs.use(['index'], function(Dialog) {
    //console.log(Dialog);
    new Dialog({
        trigger: '#example1',
        height: '100px',
        content: '传入了字符串'
    });
});
````

<select></select>
<select></select>
<select></select>
<select></select>

