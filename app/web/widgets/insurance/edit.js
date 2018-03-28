const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');
const util = require('widgets/util');
const myUtil = require('./util.js');

require('widgets/csslib/base.css');
require('widgets/csslib/fonts/fonts.css');
require('./sass/edit.scss');
const tpl = require('./tpl/edit.tpl');

class InsurEdit {
    constructor(opt) {
        this.opt = {
            wrap: $('#page'),
            sex: 0
        };
        util.extend(this.opt, opt);
        this.init();
    }

    init() {
        this.cacheData();
        this.cacheDOM();
        this.renderUI();
        this.bindEvent();
    }

    cacheData() {
        this.data = {};
        this.data.item = {
            id: this.opt.id,
            name: '',
            passportNo: '',
            sex: '',
            birthday: '',
            insuranceUserId: this.opt.insuranceUserId
        };
        util.extend(this.data, this.opt);
    }

    cacheDOM() {
        this.dom = {
            wrap: this.opt.wrap
        };
    }

    renderUI() {
        const that = this;
        // hack A360 browser
        // SamsungBrowser
        // MQQbrowser
        // alert(navigator.userAgent)
        if (navigator.userAgent.match(/360 Aphone Browser|SamsungBrowser|SAMSUNG SM-G9008/)) {
            that.data.__hackFuck = true;
        }
        that.dom.wrap.append(juicer(tpl, this.data));
        that._reCacheDOM();
        // 引入头部
        myUtil.renderHeaderInWrap({
            title: '免费获取保障',
            subShow: that.opt.passportNo ? 'true' : 'false',
            // subShow: that.opt.insuranceUserId ? 'true' : 'false',
            subTitle: '删除投保人',
            wrap: that.dom.scope,
            pannel: that.dom.scope,
            hash: '#' + that.dom.scope.attr('id'),
            subBack() {
                that.data.handleParent && that.data.handleParent.triggerShowEvent();
                that._fireEvent('deleteEl', that.data.item);
                that._initScroll();
            },
            callback: () => {
                that.data.handleParent && that.data.handleParent.triggerShowEvent();
                that._initScroll();
            }
        });
        that.data.handleParent && that.data.handleParent.triggerHideEvent();
        that._preventScroll();
    }

    _reCacheDOM() {
        this.dom.scope = $('#J_editInfo');
        this.dom.name = $('.name', this.dom.scope);
        this.dom.passportNo = $('.passportNo', this.dom.scope);
        this.dom.sex = $('.sex', this.dom.scope);
        this.dom.birthday = $('.birthday', this.dom.scope);
        this.dom.deleteEl = $('.contact-show', this.dom.scope);
        this.dom.okBtn = $('#okBtn', this.dom.scope);
    }

    bindEvent() {
        const that = this;

        // 中文姓名
        // that._checkInput(that.dom.scope, '.name', /[^\u4e00-\u9fa5]+/g);

        // 护照号 只能输入英文和数字
        // that._checkInput(that.dom.scope, '.passportNo', /[^a-zA-Z0-9]+/g);

        // 选择性别
        that.dom.sex.on('click', 'em', function() {
            const btn = $(this);
            const index = btn.index();
            btn.addClass('selected').siblings().removeClass('selected');
            that.dom.sex.attr('data-sex', index);
        });

        // 点击确定按钮关闭
        setTimeout(function() {
            that.dom.okBtn.on('click', function() {
                if (that._validate()) {
                    const item = that.data.item;
                    item.name = that.dom.name.val();
                    item.passportNo = that.dom.passportNo.val();
                    item.sex = that.dom.sex.attr('data-sex');
                    item.birthday = that.dom.birthday.val();
                    if (item.insuranceUserId) {
                        that._fireEvent('userEdit', that.data.item);
                    } else {
                        that._fireEvent('userAdd', that.data.item);
                    }
                    that.data.handleParent && that.data.handleParent.triggerShowEvent();
                    that._initScroll();
                    return false;
                }
            });
        }, 50);

    // 解决微信fixed bug
    /* that.dom.scope.on('focus', 'input', function() {
      if (util.isWX()) {
        that.dom.scope.css({
          'position': 'absolute'
        })
      }
    }).on('blur', 'input', function() {
      if (util.isWX()) {
        that.dom.scope.css({
          'position': 'fixed'
        })
      }
    })*/

    }

    _fireEvent(type, data) {
        this.dom.scope.remove();
        history.back();
        $(document).trigger(type, data);
    }

    _initScroll() {
        this.dom.scope.off('touchmove');
    }

    _preventScroll() {
        this.dom.scope.on('touchmove', function(e) {
            e.preventDefault();
        });
    }

    // 输入格式是否正确
    _checkInput(obj, input, reg) {
        obj.on('input propertychange', input, function() {
            const val = $(this).val();
            $(this).val(val.replace(reg, ''));
        });
    }

    // 保单信息验证
    _validate() {
        const that = this;
        const reqInput = that.dom.scope.find('*[data-require]');
        let res = false;

        reqInput.each(function(i, v) {
            const obj = $(v);
            const val = obj.val();
            if (!val) {
                myUtil.msg(obj.attr('placeholder'));
                // obj.focus();
                res = false;
                return false;
            }
            if (obj.is('.name') && !/^[\u4e00-\u9fa5]+$/.test(obj.val())) {
                myUtil.msg('请填写中文姓名');
                res = false;
                return false;
            } else if (obj.is('.passportNo') && !/^[a-z0-9]+$/i.test(obj.val())) {
                myUtil.msg('请填写正确的护照号');
                res = false;
                return false;
            }
            res = true;
            return true;


        });
        return res;
    }
}
module.exports = InsurEdit;
