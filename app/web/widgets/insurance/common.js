/**
 * Created by Raisun on 2016/10/14.
 */
require('es6-promise').polyfill();
require('widgets/sensors/index.js');
const apiConfig = require('widgets/apiConfig/index');
const util = require('widgets/util/index');
const myUtil = require('./util.js');
const juicer = require('widgets/juicer/juicer.js');
const UserEdit = require('./edit.js');
const Header = require('widgets/header/index.js');
const CheckLogin = require('widgets/checkLogin/index');
const myStorage = new (require('widgets/storage'))();
const fixCallUI = require('widgets/fixCallUI/index.js');

require('widgets/csslib/base.css');
require('./sass/common.scss');

const IMAGES = {
    edit: require('./img/edit.png')
};
const tpl = require('./tpl/common.tpl');
const commonTpl = require('./tpl/commonUser.tpl');

new (require('widgets/changeSkin/index'))();

class Common {
    constructor(opt) {
        this.opt = opt || {};
        this.show();
    }

    cacheData() {
        const that = this;
        that.data = {};
        that.data.PIC = IMAGES;
        that.data.list = [];
        that.data.listItem = {
            name: '',
            passportNo: '',
            sex: 0,
            birthday: ''
        };
    }

    cacheDOM() {
        this.dom = {};
        this.dom.wrap = this.opt.wrap || $('#page');
    }

    renderUI() {
        this.dom.wrap.html(juicer(tpl, this.data));

        // 引入头部
        new Header({
            title: '常用投保人',
            backUrl: '',
            subShow: 'false',
            subTitle: '',
            wrap: $('#page')
        });
        this.dom.domEl = {
            common: $('#J_common'),
            userInfo: $('#J_common .userInfo')
        };
    }
    renderCommon() {
        const that = this;
        that.dom.domEl.userInfo.html(juicer(commonTpl, that.data));
    }

    bindEvent() {
        const that = this;

        // 点击添加投保人
        that.dom.domEl.common.on('click', '.add', function() {
            const hackFixed = new fixCallUI({
                dom: $('#J_common'),
                callbackName: 'insureItem'
            });
            new UserEdit({
                wrap: that.dom.wrap,
                handleParent: hackFixed
            });
        });

        // 点击编辑投保人信息
        that.dom.domEl.common.on('click', 'dl', function() {
            const dom = $(this);
            const hackFixed = new fixCallUI({
                dom: $('#J_common'),
                callbackName: 'insureItem'
            });
            const param = {
                wrap: that.dom.wrap,
                id: dom.attr('data-id'),
                name: dom.attr('data-name'),
                passportNo: dom.attr('data-passportNo'),
                sex: dom.attr('data-sex'),
                birthday: dom.attr('data-birthday'),
                insuranceUserId: dom.attr('data-insuranceUserId'),
                handleParent: hackFixed
            };
            new UserEdit(param);
        });

        // 添加投保人
        $(document).off('userAdd').on('userAdd', function(e, data) {
            that._addCommonList(res => {
                const item = res.data;
                const o = {
                    name: item.name,
                    passportNo: item.passportNo,
                    sex: item.sex,
                    birthday: item.birthday,
                    insuranceUserId: item.insuranceUserId
                };
                if (that.data.list.length > 0) {
                    that.data.list.unshift(o);
                    that.renderCommon();
                } else {
                    that.data.list.unshift(o);
                    that.renderUI();
                    that.renderCommon();
                    that.bindEvent();
                }
            }, data);
        });

        // 编辑投保人
        $(document).off('userEdit').on('userEdit', function(e, data) {
            that._editCommonList(res => {
                const item = res.data;
                const o = {
                    name: item.name,
                    passportNo: item.passportNo,
                    sex: item.sex,
                    birthday: item.birthday,
                    insuranceUserId: item.insuranceUserId
                };
                for (let j = 0; j < that.data.list.length; j++) {
                    if (j == data.id) {
                        that.data.list[j] = o;
                    }
                }
                that.renderCommon();
            }, data);
        });

        // 删除投保人
        $(document).off('deleteEl').on('deleteEl', function(e, data) {
            const r = confirm('您确定要删除该投保人吗');
            if (r == true) {
                that._deleteCommonList(() => {
                    that.data.list.splice(data.id, 1);
                    if (that.data.list.length > 0) {
                        that.renderCommon();
                    } else {
                        that.cacheDOM();
                        that.renderUI();
                        that.bindEvent();
                    }
                }, data);

            }
        });
    }

