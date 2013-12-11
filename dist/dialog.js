define("seedit/dialog/0.0.1/dialog",[],function(a,b,c){a.async("seedit/tweenMax/0.0.1/tweenMax");!function(a){var b=0,c="linear-gradient(top, #fafafa, #eee)",d="<style type=\"text/css\">@font-face {font-family: 'iconfont';src: url('http://at.alicdn.com/t/font_1385445457_1809516.eot'); /* IE9*/src: url('http://at.alicdn.com/t/font_1385445457_1809516.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('http://at.alicdn.com/t/font_1385445457_3880215.woff') format('woff'), /* chrome、firefox */ url('http://at.alicdn.com/t/font_1385445457_0878074.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/ url('http://at.alicdn.com/t/font_1385445457_4335415.svg#svgFontName') format('svg'); /* iOS 4.1- */}.x-dialog-icon {font-family: \"iconfont\";font-size: 24px;font-style: normal;margin-right: 5px;}#zxxBlank{position:absolute;z-index:2000;left:0;top:0;width:100%;height:0;background:black;}.wrap_out{border-radius:4px;padding:4px;background:#eee;background:rgba(221,221,221,.8);/**box-shadow:0 0 6px rgba(0,0,0,.5);**/position:absolute;z-index:2000;left:-9999px;}.wrap_in{border-radius:3px;background:#fafafa;border:1px solid #ccc;}.wrap_bar{border-bottom:1px solid #ddd;background:#f0f0f0;background:-moz-"+c+";background:-o-"+c+";background:-webkit-"+c+";background:"+c+";}.wrap_title{line-height:24px;padding-left:10px;margin:0;font-weight:normal;font-size:1em;}.wrap_close{position:relative;}.wrap_close a{width:20px;height:20px;text-align:center;margin-top:-22px;color:#34538b;font:bold 1em/20px Tahoma;text-decoration:none;cursor:pointer;position:absolute;right:6px;}.wrap_close a:hover{text-decoration:none;color:#f30;}.wrap_body{background:white;border-radius:3px;padding-bottom:0;}.wrap_remind{width:16em;padding:30px 40px;}.wrap_remind p{margin:10px 0 0;}.submit_btn, .cancel_btn{display:inline-block;padding:3px 12px 1.99px;line-height:16px;border:1px solid;cursor:pointer;overflow:visible;}.submit_btn{font-size:12px;background:#486aaa;border:none;color:#f3f3f3;border-radius:3px;padding:4px 12px;}.submit_btn:hover{text-decoration:none;color:#fff;}.cancel_btn{background:#eee;border-color:#f0f0f0 #bbb #bbb #f0f0f0;color:#333;}.x-dialog-alert {padding:15px;color:#555;font-size:14px;}.x-dialog-alert p {margin:0;text-aligN: right;margin-right: 15px;margin-top: 10px;}</style>";a("head").append(d);var e='<div id="zxxBlank" onselectstart="return false;"></div><div class="wrap_out x-dialog-wrap" id="wrapOut"><div class="wrap_in" id="wrapIn"><div id="wrapBar" class="wrap_bar" onselectstart="return false;"><h4 id="wrapTitle" class="wrap_title"></h4><div class="wrap_close"><a href="javasctipt:" id="wrapClose" title="关闭"></a></div></div><div class="wrap_body" id="wrapBody"></div></div></div>';a.fn.dialog=function(b){b=b||{};var c=a.extend({},f,b);return this.each(function(){var d=this.nodeName.toLowerCase();"a"===d&&c.ajaxTagA?a(this).click(function(){var c=a.trim(a(this).attr("href"));if(c&&0!=c.indexOf("javascript:"))if(0===c.indexOf("#"))a.dialog(a(c),b);else{a.dialog.loading();var d=new Image;d.onload=function(){var e=d.width,f=d.height;if(e>0){var g=a('<img src="'+c+'" width="'+e+'" height="'+f+'" />');b.protect=!1,a.dialog(g,b)}},d.onerror=function(){a.dialog.ajax(c,{},b)},d.src=c}return!1}):a.dialog(a(this),b)})},a.dialog=function(c,d){if(b++,c){var g=a.extend({},f,d||{}),h="x-dialog-uid-"+b,i=a("."+h);a(e).eq(0).appendTo("body").show(),a(e).eq(1).addClass(h).hide().appendTo("body").show();var j=a("#zxxBlank");j[g.bg?"show":"hide"](),"object"==typeof c?c.show():c=a(c),a.o={s:g,ele:c,bg:a("#zxxBlank"),out:a("."+h),tit:i.find("#wrapTitle"),bar:a("."+h+" #wrapBar"),clo:a("."+h+" #wrapClose"),bd:a("."+h+" #wrapBody")},g.id&&a.o.out.addClass("x-dialog-"+id),a.o.tit.html(g.title),a.o.clo.html(g.shut),!g.title&&g.btnclose&&(a.o.bar.css("border","none"),a.o.tit.hide(),a.o.clo.css("top","25px").show()),a.o.bd.empty().append(c),a.isFunction(g.onshow)&&g.onshow(),a.dialog.setSize(),a.dialog.setPosition(),g.fix&&a.dialog.setFixed(),g.drag?a.dialog.drag():a(window).resize(function(){a.dialog.setPosition()}),g.bar?a.dialog.barShow():a.dialog.barHide(),g.bg?a.dialog.bgShow():a.dialog.bgHide(),g.btnclose?a.o.clo.click(function(){return a.dialog.hide(),!1}):a.dialog.closeBtnHide(),g.bgclose&&a.dialog.bgClickable(),g.delay>0&&setTimeout(a.dialog.hide,g.delay),g.border===!1&&(a.o.out.css("padding","0"),i.find(".wrap_in").css("border","none"))}},a.extend(a.dialog,{setSize:function(){return a.o.bd.size()&&a.o.ele.size()&&a.o.bd.size()?(a.o.out.css({width:a.o.s.width,"height:":a.o.s.height}),a.o.out):void 0},setPosition:function(b){if(b=b||!1,a.o.bg.size()&&a.o.ele.size()&&a.o.out.size()){var c=a(window).width(),d=a(window).height(),e=a(window).scrollTop(),f=a("body").height();d>f&&(f=d),a.o.bg.width(c).height(f).css("opacity",a.o.s.opacity);var g=a.o.out.outerHeight(),h=a.o.out.outerWidth(),i=e+(d-g)/2,j=(c-h)/2;return a.o.s.fix&&window.XMLHttpRequest&&(i=(d-g)/2),b===!0?a.o.out.animate({top:i,left:j}):a.o.out.css({top:i,left:j,zIndex:a.o.s.index}),a.o.out}},setFixed:function(){return a.o.out&&a.o.out.size()?(window.XMLHttpRequest?a.dialog.setPosition().css({position:"fixed"}):a(window).scroll(function(){a.dialog.setPosition()}),a.o.out):void 0},bgClickable:function(){a.o.bg&&a.o.bg.size()&&a.o.bg.click(function(){a.dialog.hide()})},bgHide:function(){a.o.bg&&a.o.bg.size()&&a.o.bg.hide()},bgShow:function(){a.o.bg&&a.o.bg.size()?a.o.bg.show():a('<div id="zxxBlank"></div>').prependTo("body")},barHide:function(){a.o.bar&&a.o.bar.size()&&a.o.bar.hide()},barShow:function(){a.o.bar&&a.o.bar.size()&&a.o.bar.show()},closeBtnHide:function(){a.o.clo&&a.o.clo.size()&&a.o.clo.hide()},hide:function(){return a.o.ele&&a.o.out.size()&&"none"!==a.o.out.css("display")&&(a.o.out.fadeOut("fast",function(){!a.o.s.protect||a.o.ele.hasClass("wrap_remind")&&!a.o.ele.attr("id")||a.o.ele.hide().appendTo(a("body")),a(this).remove(),a.isFunction(a.o.s.onclose)&&a.o.s.onclose()}),a.o.bg.size()&&a.o.bg.fadeOut("fast",function(){a(this).remove()})),!1},drag:function(){if(!a.o.out.size()||!a.o.bar.size())return a(document).unbind("mouseover").unbind("mouseup"),void 0;var b=a.o.bar,c=a.o.out,d=!1,e=0,f=0,g=c.css("left"),h=c.css("top");b.mousedown(function(a){d=!0,e=a.pageX,f=a.pageY}).css("cursor","move"),a(document).mousemove(function(a){if(d){var b=a.pageX,i=a.pageY,j=b-e,k=i-f;c.css("left",parseInt(g)+j).css("top",parseInt(h)+k)}}),a(document).mouseup(function(){d=!1,g=c.css("left"),h=c.css("top")})},loading:function(){var b=a('<div class="wrap_remind">加载中...</div>');a.dialog(b,{bar:!1})},ask:function(b,c,d,e){var f=a('<div class="wrap_remind">'+b+'<p><button id="zxxSureBtn" class="submit_btn">确认</button>&nbsp;&nbsp;<button id="zxxCancelBtn" class="cancel_btn">取消</button></p></div>');a.dialog(f,e),a("#zxxSureBtn").click(function(){a.isFunction(c)&&c.call(this)}),a("#zxxCancelBtn").click(function(){d&&a.isFunction(d)&&d.call(this),a.dialog.hide()})},remind:function(b,c,d){var e=a('<div class="wrap_remind">'+b+'<p><button id="zxxSubmitBtn" class="submit_btn">确认</button</p></div>');a.dialog(e,d),a("#zxxSubmitBtn").click(function(){c&&a.isFunction(c)&&c.call(this),a.dialog.hide()})},alert:function(b,c,d){var e={success:["&#13703","#246a8e"],info:["&#13542","#246a8e"],warn:["&#13683","#fffcee"],danger:["&#13544","#e76e70"]},f={bar:!1,icon:"info",title:!1,border:!1};d=d||{},d=a.extend(f,d);var g='<i class="x-dialog-icon" style="color:'+e[d.icon][1]+'">'+e[d.icon][0]+"</i>  ",h=a('<div class="x-dialog-alert">'+g+b+'<p><button id="x-dialog-button" class="submit_btn x-dialog-confirm">确认</button></p></div>');a.dialog(h,d),a(document).on("click","#x-dialog-button",function(){c&&a.isFunction(c)&&c.call(this),a(this).closest(".x-dialog-wrap").hide(),a(".x-dialog-wrap").length&&a("#zxxBlank").hide()})},ajax:function(b,c,d){b&&(a.dialog.loading(),d=d||{},d.protect=!1,a.ajax({url:b,data:c||{},success:function(b){a.dialog(b,d)},error:function(){a.dialog.remind("加载出了点问题。")}}))}});var f={title:"对话框",shut:"×",index:2e3,opacity:.5,content:"",width:"auto",height:"auto",bar:!0,bg:!0,btnclose:!0,fix:!1,bgclose:!1,drag:!1,ajaxTagA:!0,protect:"auto",onshow:a.noop,onclose:a.noop,delay:0,id:""};a(document).keyup(function(b){27==b.keyCode&&a.dialog.hide()})}(jQuery),c.exports=jQuery});
