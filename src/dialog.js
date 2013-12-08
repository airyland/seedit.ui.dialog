define(function (require, exports, module) {
    // tweenMax
    var tweenMax = require.async('seedit/tweenMax/0.0.1/tweenMax');
    (function ($) {
        //给页面装载CSS样式
        var LG = 'linear-gradient(top, #fafafa, #eee)',
            CSS = '<style type="text/css">' +
                "@font-face {font-family: 'iconfont';src: url('http://at.alicdn.com/t/font_1385445457_1809516.eot'); /* IE9*/src: url('http://at.alicdn.com/t/font_1385445457_1809516.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('http://at.alicdn.com/t/font_1385445457_3880215.woff') format('woff'), /* chrome、firefox */ url('http://at.alicdn.com/t/font_1385445457_0878074.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/ url('http://at.alicdn.com/t/font_1385445457_4335415.svg#svgFontName') format('svg'); /* iOS 4.1- */}" +
                '.x-dialog-icon {font-family: "iconfont";font-size: 24px;font-style: normal;margin-right: 5px;}' +
                '#zxxBlank{position:absolute;z-index:2000;left:0;top:0;width:100%;height:0;background:black;}' +
                '.wrap_out{border-radius:4px;padding:4px;background:#eee;background:rgba(221,221,221,.8);/**box-shadow:0 0 6px rgba(0,0,0,.5);**/position:absolute;z-index:2000;left:-9999px;}' +
                '.wrap_in{border-radius:3px;background:#fafafa;border:1px solid #ccc;}' +
                '.wrap_bar{border-bottom:1px solid #ddd;background:#f0f0f0;background:-moz-' + LG + ';background:-o-' + LG + ';background:-webkit-' + LG + ';background:' + LG + ';}' +
                '.wrap_title{line-height:24px;padding-left:10px;margin:0;font-weight:normal;font-size:1em;}' +
                '.wrap_close{position:relative;}' +
                '.wrap_close a{width:20px;height:20px;text-align:center;margin-top:-22px;color:#34538b;font:bold 1em/20px Tahoma;text-decoration:none;cursor:pointer;position:absolute;right:6px;}' +
                '.wrap_close a:hover{text-decoration:none;color:#f30;}' +
                '.wrap_body{background:white;border-radius:3px;padding-bottom:0;}' +
                '.wrap_remind{width:16em;padding:30px 40px;}' +
                '.wrap_remind p{margin:10px 0 0;}' +
                '.submit_btn, .cancel_btn{display:inline-block;padding:3px 12px 1.99px;line-height:16px;border:1px solid;cursor:pointer;overflow:visible;}' +
                '.submit_btn{font-size:12px;background:#486aaa;border:none;color:#f3f3f3;border-radius:3px;padding:4px 12px;}' +
                '.submit_btn:hover{text-decoration:none;color:#fff;}' +
                '.cancel_btn{background:#eee;border-color:#f0f0f0 #bbb #bbb #f0f0f0;color:#333;}' +
                '.x-dialog-alert {padding:15px;color:#555;font-size:14px;}' +
                '.x-dialog-alert p {margin:0;text-aligN: right;margin-right: 15px;margin-top: 10px;}' +
                '</style>';
        $("head").append(CSS);

        var WRAP = '<div id="zxxBlank" onselectstart="return false;"></div>' +
            '<div class="wrap_out" id="wrapOut">' +
            '<div class="wrap_in" id="wrapIn">' +
            '<div id="wrapBar" class="wrap_bar" onselectstart="return false;">' +
            '<h4 id="wrapTitle" class="wrap_title"></h4>' +
            '<div class="wrap_close"><a href="javasctipt:" id="wrapClose" title="关闭"></a></div>' +
            '</div>' +
            '<div class="wrap_body" id="wrapBody"></div>' +
            '</div>' +
            '</div>';

        $.fn.dialog = function (options) {
            options = options || {};
            var s = $.extend({}, dialogDefault, options);
            return this.each(function () {
                var node = this.nodeName.toLowerCase();
                if (node === "a" && s.ajaxTagA) {
                    $(this).click(function () {
                        var href = $.trim($(this).attr("href"));
                        if (href && href.indexOf("javascript:") != 0) {
                            if (href.indexOf('#') === 0) {
                                $.dialog($(href), options);
                            } else {
                                //加载图片
                                $.dialog.loading();
                                var myImg = new Image(),
                                    element;
                                myImg.onload = function () {
                                    var w = myImg.width,
                                        h = myImg.height;
                                    if (w > 0) {
                                        var element = $('<img src="' + href + '" width="' + w + '" height="' + h + '" />');
                                        options.protect = false;
                                        $.dialog(element, options);
                                    }
                                };
                                myImg.onerror = function () {
                                    //显示加载图片失败
                                    $.dialog.ajax(href, {}, options);
                                };
                                myImg.src = href;
                            }
                        }
                        return false;
                    });
                } else {
                    $.dialog($(this), options);
                }
            });
        };

        $.dialog = function (elements, options) {
            if (!elements) {
                return;
            }

            var s = $.extend({}, dialogDefault, options || {});

            //弹框的显示
            var eleOut = $("#wrapOut"),
                eleBlank = $("#zxxBlank");

            if (eleOut.size()) {
                eleOut.show();
                eleBlank[s.bg ? "show" : "hide"]();
            } else {
                $(WRAP).hide().appendTo('body').show();
            }

            // 如果为jQuery对象
            if (typeof(elements) === "object") {
                elements.show();
            } else {
                elements = $(elements);
            }

            //一些元素对象
            $.o = {
                s: s,
                ele: elements,
                bg: eleBlank.size() ? eleBlank : $("#zxxBlank"),
                out: eleOut.size() ? eleOut : $("#wrapOut"),
                tit: $("#wrapTitle"),
                bar: $("#wrapBar"),
                clo: $("#wrapClose"),
                bd: $("#wrapBody")
            };


            // 是否指定了id
            if (s.id) {
                $.o.out.addClass('x-dialog-' + id);
            }

            // 标题以及关闭内容

            $.o.tit.html(s.title);

            $.o.clo.html(s.shut);

            // just show close btn
            if (!s.title && s.btnclose) {
                $.o.bar.css('border', 'none');
                $.o.tit.hide();
                $.o.clo.css('top', '25px').show();
                // $.o.bd.css('padding', '25px 15px');
            }

            // @todo focus on close btn
            //$.o.clo.focus();

            //装载元素
            $.o.bd.empty().append(elements);

            if ($.isFunction(s.onshow)) {
                s.onshow();
            }
            //尺寸
            $.dialog.setSize();
            //定位
            $.dialog.setPosition();

            if (s.fix) {
                $.dialog.setFixed();
            }
            if (s.drag) {
                $.dialog.drag();
            } else {
                $(window).resize(function () {
                    $.dialog.setPosition();
                });
            }
            if (!s.bar) {
                $.dialog.barHide();
            } else {
                $.dialog.barShow();
            }
            if (!s.bg) {
                $.dialog.bgHide();
            } else {
                $.dialog.bgShow();
            }
            if (!s.btnclose) {
                $.dialog.closeBtnHide();
            } else {
                $.o.clo.click(function () {
                    $.dialog.hide();
                    return false;
                });
            }
            if (s.bgclose) {
                $.dialog.bgClickable();
            }
            if (s.delay > 0) {
                setTimeout($.dialog.hide, s.delay);
            }

            if (s.border === false) {
                $.o.out.css('padding', '0');
                $('.wrap_in').css('border', 'none');
            }
        };
        $.extend($.dialog, {
            setSize: function () {
                if (!$.o.bd.size() || !$.o.ele.size() || !$.o.bd.size()) {
                    return;
                }
                //主体内容的尺寸
                $.o.out.css({
                    "width": $.o.s.width,
                    "height:": $.o.s.height
                });

                return $.o.out;
            },
            setPosition: function (flag) {
                flag = flag || false;
                if (!$.o.bg.size() || !$.o.ele.size() || !$.o.out.size()) {
                    return;
                }
                var w = $(window).width(),
                    h = $(window).height(),
                    st = $(window).scrollTop(),
                    ph = $("body").height();
                if (ph < h) {
                    ph = h;
                }
                $.o.bg.width(w).height(ph).css("opacity", $.o.s.opacity);
                //主体内容的位置
                //获取当前主体元素的尺寸
                var xh = $.o.out.outerHeight(),
                    xw = $.o.out.outerWidth();
                var t = st + (h - xh) / 2,
                    l = (w - xw) / 2;

                if ($.o.s.fix && window.XMLHttpRequest) {
                    t = (h - xh) / 2;
                }
                if (flag === true) {
                    $.o.out.animate({
                        top: t,
                        left: l
                    });
                } else {
                    $.o.out.css({
                        top: t,
                        left: l,
                        zIndex: $.o.s.index
                    });
                }
                return $.o.out;
            },
            //定位
            setFixed: function () {
                if (!$.o.out || !$.o.out.size()) {
                    return;
                }
                if (window.XMLHttpRequest) {
                    $.dialog.setPosition().css({
                        position: "fixed"
                    });
                } else {
                    $(window).scroll(function () {
                        $.dialog.setPosition();
                    });
                }
                return $.o.out;
            },
            //背景可点击
            bgClickable: function () {
                if ($.o.bg && $.o.bg.size()) {
                    $.o.bg.click(function () {
                        $.dialog.hide();
                    });
                }
            },
            //背景隐藏
            bgHide: function () {
                if ($.o.bg && $.o.bg.size()) {
                    $.o.bg.hide();
                }
            },
            //背景层显示
            bgShow: function () {
                if ($.o.bg && $.o.bg.size()) {
                    $.o.bg.show();
                } else {
                    $('<div id="zxxBlank"></div>').prependTo("body");
                }
            },
            //标题栏隐藏
            barHide: function () {
                if ($.o.bar && $.o.bar.size()) {
                    $.o.bar.hide();
                }
            },
            //标题栏显示
            barShow: function () {
                if ($.o.bar && $.o.bar.size()) {
                    $.o.bar.show();
                }
            },
            //关闭按钮隐藏
            closeBtnHide: function () {
                if ($.o.clo && $.o.clo.size()) {
                    $.o.clo.hide();
                }
            },
            //弹框隐藏
            hide: function () {
                if ($.o.ele && $.o.out.size() && $.o.out.css("display") !== "none") {
                    $.o.out.fadeOut("fast", function () {
                        if ($.o.s.protect && (!$.o.ele.hasClass("wrap_remind") || $.o.ele.attr("id"))) {
                            $.o.ele.hide().appendTo($("body"));
                        }
                        $(this).remove();
                        if ($.isFunction($.o.s.onclose)) {
                            $.o.s.onclose();
                        }
                    });
                    if ($.o.bg.size()) {
                        $.o.bg.fadeOut("fast", function () {
                            $(this).remove();
                        });
                    }
                }
                return false;
            },
            //拖拽
            drag: function () {
                if (!$.o.out.size() || !$.o.bar.size()) {
                    $(document).unbind("mouseover").unbind("mouseup");
                    return;
                }
                var bar = $.o.bar,
                    out = $.o.out;
                var drag = false;
                var currentX = 0,
                    currentY = 0,
                    posX = out.css("left"),
                    posY = out.css("top");
                bar.mousedown(function (e) {
                    drag = true;
                    currentX = e.pageX;
                    currentY = e.pageY;
                }).css("cursor", "move");
                $(document).mousemove(function (e) {
                    if (drag) {
                        var nowX = e.pageX,
                            nowY = e.pageY;
                        var disX = nowX - currentX,
                            disY = nowY - currentY;
                        out.css("left", parseInt(posX) + disX).css("top", parseInt(posY) + disY);
                    }
                });
                $(document).mouseup(function () {
                    drag = false;
                    posX = out.css("left");
                    posY = out.css("top");
                });
            },
            //预载
            loading: function () {
                var element = $('<div class="wrap_remind">加载中...</div>');
                $.dialog(element, {
                    bar: false
                });
            },
            //ask询问方法
            ask: function (message, sureCall, cancelCall, options) {
                var element = $('<div class="wrap_remind">' + message + '<p><button id="zxxSureBtn" class="submit_btn">确认</button>&nbsp;&nbsp;<button id="zxxCancelBtn" class="cancel_btn">取消</button></p></div>');
                $.dialog(element, options);
                //回调方法
                $("#zxxSureBtn").click(function () {
                    if ($.isFunction(sureCall)) {
                        sureCall.call(this);
                    }
                });
                $("#zxxCancelBtn").click(function () {
                    if (cancelCall && $.isFunction(cancelCall)) {
                        cancelCall.call(this);
                    }
                    $.dialog.hide();
                });
            },
            //remind提醒方法
            remind: function (message, callback, options) {
                var element = $('<div class="wrap_remind">' + message + '<p><button id="zxxSubmitBtn" class="submit_btn">确认</button</p></div>');
                $.dialog(element, options);
                $("#zxxSubmitBtn").click(function () {
                    //回调方法
                    if (callback && $.isFunction(callback)) {
                        callback.call(this);
                    }
                    $.dialog.hide();
                });
            },

            // 可带icon
            alert: function (message, callback, options) {
                var iconMap = {
                    'success': ['&#13703', '#246a8e'],
                    'info': ['&#13542', '#246a8e'],
                    'warn': ['&#13683', '#fffcee'],
                    'danger': ['&#13544', '#e76e70']
                };
                var defaults = {bar: false, icon: 'info', title: false, border: false};
                options = options || {};
                options = $.extend(defaults, options);
                var iconHTML = '<i class="x-dialog-icon" style="color:' + iconMap[options['icon']][1] + '">' + iconMap[options['icon']][0] + '</i>  ';
                var element = $('<div class="x-dialog-alert">' + iconHTML + message + '<p><button id="x-dialog-button" class="submit_btn x-dialog-confirm">确认</button></p></div>');
                $.dialog(element, options);

                $(document).on('click', "#x-dialog-button", function () {
                    //回调方法
                    if (callback && $.isFunction(callback)) {
                        callback.call(this);
                    }
                    $.dialog.hide();
                });
            },

            //uri Ajax方法
            ajax: function (uri, params, options) {
                if (uri) {
                    $.dialog.loading();
                    options = options || {};
                    options.protect = false;
                    $.ajax({
                        url: uri,
                        data: params || {},
                        success: function (html, other) {
                            $.dialog(html, options);
                        },
                        error: function () {
                            $.dialog.remind("加载出了点问题。");
                        }
                    });
                }
            }
        });
        var dialogDefault = {
            title: "对话框",
            shut: "×",
            index: 2000,
            opacity: 0.5,

            content: '', // 弹窗内容

            width: "auto",
            height: "auto",

            bar: true, //是否显示标题栏
            bg: true, //是否显示半透明背景
            btnclose: true, //是否显示关闭按钮

            fix: false, //是否弹出框固定在页面上
            bgclose: false, //是否点击半透明背景隐藏弹出框
            drag: false, //是否可拖拽

            ajaxTagA: true, //是否a标签默认Ajax操作

            protect: "auto", //保护装载的内容

            onshow: $.noop, //弹窗显示后触发事件
            onclose: $.noop, //弹窗关闭后触发事件

            delay: 0, //弹窗打开后关闭的时间, 0和负值不触发

            id: "" // 标识一个弹窗的id

        };
    })(jQuery);
    module.exports = jQuery;
});