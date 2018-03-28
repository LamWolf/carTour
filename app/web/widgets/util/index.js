/**
 * Created by Gorden on 16/6/2.
 */
const $ = require('widgets/zepto/zepto');
const apiConfig = require('widgets/apiConfig/index');
const ajax = require('widgets/ajax/index');
const loading = require('widgets/loading/index');
const cookie = require('widgets/cookie/index');
const Layer = require('widgets/layer/index');
const extend = require('widgets/extend/index');
module.exports = {
    replaceUrl(url) {
        if (history.replaceState) {
            history.replaceState(null, document.title, url);
            history.go(0);
        } else {
            location.replace(url);
        }
    },
    /*
  获取指定uri的指定参数
  */
    getRequestParam(param, uri) {
        let value;
        uri = uri || window.location.href;
        value = uri.match(new RegExp('[\?\&]' + param + '=([^\&\#]*)([\&\#]?)', 'i'));
        return value ? decodeURIComponent(value[1]) : value;
    },
    /*
   * 混合对象
   */
    extend() {
        const arg = [ true ];
        for (let i = 0; i < arguments.length; i++) {
            arg.push(arguments[i]);
        }
        return extend.apply(null, arg);
    },
    _extend() {
        let y = 1,
            len = arguments.length,
            deepCopy = function(sub, base) {
                let i;
                for (i in base) { if (base.hasOwnProperty(i)) sub[i] = base[i]; }
            };
        if (arguments[0].extend) return arguments[0].extend(arguments.slice(1));
        for (; y < len; y++) deepCopy(arguments[0], arguments[y]);
        return arguments[0];
    },
    _contains(root, node) {
        root = root.length > 0 ? root[0] : root;
        node = node.length > 0 ? node[0] : node;
        if (root.contains) return root != node && root.contains(node);
        else if (root.compareDocumentPosition) return !!(root.compareDocumentPosition(node) & 16);
        else if (node) {
            while (node = node.parentNode) { if (node === root) return true; }
        }
        return false;
    },
    _setParam(obj) {
        const arr = [];
        for (const name in obj) {
            arr.push(name + '=' + JSON.stringify(obj[name]));
        }
        return arr.join('&');
    },
    /*
   * 序列参数
   */

    setParam(obj) {
        const arr = [];
        for (const name in obj) {
            arr.push(name + '=' + JSON.stringify(obj[name]));
        }
        return arr.join('&');
    },

    /*
  获取url参数,JSON格式
  */
    getQueryJson() {
        const ret = {}; // 定义数组
        window.location.search.substr(1).replace(/(\w+)=(\w+)/ig, function(a, b, c) {
            ret[b] = unescape(c);
        });
        return ret;
    },
    /*
    获取url参数,JSON格式
    */
    getQueryObjJson(u) {
        const obj = {};
        let keyvalue = [];
        let key = '',
            value = '';
        const url = u || window.location.href;
        const paraString = url.substring(url.indexOf('?') + 1, url.length).replace(/#.+/, '').split('&');
        for (const i in paraString) {
            keyvalue = paraString[i].split('=');
            key = keyvalue[0];
            value = keyvalue[1];
            obj[key] = decodeURIComponent(value);
        }
        return obj;
    },
    /*
  @author : songshijie
  判断是否为微信
  */
    isWX() {
        const ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        return false;

    },
    /*
  @author : songshijie
  判断是否是IOS
  */
    isIOS() {
        const ua = navigator.userAgent;
        return ua.match(/(iPhone\sOS)\s([\d_]+)/);
    },

    plateForm() {
        const u = navigator.userAgent;
        const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
        const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
        const app = (function(ua) {
            if (/HbcC/.test(ua)) {
                return 'hbcc';
            }
            if (/HbcG/.test(ua)) {
                return 'hbcg';
            }
            return '';
        })(u);
        const version = (function(ua) {
            if (app === 'hbcg') {
                return (ua.split('HbcG/')[1]);
            }
            if (app === 'hbcc') {
                return (ua.split('HbcC/')[1]);
            }
            return '';
        })(u);
        return {
            os: (isIOS ? 'ios' : (isAndroid ? 'android' : 'pc')),
            app,
            version
        };
    },
    /*
  @autohor :songshijie
  设置微信头
  */
    setWeixinTitle(title) {
        document.title = title;
        // hack在微信IOS webview中无法修改document.title的情况
        if (this.isWX() && this.isIOS()) {
            const body = document.getElementsByTagName('body')[0];
            document.title = title;
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', '/favicon.ico');
            iframe.addEventListener('load', function() {
                setTimeout(function() {
                    try {
                        iframe.removeEventListener('load', null, false);
                    } catch (e) {
                        body.removeChild(iframe);
                    }

                    body.removeChild(iframe);
                }, 0);
            }, false);
            body.appendChild(iframe);
        }
    },
    _bindLazyLoad() {
        const imgCons = $('.lazy-image');

        function interval() {
            setTimeout(function() {
                check();
            }, 30);
        }

        function detach() {
            window.removeEventListener('scroll', interval, false);
            window.removeEventListener('resize', interval, false);
        }

        function check() {
            let winHeight = window.innerHeight,
                scrollTop = window.pageYOffset,
                i = 0,
                con,
                img,
                offset;

            while (i < imgCons.length) {
                con = $(imgCons[i]);
                offset = con.offset();
                if (scrollTop + winHeight + 20 >= offset.top && offset.width > 0) {
                    img = $(con);
                    $(img[0]).attr('src', img.attr('lazy-image'));
                    $(img[0]).removeClass('lazy-image');
                    [].splice.call(imgCons, i, 1);
                    i--;
                    if (!imgCons.length) {
                        detach();
                    }
                }
                i++;
            }
        }


        window.addEventListener('scroll', interval, false);
        window.addEventListener('resize', interval, false);

        check();
    },
    _bindLazyLoadBg() {
        const imgCons = $('.lazy-bg');
        function interval() {
            setTimeout(function() {
                check();
            }, 30);
        }

        function detach() {
            window.removeEventListener('scroll', interval, false);
            window.removeEventListener('resize', interval, false);
        }

        function check() {
            let winHeight = window.innerHeight,
                scrollTop = window.pageYOffset,
                i = 0,
                con,
                img,
                offset;

            while (i < imgCons.length) {
                con = $(imgCons[i]);
                // offset = con.offset();
                // if (scrollTop + winHeight + 20 >= offset.top) {
                const top = con[0].getBoundingClientRect().top; // 元素顶端到可见区域顶端的距离
                const se = document.documentElement.clientHeight; // 浏览器可见区域高度。
                if (top <= se) {
                    img = $(con);
                    $(img[0]).css({ backgroundImage: 'url(' + img.attr('lazy-bg') + ')' });
                    $(img[0]).removeClass('lazy-bg');
                    [].splice.call(imgCons, i, 1);
                    i--;
                    if (!imgCons.length) {
                        detach();
                    }
                }
                i++;
            }
        }


        window.addEventListener('scroll', interval, false);
        window.addEventListener('resize', interval, false);

        check();
    },
    _bindScrollTobottom(callback, tag) {

        function interval() {
            // setTimeout(function() {
            check();
            // }, 1);
        }

        function detach() {
            window.removeEventListener('scroll', interval, false);
            window.removeEventListener('resize', interval, false);
        }

        function check() {
            let winHeight = window.innerHeight,
                scrollTop = window.pageYOffset,
                i = 0,
                con,
                img,
                offset;

            offset = $('body').height();
            if (scrollTop + winHeight + 50 >= offset) {
                detach();
                callback && tag && callback();
            }
        }


        window.addEventListener('scroll', interval, false);
        window.addEventListener('resize', interval, false);

        check();

        // console.log(this)
        //     this.removeEventListener = function(){
        //       detach();
        //     }
        return detach;
    },

    // 根据url,app环境,获取channelId
    getRightChannelId() {
        const channelId = apiConfig.channelId;
        if (this.getRequestParam('channelId')) {
            return this.getRequestParam('channelId');
        }
        if (cookie.get('iscbc')) {
            return apiConfig.cbcChannelId;
        }
        if (cookie.get('ismaster')) {
            return apiConfig.masterChannelId;
        }
        const plateform = this.plateForm().app;
        if (plateform == 'hbcc') {
            return apiConfig.cChannelId;
        }
        if (plateform == 'hbcg') {
            return apiConfig.gChannelId;
        }
        return channelId;
    },

    goToAppGoodsDetail(cityid, goodsNo) {
        const plateForm = this.plateForm();
        const obj = {
            t: '2',
            v: '5',
            d: {
                gn: goodsNo,
                ci: cityid || '',
                u: `${apiConfig.domainHost}app/detail.html?goodsNo=${goodsNo}`
            }
        };
        switch (plateForm.app) {
        case 'hbcc':
            try {
                window.javaObj.doAction(JSON.stringify(obj));
            } catch (e) {
                window.location.href = obj.d.u;
            }
            break;
        default:
            window.location.href = obj.d.u;
        }
    },
    // 获取微信配置
    getWxData(scb, ecb) {
        loading.init();
        const curUrl = encodeURIComponent(location.href.split('#')[0]);
        const param = {
            url: apiConfig.getWxData + '?url=' + curUrl,
            type: 'GET',
            success(res) {
                loading.remove();
                if (res.status == 200) {
                    scb && scb(res);
                } else {
                    new Layer({
                        msg: res.message
                    });
                }
            },
            error() {
                loading.remove();
                new Layer({
                    msg: '微信配置获取失败，请稍后重试'
                });
                ecb && ecb();
            }
        };
        ajax.sendRequest(param);
    },
    // 微信分享
    WxShare(shareData, cb) {
        const that = this;
        that.getWxData(res => {
            const wxData = res.data;
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: wxData.appId, // 必填，公众号的唯一标识
                timestamp: wxData.timestamp, // 必填，生成签名的时间戳
                nonceStr: wxData.noncestr, // 必填，生成签名的随机串
                signature: wxData.signature, // 必填，签名，见附录1
                jsApiList: [ 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone' ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
            wx.ready(function() {
                wx.onMenuShareTimeline(shareData); // 朋友圈

                wx.onMenuShareAppMessage(shareData); // 好友

                wx.onMenuShareQQ(shareData); // qq

                wx.onMenuShareWeibo(shareData); // 微博

                wx.onMenuShareQZone(shareData); // qq空间
            });
            cb && cb();
        });
    },
    _getUCA(ucakey) {
        let key = '';
        let value = '';
        key = apiConfig.ENV + '_' + 'uca_' + ucakey;
        value = Date.parse(new Date()) + '';
        return {
            key,
            value
        };
    },
    versionCompare(a, b) {
        let i;
        let len;

        if (typeof a + typeof b !== 'stringstring') {
            return false;
        }

        a = a.split('.');
        b = b.split('.');
        len = Math.max(a.length, b.length);

        for (i = 0; i < len; i++) {
            if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
                return 1;
            } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
                return -1;
            }
        }

        return 0;
    },
    _bindScrollTobottom(callback, tag) {
        function interval() {
            // setTimeout(function() {
            check();
            // }, 1);
        }

        function detach() {
            window.removeEventListener('scroll', interval, false);
            window.removeEventListener('resize', interval, false);
        }

        function check() {
            let winHeight = window.innerHeight,
                scrollTop = window.pageYOffset,
                i = 0,
                con,
                img,
                offset;

            offset = $('body').height();
            if (scrollTop + winHeight + 50 >= offset) {
                detach();
                callback && tag && callback();
            }
        }


        window.addEventListener('scroll', interval, false);
        window.addEventListener('resize', interval, false);

        check();
    }
};
