# 自动弹出

---

````javascript
seajs.use('dialog', function($){
   $.dialog.ask("确认改变页面的背景色为天蓝色", function() {
        $("body").css("background-color", "azure");
        $.dialog.hide();
    }, null, {
        title: "友情提示"
    });
});
````