    show() {
        const that = this;
        if (that.isRendered) {
            that.dom.domEl.common.show();
        } else {
            that._getCommonList(res => {
                const item = res.data;
                that.cacheData();
                that.data.list = item.resultBean || [];
                that.cacheDOM();
                that.renderUI();
                that.renderCommon();
                that.bindEvent();
                that.isRendered = true;
            });
        }
        return that;
    }

    remove() {
        this.dom.domEl.common.remove();
    }

    hide() {
        this.dom.domEl.common.hide();
    }

    // 获取联系人列表
    _getCommonList(cb) {
        const that = this;
        if (!that.opt.userInfo) {
            window.location.href = 'login.html';
        }
        const url = apiConfig.queryPeople;
        if (!that.opt.userInfo) {
            return;
        }
        const ak = that.opt.userInfo.accessKey;
        const ut = that.opt.userInfo.userToken;
        const param = {
            userId: that.opt.userInfo.userId
        };
        myUtil.commonPeople('GET', url, ak, ut, param, res => {
            if (res.status == 200) {
                cb && cb(res);
            } else if (res.status == 10011 || res.status == 10012) {
                window.location.href = 'login.html';
            } else {
                myUtil.tips({
                    msg: res.message
                });
            }
        },
        () => {
            myUtil.tips({
                msg: '请检查网络，稍后重试'
            });
        }
        );
    }

    // 添加联系人
    _addCommonList(cb, data) {
        const that = this;
        const url = apiConfig.addPeople;
        const ak = that.opt.userInfo.accessKey;
        const ut = that.opt.userInfo.userToken;
        const param = {
            userId: that.opt.userInfo.userId,
            name: data.name,
            passportNo: data.passportNo,
            sex: data.sex,
            birthday: data.birthday
        };
        myUtil.commonPeople('POST', url, ak, ut, param, res => {
            if (res.status == 200) {
                cb && cb(res);
            } else {
                myUtil.tips({
                    msg: res.message
                });
            }
        },
        () => {
            myUtil.tips({
                msg: '请检查网络，稍后重试'
            });
        }
        );
    }

    // 编辑联系人
    _editCommonList(cb, data) {
        const that = this;
        const url = apiConfig.editPeople;
        const ak = that.opt.userInfo.accessKey;
        const ut = that.opt.userInfo.userToken;
        const param = {
            userId: that.opt.userInfo.userId,
            name: data.name,
            passportNo: data.passportNo,
            sex: data.sex,
            birthday: data.birthday,
            insuranceUserId: data.insuranceUserId
        };
        myUtil.commonPeople('POST', url, ak, ut, param, res => {
            if (res.status == 200) {
                cb && cb(res);
            } else {
                myUtil.tips({
                    msg: res.message
                });
            }
        },
        () => {
            myUtil.tips({
                msg: '请检查网络，稍后重试'
            });
        }
        );
    }

    // 删除联系人
    _deleteCommonList(cb, data) {
        const that = this;
        const url = apiConfig.deletePeople;
        const ak = that.opt.userInfo.accessKey;
        const ut = that.opt.userInfo.userToken;
        const param = {
            userId: that.opt.userInfo.userId,
            insuranceUserId: data.insuranceUserId
        };
        myUtil.commonPeople('POST', url, ak, ut, param, res => {
            if (res.status == 200) {
                cb && cb();
            } else {
                myUtil.tips({
                    msg: res.message
                });
            }
        },
        () => {
            myUtil.tips({
                msg: '请检查网络，稍后重试'
            });
        }
        );
    }
}


new Common({
    userInfo: myStorage.get('userInfo')
});
// module.exports = Common;
