/**
 * Created by Gorden on 2017/6/14.
 */
// const Scheme = require('local-Scheme')
const util = require('widgets/util/index.js');
const Cookie = require('widgets/cookie/index');
class GetCappUser {
    constructor(opt) {
        this.opt = opt;
        this.init();
    }

    init() {
        this.cacheData();
        this.logic();
    }

    cacheData() {
        this.data = {
            timeout: this.opt.timeout || 3000,
            plateForm: util.plateForm(),
            cappUser: this.getUserFromCookie(),
            isOK: false
        };

    }

    logic() {
        const that = this;
        if (this.data.plateForm.app !== 'hbcc') {
            return;
        }
        if (this.data.cappUser) {
            this.opt.callback && this.opt.callback(this.data.cappUser);
            // return;
        }
        window.getSucc = function(res) {
            that.data.isOK = true;
            that.opt.callback && that.opt.callback(res);
            that.clearTimer();
        };
        this.startTimer(() => {
            if (window.javaObj) {
                window.javaObj.getUserInfo('getSucc');
            }
        });
    }

    getUserFromCookie() {
        const cooikeName = Cookie.get('capp_user');
        // alert(cooikeName);
        let json = null;
        try {
            json = cooikeName ? JSON.parse(cooikeName) : null;

        } catch (e) {
            json = null;
        }
        return json;
    }

    startTimer(callback) {
        this.inter = setInterval(() => {
            callback && callback();
        }, 300);
        this.outer = setTimeout(() => {
            this.clearTimer();
            this.outer && clearTimeout(this.outer);
            if (!this.data.isOK) {
                this.opt.callback && this.opt.callback(null);
            }
            // this.data.isOK ?
        }, this.data.timeout);

    }

    clearTimer() {
        this.inter && clearInterval(this.inter);
    }
}
module.exports = GetCappUser;
