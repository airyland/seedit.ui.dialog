# 快捷方式
---

## alert
<a href="javascript:" id="test1">点我</a>

````javascript
seajs.use('dialog', function($){
   $("#test1").click(function(){
    $.zxxbox.remind("你已成功受邀参加威尼斯电影节。",null,{bar:false});                        
});
});
````

## alert no overlay
<a href="javascript:" id="test11">点我</a>

````javascript
seajs.use('dialog', function($){
   $("#test11").click(function(){
    $.zxxbox.remind("你已成功受邀参加威尼斯电影节。",null,{bar:false,bg:false});                        
});
});
````

## alert no border
<a href="javascript:" id="test12">点我</a>

````javascript
seajs.use('dialog', function($){
   $("#test12").click(function(){
    $.zxxbox.remind("你已成功受邀参加威尼斯电影节。",null,{title:false,bg:false,border:false,btnclose:true});                        
});
});
````


## alert with callback
<a href="javascript:" id="test2">点我</a>
````javascript
seajs.use('dialog', function($){
$("#test2").click(function(){
    $.zxxbox.remind('美国驻沪领事馆权威发布：上半年<a href="#nogo" title="上海">上海</a>赴美留学3.2万人。', function(){
        alert("哇哈哈，这是回调函数显示的内容：今年上海的学生签证通过率达到了95%。去年这一数字为90%。");
    }, {
        title: "参考消息"   
    });                        
}); 
});
````


## confirm

<a href="javascript:" id="test3">点我</a>
````javascript
seajs.use('dialog', function($){
$("#test3").click(function(){
    $.zxxbox.ask("确认改变页面的背景色为天蓝色", function(){
        $("body").css("background-color", "azure"); 
        $.zxxbox.hide();
    }, null, {
        title: "友情提示"   
    });                        
}); 
});
````