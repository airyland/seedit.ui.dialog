define("seedit/dialog/0.0.1/dialog",["$"],function(a,b,c){var d=a("$");!function(a){var b="linear-gradient(top, #fafafa, #eee)",c='<style type="text/css">#zxxBlank{position:absolute;z-index:2000;left:0;top:0;width:100%;height:0;background:black;}.wrap_out{border-radius:4px;padding:4px;background:#eee;background:rgba(221,221,221,.8);/**box-shadow:0 0 6px rgba(0,0,0,.5);**/position:absolute;z-index:2000;left:-9999px;}.wrap_in{border-radius:3px;background:#fafafa;border:1px solid #ccc;}.wrap_bar{border-bottom:1px solid #ddd;background:#f0f0f0;background:-moz-'+b+";background:-o-"+b+";background:-webkit-"+b+";background:"+b+";}.wrap_title{line-height:24px;padding-left:10px;margin:0;font-weight:normal;font-size:1em;}.wrap_close{position:relative;}.wrap_close a{width:20px;height:20px;text-align:center;margin-top:-22px;color:#34538b;font:bold 1em/20px Tahoma;text-decoration:none;cursor:pointer;position:absolute;right:6px;}.wrap_close a:hover{text-decoration:none;color:#f30;}.wrap_body{background:white;border-radius:3px;}.wrap_remind{width:16em;padding:30px 40px;}.wrap_remind p{margin:10px 0 0;}.submit_btn, .cancel_btn{display:inline-block;padding:3px 12px 1.99px;line-height:16px;border:1px solid;cursor:pointer;overflow:visible;}.submit_btn{background:#486aaa;border-color:#a0b3d6 #34538b #34538b #a0b3d6;color:#f3f3f3;}.submit_btn:hover{text-decoration:none;color:#fff;}.cancel_btn{background:#eee;border-color:#f0f0f0 #bbb #bbb #f0f0f0;color:#333;}</style>";a("head").append(c);var d='<div id="zxxBlank" onselectstart="return false;"></div><div class="wrap_out" id="wrapOut"><div class="wrap_in" id="wrapIn"><div id="wrapBar" class="wrap_bar" onselectstart="return false;"><h4 id="wrapTitle" class="wrap_title"></h4><div class="wrap_close"><a href="javasctipt:" id="wrapClose" title="关闭"></a></div></div><div class="wrap_body" id="wrapBody"></div></div></div>';a.fn.dialog=function(b){b=b||{};var c=a.extend({},e,b);return this.each(function(){var d=this.nodeName.toLowerCase();"a"===d&&c.ajaxTagA?a(this).click(function(){var c=a.trim(a(this).attr("href"));if(c&&0!=c.indexOf("javascript:"))if(0===c.indexOf("#"))a.dialog(a(c),b);else{a.dialog.loading();var d=new Image;d.onload=function(){var e=d.width,f=d.height;if(e>0){var g=a('<img src="'+c+'" width="'+e+'" height="'+f+'" />');b.protect=!1,a.dialog(g,b)}},d.onerror=function(){a.dialog.ajax(c,{},b)},d.src=c}return!1}):a.dialog(a(this),b)})},a.dialog=function(b,c){if(b){var f=a.extend({},e,c||{}),g=a("#wrapOut"),h=a("#zxxBlank");g.size()?(g.show(),h[f.bg?"show":"hide"]()):a(d).hide().appendTo("body").show(),"object"==typeof b?b.show():b=a(b),a.o={s:f,ele:b,bg:h.size()?h:a("#zxxBlank"),out:g.size()?g:a("#wrapOut"),tit:a("#wrapTitle"),bar:a("#wrapBar"),clo:a("#wrapClose"),bd:a("#wrapBody")},a.o.tit.html(f.title),a.o.clo.html(f.shut),!f.title&&f.btnclose&&(a.o.bar.css("border","none"),a.o.tit.hide(),a.o.clo.css("top","25px").show()),a.o.bd.empty().append(b),a.isFunction(f.onshow)&&f.onshow(),a.dialog.setSize(),a.dialog.setPosition(),f.fix&&a.dialog.setFixed(),f.drag?a.dialog.drag():a(window).resize(function(){a.dialog.setPosition()}),f.bar?a.dialog.barShow():a.dialog.barHide(),f.bg?a.dialog.bgShow():a.dialog.bgHide(),f.btnclose?a.o.clo.click(function(){return a.dialog.hide(),!1}):a.dialog.closeBtnHide(),f.bgclose&&a.dialog.bgClickable(),f.delay>0&&setTimeout(a.dialog.hide,f.delay),f.border===!1&&a.o.out.css("padding","0")}},a.extend(a.dialog,{setSize:function(){return a.o.bd.size()&&a.o.ele.size()&&a.o.bd.size()?(a.o.out.css({width:a.o.s.width,"height:":a.o.s.height}),a.o.out):void 0},setPosition:function(b){if(b=b||!1,a.o.bg.size()&&a.o.ele.size()&&a.o.out.size()){var c=a(window).width(),d=a(window).height(),e=a(window).scrollTop(),f=a("body").height();d>f&&(f=d),a.o.bg.width(c).height(f).css("opacity",a.o.s.opacity);var g=a.o.out.outerHeight(),h=a.o.out.outerWidth(),i=e+(d-g)/2,j=(c-h)/2;return a.o.s.fix&&window.XMLHttpRequest&&(i=(d-g)/2),b===!0?a.o.out.animate({top:i,left:j}):a.o.out.css({top:i,left:j,zIndex:a.o.s.index}),a.o.out}},setFixed:function(){return a.o.out&&a.o.out.size()?(window.XMLHttpRequest?a.dialog.setPosition().css({position:"fixed"}):a(window).scroll(function(){a.dialog.setPosition()}),a.o.out):void 0},bgClickable:function(){a.o.bg&&a.o.bg.size()&&a.o.bg.click(function(){a.dialog.hide()})},bgHide:function(){a.o.bg&&a.o.bg.size()&&a.o.bg.hide()},bgShow:function(){a.o.bg&&a.o.bg.size()?a.o.bg.show():a('<div id="zxxBlank"></div>').prependTo("body")},barHide:function(){a.o.bar&&a.o.bar.size()&&a.o.bar.hide()},barShow:function(){a.o.bar&&a.o.bar.size()&&a.o.bar.show()},closeBtnHide:function(){a.o.clo&&a.o.clo.size()&&a.o.clo.hide()},hide:function(){return a.o.ele&&a.o.out.size()&&"none"!==a.o.out.css("display")&&(a.o.out.fadeOut("fast",function(){!a.o.s.protect||a.o.ele.hasClass("wrap_remind")&&!a.o.ele.attr("id")||a.o.ele.hide().appendTo(a("body")),a(this).remove(),a.isFunction(a.o.s.onclose)&&a.o.s.onclose()}),a.o.bg.size()&&a.o.bg.fadeOut("fast",function(){a(this).remove()})),!1},drag:function(){if(!a.o.out.size()||!a.o.bar.size())return a(document).unbind("mouseover").unbind("mouseup"),void 0;var b=a.o.bar,c=a.o.out,d=!1,e=0,f=0,g=c.css("left"),h=c.css("top");b.mousedown(function(a){d=!0,e=a.pageX,f=a.pageY}).css("cursor","move"),a(document).mousemove(function(a){if(d){var b=a.pageX,i=a.pageY,j=b-e,k=i-f;c.css("left",parseInt(g)+j).css("top",parseInt(h)+k)}}),a(document).mouseup(function(){d=!1,g=c.css("left"),h=c.css("top")})},loading:function(){var b=a('<div class="wrap_remind">加载中...</div>');a.dialog(b,{bar:!1})},ask:function(b,c,d,e){var f=a('<div class="wrap_remind">'+b+'<p><button id="zxxSureBtn" class="submit_btn">确认</button>&nbsp;&nbsp;<button id="zxxCancelBtn" class="cancel_btn">取消</button></p></div>');a.dialog(f,e),a("#zxxSureBtn").click(function(){a.isFunction(c)&&c.call(this)}),a("#zxxCancelBtn").click(function(){d&&a.isFunction(d)&&d.call(this),a.dialog.hide()})},remind:function(b,c,d){var e=a('<div class="wrap_remind">'+b+'<p><button id="zxxSubmitBtn" class="submit_btn">确认</button</p></div>');a.dialog(e,d),a("#zxxSubmitBtn").click(function(){c&&a.isFunction(c)&&c.call(this),a.dialog.hide()})},ajax:function(b,c,d){b&&(a.dialog.loading(),d=d||{},d.protect=!1,a.ajax({url:b,data:c||{},success:function(b){a.dialog(b,d)},error:function(){a.dialog.remind("加载出了点问题。")}}))}});var e={title:"对话框",shut:"×",index:2e3,opacity:.5,width:"auto",height:"auto",bar:!0,bg:!0,btnclose:!0,fix:!1,bgclose:!1,drag:!1,ajaxTagA:!0,protect:"auto",onshow:a.noop,onclose:a.noop,delay:0}}(d),c.exports=d});
