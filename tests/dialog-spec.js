define(function (require) {
    var dialog = require('dialog');
    var $ = require('jquery');
    var expect = require('expect');
    var sinon = require('sinon');
    describe('dialog', function () {

        afterEach(function () {
            $('.x-overlay,.x-dialog-wrap').remove();
        });

        it('overlay::share the same one', function () {
            $.dialog.alert("你已成功受邀参加威尼斯电影节。", null);
            expect($('#x-overlay').length).to.be(1);
            $.dialog.alert("你已成功受邀参加威尼斯电影节。", null);
        });

        it('option::specified id',function(){
            $.dialog('<p>hello world</p>',{
                id:'dialog'
            });
            expect($('.x-dialog-dialog').length).to.be(1);
        });

        it('option::title',function(){
            $.dialog('<p>hello world</p>',{
                title:'hello world'
            });
            expect($('.wrap_title').eq(0).text()).to.be('hello world');
        });

        it('remind:show',function(){
            $.dialog.remind("你已成功受邀参加威尼斯电影节。",null,{bar:false});
            expect($('.x-dialog-remind').length).to.be(1);
        });

        it('confirm:show',function(){
            $.dialog.confirm("你已成功受邀参加威尼斯电影节。",null,{bar:false});
            expect($('.x-dialog-confirm').length).to.be(1);
        });

        it('alert:show',function(){
            $.dialog.alert("你已成功受邀参加威尼斯电影节。",null,{bar:false});
            expect($('.x-dialog-alert').length).to.be(1);
        });

        it('button:close',function(){

        });

        it('remind:button',function(){

        });
    });

});
