const $ = require('widgets/zepto/zepto');
const loading = require('widgets/loading/index');
const ajax = require('widgets/ajax/index');
const alert = require('widgets/alert/index');
const apiConfig = require('widgets/apiConfig/index');
const myStorage = new (require('widgets/storage'))();
const AK = require('widgets/getAK/index.js');

class CheckLogin {
    constructor(opt) {
        /**
         opt = {
                type: 验证方式 1 弱校验，2强校验,
                trueType : 验证通过处理方式 1 返回 true, 2 返回 userInfo,
                falseType : 验证未通过处理方式 1 返回 false, 2 跳转登录,
                back: 回调方法
            }
         */

        this.data = opt || {};
        this.data.type = this.data.type ? this.data.type : 1; // 默认弱校验
        this.data.trueType = this.data.trueType ? this.data.trueType : 1; // 默认返回 true
        this.data.falseType = this.data.falseType ? this.data.falseType : 1; // 默认返回false

        this.data.checkStatus = 1; // 1 无法获取uderId, 2 获取userId成功， 3 用户登录超时， 4 用户登录状态正常
        this.data.checkUrl = apiConfig.checkLogin || (apiConfig.apiHost + 'ucenter/v1.0/c/user/information');
        AK.getAk(res => {
            window._AK = res;
            this.init();
        });
    }

    init() {
        this.getLSUserInfo();
        this.switchType();
    }

    // 获取localstorage
    getLSUserInfo() {
        const userInfo = myStorage.get('userInfo') || {};
        // let userInfo = window.localStorage.getItem('userInfo') && JSON.parse(window.localStorage.getItem('userInfo')) || {};
        if (userInfo.userId) {
            this.data.userInfo = userInfo;
            this.data.checkStatus = 2;
        } else {
            this.data.userInfo = {};
            this.data.checkStatus = 1;
        }
    }

    // 获取COOKIE
    getCUserInfo() {

    }

    // 识别强弱校验
    switchType() {
        if (this.data.type == 2) {
            this.getExpireResult();
        } else {
            this.getCheckResult();
        }
    }

    // 验证是否登录超时
    getExpireResult() {
        loading.init();
        const that = this;
        const opt = {
            url: this.data.checkUrl,
            method: 'POST',
            header: {
                ak: window._AK,
                ut: that.data.userInfo.userToken,
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: {},
            success(ret) {

                let msg;
                if (ret && ret.status) {
                    const status = ret.status;
                    if (status == '200') {
                        that.data.checkStatus = 4;
                    } else {
                        that.data.checkStatus = 3;
                    }
                    that.getCheckResult();
                } else {
                    msg = '系统错误-无返回状态码,请稍后重试';
                    const params = {
                        msg
                    };
                    const alert = new Alert(params);
                }
                loading.remove();
            },
            error(ret) {
                const msg = '网络原因，请求发送失败';
                const params = {
                    msg
                };
                const alert = new Alert(params);
                loading.remove();
            }
        };
        ajax.sendRequest(opt);
    }

    // 获取验证结果
    getCheckResult() {
        switch (this.data.checkStatus) {
        case 1:
        case 3:
            if (this.data.falseType == 2) {
                // 跳转登录界面
                this.data.result = false;
                window.location.href = 'login.html';
            } else {
                // 返回校验结果
                this.data.result = false;
            }
            break;

        case 2:
        case 4:

            if (this.data.trueType == 2) {
                this.data.result = this.data.userInfo;
            } else {
                this.data.result = true;
            }
            break;
        }
        if (this.data.result != undefined && this.data.back) {
            this.data.back.apply(this.data.that, [ this.data.result ]);
        }
    }
}

module.exports = CheckLogin;
