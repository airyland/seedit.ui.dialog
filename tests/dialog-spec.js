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
    });

});
