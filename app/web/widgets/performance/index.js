/*
 * Performance - $1.0.0
 * 功能：统计用户使用过程中网页、资源加载耗时，便于有针对性的优化；
 * 说明：getPerformanceTiming() ------------- 页面初始化分析
 *      getEntryTiming()-------------------- 请求的各种资源（js/css/img/xmlhttprequest等）分析
 *      pageLoadMethod()-------------------- 页面的加载方式分析
 */
const util = require('local-Utils');
const [ _glo, _define, _exports ] = [ window || this, define, exports ];

class Performance {
    constructor() {
        this.name = 'Performance';
        this.version = '$1.0.0';
        this.init();
    }

    init() {
        this._perf = _glo.performance;
        this.upLoadData();
    }

    getPerformanceTiming() {
        const that = this;
        let times = {};
        that._isSupported(() => {
            const t = that._perf.timing;
            times = {
                // 卸载前文档耗时
                unloadEvent: that._formatUnit(t.unloadEventEnd, t.unloadEventStart),

                // 准备新页面耗时
                readyStart: that._formatUnit(t.fetchStart, t.navigationStart),

                // 重定向耗时
                redirect: that._formatUnit(t.redirectEnd, t.redirectStart),

                // DNS缓存查询耗时
                appCache: that._formatUnit(t.domainLookupStart, t.fetchStart),

                // DNS查询耗时
                dns: that._formatUnit(t.domainLookupEnd, t.domainLookupStart),

                // TCP链接耗时
                connect: that._formatUnit(t.connectEnd, t.connectStart),

                // 读取页面第一个字节耗时
                ttfb: that._formatUnit(t.responseStart, t.navigationStart),

                // 内容加载完毕耗时
                request: that._formatUnit(t.responseEnd, t.requestStart),

                // 白屏时间
                // pageEmpty: that._formatUnit(t.responseStart, t.navigationStart),

                // 请求完毕至DOM开始加载耗时
                initDOM: that._formatUnit(t.domInteractive, t.responseEnd),

                // 解析DOM树耗时
                // analyticDOM: that._formatUnit(t.domComplete, t.domInteractive),

                // domReady耗时（dom加载完毕）
                domReady: that._formatUnit(t.domComplete, t.domInteractive),
                // domReady: that._formatUnit(t.domContentLoadedEventEnd, t.navigationStart),

                // 执行onload回调函数耗时
                loadEvent: that._formatUnit(t.loadEventEnd, t.loadEventStart),

                // 页面加载完成耗时（整个过程）
                loadPage: that._formatUnit(t.loadEventEnd, t.navigationStart),

                // 资源加载耗时
                resource: that.getEntryTiming(),

                // 页面加载方式
                pageLoadMethod: that.pageLoadMethod()
            };
        });
        // console.log(times)
        return times;
    }

    getEntryTiming() {
        const that = this;
        const resourceArr = [];
        that._isSupported(() => {
            const entries = that._perf.getEntries();
            entries.forEach(function(entry) {
                const t = entry;
                const times = {
                    // 重定向的时间
                    redirect: that._formatUnit(t.redirectEnd, t.redirectStart),

                    // DNS 查询时间
                    dns: that._formatUnit(t.domainLookupEnd, t.domainLookupStart),

                    // 内容加载完成的时间
                    request: that._formatUnit(t.responseEnd, t.requestStart),

                    // TCP 建立连接完成握手的时间
                    connect: that._formatUnit(t.connectEnd, t.connectStart),

                    // 资源名称
                    name: entry.name,

                    // 类型(resource)
                    entryType: entry.entryType,

                    // 资源类型(js/css/img/xmlhttprequest)
                    initiatorType: entry.initiatorType,

                    // 过程耗时
                    duration: that._formatUnit(entry.duration)
                };
                resourceArr.push(times);
            });
        });
        // console.log(resourceArr)
        return resourceArr;
    }

    pageLoadMethod() {
        const that = this;
        let str = '';
        that._isSupported(() => {
            const type = this._perf.navigation.type;
            switch (type) {
            case 0:
                str = '页面通过点击链接、地址栏输入、表单提交、脚本操作等方式加载';
                break;
            case 1:
                str = '页面通过“重新加载”按钮或者location.reload()方法加载';
                break;
            case 2:
                str = '页面通过“前进”或“后退”按钮加载';
                break;
            default:
                str = '页面通过任何其他来源的加载';
                break;
            }
        });
        // console.log(str)
        return str;
    }

    upLoadData() {
        const that = this;
        const item = {};
        const temp = {};
        // let arr = [];
        const Perf = that.getPerformanceTiming();
        const entrys = that.getEntryTiming();
        entrys.forEach(function(el) {
            temp[el.initiatorType] ? temp[el.initiatorType].push(el) : (temp[el.initiatorType] = [], temp[el.initiatorType].push(el));
        });
        for (const i in temp) {
            if (i == 'script' || i == 'xmlhttprequest') {
                item[i] = JSON.stringify(temp[i][0]);
            }
        }
        util._extend(item, Perf);
        delete item.resource;
        // item.resource = arr;
        console.log(item);
        let param = '';
        for (const j in item) {
            param += `${j}=${item[j]}&`;
        }
        param = param.substr(0, param.length - 1);
        const img = new Image();
        img.src = `https://collect.huangbaoche.com/hbc.png?${param}`;
    }

    _formatUnit(a = 0, b = 0) {
        const [ s, ms, us ] = [ 's', 'ms', 'us' ];
        const num = (a - 0) - (b - 0);
        /* if (num > 1e3) {
      num = (num / 1e3).toFixed(2) + s;
    } else if ((num > 1 && num < 1e3) || num == 0) {
      num = num.toFixed(2) + ms;
    } else {
      num = num.toFixed(2) + us;
    }*/
        return num;
    }

    _isSupported(cb) {
        if (this._perf) {
            cb && cb();
        } else {
            console.log('not support performance api');
            return false;
        }
    }
}

window.addEventListener('load', function() {
    setTimeout(() => {
        new Performance();
    }, 0);
});

if (typeof define === 'function' && define.amd) define(() => Performance);
else if (typeof exports === 'object') module.exports = Performance;
else _glo.Performance = Performance;
