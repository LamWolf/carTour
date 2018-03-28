/**
 * Created by Raisun on 16/10/14.
 */
const ajax = require('widgets/ajax/index');
const apiConfig = require('widgets/apiConfig/index');
const loading = require('widgets/loading/index');
const juicer = require('widgets/juicer/juicer.js');
const Layer = require('widgets/layer/index.js');
const Header = require('widgets/header/index2.js');

module.exports = {
    renderInWrap: (wrap, tpl, data) => {
        return $(wrap).append(juicer(tpl, data));
    },
    getJuicerHtml: (tpl, data) => {
        return juicer(tpl, data);
    },
    renderHeaderInWrap: opt => {
        new Header(opt);
    },
    addJuicerHelper: (name, fun) => {
        juicer.register(name, fun);
    },
    msg: title => {
        new Layer({
            msg: title
        });
    },
    deleteArr: (arr, index, obj) => {
        arr.splice(index, 1);
        arr.push(obj);
        return arr;
    },
    insuranceSubmit: (param, scb, ecb) => {
        loading.init();
        const opt = {
            url: apiConfig.insurance,
            method: 'POST',
            header: {},
            data: param,
            success(res) {
                loading.remove();
                scb && scb(res);
            },
            error() {
                loading.remove();
                ecb && ecb();
            }
        };
        ajax.sendRequest(opt);
    },
    commonPeople: (method, url, ak, ut, param, scb, ecb) => {
        loading.init();
        const opt = {
            url,
            method,
            header: {
                ak,
                ut,
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: param,
            success(res) {
                loading.remove();
                scb && scb(res);
            },
            error() {
                loading.remove();
                ecb && ecb();
            }
        };
        ajax.sendRequest(opt);
    },
    handlePeople(param, cb) {
        const that = this;
        const url = param.url;
        const ak = param.accessKey;
        const ut = param.userToken;
        that.commonPeople('POST', url, ak, ut, param.data, res => {
            if (res.status == 200) {
                cb && cb(res);
            } else {
                that.msg({
                    msg: res.message
                });
            }
        },
        () => {
            that.msg({
                msg: '请检查网络，稍后重试'
            });
        }
        );
    }
};
