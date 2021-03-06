/**
 * Created by Gorden on 16/6/2.
 */


// var $ = require('zepto');
const $ = require('widgets/zepto/zepto');
/*
 pre ie9 use babel-polyfill
 */
// var poly = require('babel-polyfill');
module.exports = {
    sendRequest(opt) {
    /*
     url , data , method, header, success,error
     */
        const that = this;
        // var promise = new Promise(function (resolve, inject) {
        //
        // });
        /*
    为了保险，去掉promise
    */

        const header = {
            distinctId: sa && sa.store && sa.store.getDistinctId() || ''

        };
        if (opt.header) {
            for (const key in opt.header) {
                header[key] = opt.header[key];
            }
        }


        return $.ajax({
            url: opt.url,
            data: opt.data || {},
            type: opt.method || 'GET',
            headers: header,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: 'JSON',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success(ret) {
                if (typeof ret === 'string') {
                    opt.success && opt.success(JSON.parse(ret));
                }
                if (typeof ret === 'object') {
                    opt.success && opt.success(ret);
                }

                // resolve(ret);
            },
            error(err, a, b) {
                opt.error && opt.error(err);
                // inject(err);
            }
        });


    // return promise;

    },
    sendAppRequest(opt) {
        if (!window.javaObj) { return; }

        const funName = (function(time) {
            return {
                succ: callback + '_' + time,
                err: callback + '_' + 'error_' + time
            };
        })(new Date().getTime());
        let data = '';
        if (opt.success)window[funName.succ] = opt.success;
        if (opt.error)window[funName.err] = opt.error;
        if (opt.data) {
            const arr = [];
            for (const key in opt.data) {
                arr.push(key + '=' + encodeURIComponent(opt.data.key));
            }
            data = arr.join('&');
        }
        window.javaObj.requestUrl(opt.type, opt.url, data || '', funName.succ, funName.err);
    },
    _reportInfo(project, page, api, info) {
        window.img = document.createElement('img');
        window.img.src = 'http://collect.huangbaoche.com/' + project + '?page=' + page + '&api=' + api + '&info=' + info;
    },
    GL_STATUS: {

    }
};
