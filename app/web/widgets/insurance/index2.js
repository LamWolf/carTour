/**
 * Created by Raisun on 2016/10/14.
 */
require('es6-promise').polyfill();
const $ = require('widgets/zepto/zepto.js');
const juicer = require('widgets/juicer/juicer.js');
const _s = require('widgets/sensors/index.js');

const UserEdit = require('./edit.js');
const util = require('widgets/util/index');
const myUtil = require('./util.js');
const DatePicker = require('widgets/newdatepicker/index.js');
const IScroll = require('widgets/iscroll/iscroll-all');
const fixCallUI = require('widgets/fixCallUI/index.js');

require('widgets/csslib/base.css');
require('./sass/index.scss');

const tpl = require('./tpl/index.tpl');
const insurTpl = require('./tpl/user.tpl');

const IMAGES = {
    banner: require('./img/banner.png'),
    edit: require('./img/edit.png')
};

class Insur {
    constructor(opt) {
        this.opt = {
            wrap: $('#page'),
            peopleNum: 0,
            event: 'sureInsurance'
        };
        util.extend(this.opt, opt);
        if (Object.prototype.toString.call(opt.insurInfo) != '[object Object]' || JSON.stringify(opt.insurInfo) === '{}') {
            this.opt.insurInfo = {
                insuranceUserList: [],
                returnTime: '',
                returnFlightNo: '',
                source: '4' // 来源：4(M站)  5(OTA)
            };
        } else {
            this.opt.insurInfo.insuranceUserList = Object.prototype.toString.call(opt.insurInfo.insuranceUserList) == '[object Array]' ? opt.insurInfo.insuranceUserList : [];
            this.opt.insurInfo.returnTime = opt.insurInfo.returnTime ? opt.insurInfo.returnTime : '';
            this.opt.insurInfo.returnFlightNo = opt.insurInfo.returnFlightNo ? opt.insurInfo.returnFlightNo : '';
            this.opt.insurInfo.source = opt.insurInfo.source ? opt.insurInfo.source : '4';
        }
        this.init();
    }

    init() {
        this.cacheData();
        this.cacheDOM();
        this.renderUI();
        this.bindEvent();
    }

    cacheData() {
        this.data = {
            listItem: {
                name: '',
                passportNo: '',
                sex: 0,
                birthday: ''
            },
            realList: [],
            PIC: IMAGES
        };
        util.extend(this.data, this.opt);

        // 投保人列表数据
        if (this.data.insurInfo.insuranceUserList.length > 0) {
            if (this.data.insurInfo.insuranceUserList.length >= this.data.peopleNum) {
                this.data.insurInfo.insuranceUserList = this.data.insurInfo.insuranceUserList.slice(0, this.data.peopleNum);
            } else {
                const len = this.data.peopleNum - this.data.insurInfo.insuranceUserList.length;
                for (let i = 0; i < len; i++) {
                    this.data.insurInfo.insuranceUserList.push(this.data.listItem);
                }
            }
        } else {
            for (let j = 0; j < this.data.peopleNum; j++) {
                this.data.insurInfo.insuranceUserList.push(this.data.listItem);
            }
        }
    }

    /* update(num) {
    this.isRendered = false;
    this.data.peopleNum = num;
    return this;
  }*/

    cacheDOM() {
        this.dom = {
            wrap: this.data.wrap
        };
    }

    renderUI() {
        myUtil.renderInWrap(this.dom.wrap, tpl, this.data);
        this._reCacheDOM();

        // 引入头部
        myUtil.renderHeaderInWrap({
            title: '免费获取保障',
            subShow: 'false',
            wrap: this.dom.scope,
            pannel: this.dom.scope,
            hash: '#' + this.dom.scope.attr('id'),
            callback: () => {
                this.data.handleParent.triggerShowEvent();
            }
        });

        this._renderInsur();

        if (this.data.insurInfo.source == '4') {
            new IScroll('.J-toScroll', {
                click: true,
                mouseWheel: true
            });
        }
        this.data.handleParent.triggerHideEvent();
    /* setTimeout(function() {
      $('body').trigger('resize');
    }, 300)*/
    }

    _reCacheDOM() {
        this.dom.scope = $('#J_insurance');
        this.dom.insurInfo = $('.insuranceInfo', this.dom.scope);
        this.dom.flightNo = $('.flightNo', this.dom.scope);
        this.dom.date = $('.date', this.dom.scope);
    }

    _renderInsur() {
        this.dom.insurInfo.html(juicer(insurTpl, this.data));
    }

    /* renderInsurance() {
    let that = this;
    that.dom.domEl.insuranceInfo.html(juicer(insuranceTpl, that.data));
  }

  reRenderInsurance() {
    let that = this;
    if (that.data.peopleNum == that.data.list.length) {
      return;
    }
    that._renderInsur();
  }*/

