const ajax = require('widgets/ajax/index.js');

function TimeAjax(opt) {
    this.opt = opt;
}

TimeAjax.prototype = {
    makeRequest(opt) {
        const that = this;
        that.opt = opt;
        that.ajax = ajax.sendRequest({
            url: opt.url,
            data: opt.data,
            headers: opt.headers,
            method: opt.method || 'GET',
            success: opt.success || function(ret) {
            },
            error: opt.error || function(ret) {
            }
        });

        that._TIMOUT && clearTimeout(that._TIMOUT);
        if (+new Date() - that._DATE < 300) {

            that.abordRequest();
            return;
        }
        that._DATE = +new Date();
        console.log('sendRequest');

    },
    abordRequest() {
        const that = this;
        this.ajax && this.ajax.abort();
        that._DATE = +new Date();
        console.log('aboutRequest');
        that._TIMOUT = setTimeout(function() {
            that.makeRequest(that.opt);
        }, 350);
    }
};

module.exports = TimeAjax;
