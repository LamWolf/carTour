/**
 * Created by Raisun on 2017/3/20.
 */
require('es6-promise').polyfill();
const $ = require('widgets/zepto/zepto.js');
const juicer = require('widgets/juicer/juicer.js');
const _s = require('widgets/sensors/index.js');

const UserEdit = require('./edit.js');
const util = require('widgets/util/index');
const myUtil = require('./util.js');

require('widgets/csslib/base.css');
require('./sass/index.scss');

const tpl = require('./tpl/index.tpl');
const insurTpl = require('./tpl/user.tpl');

const IMAGES = {
    banner: require('./img/banner.png'),
    edit: require('./img/edit.png')
};
new (require('widgets/changeSkin/index'))();

class OtaSource {
    constructor() {
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
            PIC: IMAGES,
            param: util.getQueryObjJson(),
            defaultDate: (() => {
                function format(num) {
                    if (num < 10) {
                        num = '0' + num;
                    }
                    return num;
                }
                let d = new Date(),
                    [ year, month, day ] = [ d.getFullYear(), format(d.getMonth() + 1), format(d.getDate()) ];
                return `${year}-${month}-${day}`;
            })()
        };
        this.data.peopleNum = this.data.param.personNum;
        this.data.insurInfo = {
            insuranceUserList: [],
            returnTime: this.data.defaultDate,
            orderNo: this.data.param.orderNo,
            returnFlightNo: '',
            source: '5' // 来源：4(M站)  5(OTA)
        };

        // 投保人列表数据
        for (let i = 0; i < this.data.peopleNum; i++) {
            this.data.insurInfo.insuranceUserList.push(this.data.listItem);
        }
    }

    cacheDOM() {
        this.dom = {
            wrap: $('#page')
        };
    }

    renderUI() {
        myUtil.renderInWrap(this.dom.wrap, tpl, this.data);
        this._reCacheDOM();

        // 引入头部
        myUtil.renderHeaderInWrap({
            title: '免费获取保障',
            subShow: 'false',
            wrap: this.dom.scope
        });

        this._renderInsur();
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

    bindEvent() {
        const that = this;

        // 航班号 只能输入英文和数字
        /* that.dom.domEl.insurance.on('input', '.flightNo', function() {
      let val = $(this).val();
      $(this).val(val.replace(/[^a-zA-Z0-9]+/g, ''))
    })*/

        // 编辑投保人信息
        that.dom.scope.on('click', 'dl', function() {
            const me = $(this);
            that.dom.scope.find('input').blur();
            const param = {
                id: me.attr('data-id'),
                name: me.attr('data-name'),
                passportNo: me.attr('data-passportNo'),
                sex: me.attr('data-sex'),
                birthday: me.attr('data-birthday')
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
                that.data.insurInfo.insuranceUserList = JSON.stringify(that.data.realList);
                that.data.insurInfo.returnFlightNo = that.dom.flightNo.val();
                that.data.insurInfo.returnTime = that.dom.date.val();
                myUtil.insuranceSubmit(that.data.insurInfo, res => {
                    that.data.insurInfo.insuranceUserList = JSON.parse(that.data.insurInfo.insuranceUserList);
                    const data = res;
                    if (data.status == 200) {
                        const item = data.data;
                        location.href = '/app/insuranceSucc.html';
                    } else {
                        myUtil.msg(data.message);
                    }
                },
                () => {
                    myUtil.msg('请检查网络，稍后重试');
                }
                );
            }
        });
    }

    // 检测是否提交保单
    _isInsuranced(cb) {
        myUtil.insuranceSubmit(that.data.insurInfo, res => {
            if (data.status == 200) {
                cb && cb(res);
            } else {
                myUtil.msg(data.message);
            }
        },
        () => {
            myUtil.msg('请检查网络，稍后重试');
        }
        );
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
                return obj.find('.name').text().trim() == ('请输入信息') ? '' : true;
            })();
            if (!val) {
                myUtil.msg(obj.attr('placeholder'));
                res = false;
                return false;
            }
            if (obj.is('.flightNo') && !/^[a-z0-9]+$/i.test(obj.val())) {
                myUtil.msg('请填写正确的航班号');
                res = false;
                return false;
            } else if (obj.is('.date')) {
                if (obj.val() < that.data.defaultDate) {
                    myUtil.msg('返程日期超出可选范围');
                    res = false;
                    return false;
                }
            } else {
                res = true;
                return true;
            }

        });
        return res;
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
new OtaSource();
