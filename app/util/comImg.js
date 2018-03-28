/*
* ComImg - $1.0.5
* 功能：***
* 说明：***
* 参数： {
**  url ： required
*   param : required
* }
*/

const url = require('url');
function isArray(object) {
    return object && typeof object === 'object' &&
            Array === object.constructor;
}
class ComImg {
    constructor(option) {
        this.name = 'ComImg';
        this.version = '$1.0.5';
        this.option = option;
        this.data = {
            name: this.name
        };
        this.init();
    }
    init() {
        if (!this.option.url) {
            throw new Error('url 必传');
        }
        if (!this.option.param) {
            throw new Error('param 必传');
        }
    // return this.getUrl();
    }
    getUrl() {
        return this._getTrueUrl();
    }
    _string2Url() {
    /**
     * 把String转换成URL
     * @url [Url]
     */
        if (!this.option.url) {
            throw new Error('Shit');
        }
        return url.parse(this.option.url);
    }
    _getTrueUrl() {
    /**
     * 获取转换后的url
     *
     */
        const url = this._string2Url();
        if (!url.pathname) {
            throw new Error('Shit');
        }
        const pathArray = url.pathname.match(/\/[\/]?([^\/]*)\/([^!|?]*)[!]?([\S]*)/);
        if (isArray(pathArray) && pathArray.length >= 2) {
            const domain = pathArray[1];
            const path = pathArray[2];
            const query = this._getTrueParam(pathArray[3]);
            if (domain.indexOf('fr-') > -1) {
                return `https://${domain}.huangbaoche.com/${path}${query}`;
            }
            // 另外一种规则..
            const res = this._anotherRule(url.hostname);
            return `https://${res}.huangbaoche.com/${domain}/${path}${query}`;

        }
        /**
       * 如查Array 的length 小于1 那么直接return 之前的url
       * @type {[type]}
       */
        return url.href;

    }
    _anotherRule(dd) {
    /**
     * [domain 返回值]
     * @dd {String} : domain
     */
        let domain = '';
        const env = (host => {
            if (/hbcdn-dev/.test(host)) {
                return 'dev';
            }
            if (/hbcdn-test/.test(host)) {
                return 'test';
            }
            if (/hbcdn\./.test(host)) {
                return 'pub';
            }
        })(dd);
        switch (env) {
        case 'dev' :
            domain = 'fr-hd-dev';
            break;
        case 'test' :
            domain = 'fr-hb-t';
            break;
        case 'pub' :
            domain = 'fr-static';
            break;
        default :
            domain = 'fr-static';
        }

        return domain;
    }
    _getTrueParam(par) {
    /**
     * 获取转换后的param
     * par 这个是从URL中分析出来的，只可能是m,l,...
     * 传入的param优先级最高，传入的param会覆盖par
     */
        if (this.option.param) {
            return `?${this.option.param}`;
        }
        return par ? `!${par}` : '';


    }
}

module.exports = ComImg;