    bindEvent() {
        const that = this;

        // 航班号 只能输入英文和数字
        /* that.dom.domEl.insurance.on('input', '.flightNo', function() {
      let val = $(this).val();
      $(this).val(val.replace(/[^a-zA-Z0-9]+/g, ''))
    })*/

        // 选择返程日期
        that.dom.date.on('click', function() {
            that.dom.scope.find('input').blur();
            new DatePicker({
                wrap: '#page',
                isRange: false,
                title: '请选择返程日期',
                tips: '请选择返程日期',
                startToday: true,
                cbname: 'dateSelect',
                defaultDate: that.dom.date.attr('data-date')
            }).show();
        });

        $(document).off('dateSelect').on('dateSelect', function(e, data) {
            that.dom.date.text(data).attr('data-date', data);
        });

        // 编辑投保人信息
        that.dom.scope.on('click', 'dl', function() {
            const me = $(this);
            that.dom.scope.find('input').blur();
            const hackFixed = new fixCallUI({
                dom: $('#J_insurance'),
                callbackName: 'insureItem'
            });
            const param = {
                id: me.attr('data-id'),
                name: me.attr('data-name'),
                passportNo: me.attr('data-passportNo'),
                sex: me.attr('data-sex'),
                birthday: me.attr('data-birthday'),
                handleParent: hackFixed
            };
            new UserEdit(param);
        });

        // 添加修改投保人
        $(document).off('userAdd').on('userAdd', function(e, data) {

            // check
            let isEq = false;
            for (let i = 0, len = that.data.insurInfo.insuranceUserList.length; i < len; i++) {
                if (i != data.id) {
                    if (that.data.insurInfo.insuranceUserList[i].passportNo == data.passportNo) {
                        isEq = true;
                        break;
                    }
                }
            }
            if (isEq) {
                myUtil.msg('护照编号重复');
                return;
            }

            for (let j = 0; j < that.data.insurInfo.insuranceUserList.length; j++) {
                if (j == data.id) {
                    const o = {
                        name: data.name,
                        passportNo: data.passportNo,
                        sex: data.sex,
                        birthday: data.birthday
                    };
                    that.data.insurInfo.insuranceUserList[j] = o;
                    that._upPersonPos(j, that.data.listItem);
                }
            }
            that._renderInsur();
        });

        // 删除投保人
        $(document).off('deleteEl').on('deleteEl', function(e, data) {
            if (window.confirm('确定删除此投保人吗?')) {
                myUtil.deleteArr(that.data.insurInfo.insuranceUserList, data.id, that.data.listItem);
                that._renderInsur();
            }

        });

        // 确认投保
        that.dom.scope.on('click', '.ok', function() {
            if (that._validate()) {
                that.data.realList = [];
                for (let i = 0; i < that.data.insurInfo.insuranceUserList.length; i++) {
                    if (that.data.insurInfo.insuranceUserList[i].name != '') {
                        that.data.realList.push(that.data.insurInfo.insuranceUserList[i]);
                    }
                }
                that.data.insurInfo.insuranceUserList = that.data.realList;
                that.data.insurInfo.returnFlightNo = that.dom.flightNo.val();
                that.data.insurInfo.returnTime = that.dom.date.text();
                $(document).trigger(that.opt.event, that.data.insurInfo);
                that.data.handleParent.triggerShowEvent();
                window.history.back();
                that.dom.scope.remove();
            }
        });
    }

    /* show() {
    if (this.isRendered) {
      this.dom.domEl.insurance.show();
      location.hash = '#J_insurance';
      this._pageView();
    } else {
      this.cacheData();
      this.cacheDOM();
      this.renderUI();
      this._renderInsur();
      this.bindEvent();
      this.isRendered = true;
      this._pageView();
    }
    return this;
  }

  remove() {
    this.dom.domEl.insurance.remove();
  }

  hide() {
    this.dom.domEl.insurance.hide();
  }*/

    // 表单验证
    _validate() {
        const that = this;
        const reqInput = that.dom.scope.find('*[data-require]');
        let res = false;

        reqInput.each(function(i, v) {
            const obj = $(v);
            const val = (() => {
                if (obj[0].tagName.toLowerCase() == 'input') {
                    return obj.val();
                }
                if (obj.is('.date')) {
                    return obj.text() == ('请输入您的返程日期') ? '' : obj.text();
                }
                return obj.find('.name').text().trim() == ('请输入信息') ? '' : true;
            })();
            if (!val) {
                myUtil.msg(obj.attr('placeholder'));
                // obj.focus();
                res = false;
                return false;
            }
            if (obj.is('.flightNo') && !/^[a-z0-9]+$/i.test(obj.val())) {
                myUtil.msg('请填写正确的航班号');
                res = false;
                return false;
            }
            res = true;
            return true;


        });
        return res;
    }

    // 投保人显示位置信息更新
    _upPersonPos(num, obj) {
        const that = this;
        if (num <= 0) {
            return;
        }
        if (that.data.insurInfo.insuranceUserList[num - 1].name == '') {
            myUtil.deleteArr(that.data.insurInfo.insuranceUserList, num - 1, obj);
            that._upPersonPos((num - 1), obj);
        }
    }

    // 神策埋点
    _pageView() {
        _s.sendPageView({
            $referrer: window.location.href,
            $referrer_host: window.location.host,
            $title: document.title
        });
    }
}
module.exports = Insur;
