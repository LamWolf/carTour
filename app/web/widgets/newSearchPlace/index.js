/*
 * place - 0.0.1
 *
 */
const [ _gol, _define, _exports ] = [ window || this, define, exports ];
const juicer = require('widgets/juicer/juicer.js');
const $ = require('widgets/zepto/zepto');
const util = require('widgets/util');
const IScroll = require('widgets/iscroll/iscroll-all');
const search = require('widgets/search');
const Header = require('widgets/header/index2.js');
const layer = require('widgets/layer/index');
const storage = require('widgets/storage');
const loading = require('widgets/loading');
const tpl = require('./tpl/index.tpl');
const getData = require('./js/getData.js');
const myStorage = new storage();


const _placeKey = 'placeStorage';

const stylePlace = require('./scss/index.scss');


const _uukey = () => (new Date()).getTime();
const _uuid = () => 'G-newPlace-wrap' + _uukey();


class Place {
    constructor(ops = {}) {
        this.option = {
            event: 'searchPlace',
            channel: false,
            backer() {},
            title: '请选择地点',
            subShow: false,
            placeholder: '您在哪儿上车'
        };
        util._extend(this.option, ops);

        this.wrap = $(ops.wrap || '#page');

        this.data = {
            uuid: _uuid()
        };

        this._init();
    // code
    }

    _init() {
        const placeStorage = myStorage.get(_placeKey);
        util._extend(this.data, {
            history: [].concat(placeStorage || []).slice(0, 3),
            opt: this.option
        });
        this._addJuicerHelp();
        this._runderUI();
    }

    _cacheDom() {
        this.demo = $('#' + this.data.uuid);
        this.dom = {
            content: $('#placeContent', this.demo),
            con: $('.place-main', this.demo),
            list: $('.search-con ul', this.demo),
            history: $('#placeContent .history'),
            search: {
                area: $('.sp-input-wrap', this.demo),
                input: $('#J-Sp-input', this.demo),
                clear: $('.sp-clear-icon', this.demo)
            }
        };
    }


    _addJuicerHelp() {
        juicer.unregister('setResult');
        juicer.register('setResult', obj => {
            return `${obj.placeName}<p>${obj.placeAddress}</p>`;
        });
    }


    _cacheHeader() {
        const that = this;
        this.headers = new Header({
            wrap: this.demo,
            title: this.option.title,
            subShow: this.option.subShow,
            pannel: this.demo,
            hash: '#' + this.demo.attr('id')
        });
    }

    _runderUI() {
        this.wrap.append(juicer(tpl, this.data));
        this._cacheDom();
        this._cacheHeader();
        this._cacheEvent();
        this.PlaceCon = new search({
            warp: this.dom.con,
            decorate: juicer.options._method.setResult,
            event: 'poiSelect'
        });
    }

    _hideWrap() {

        this.demo.css({
            display: 'none'
        });
        this.option.backer && this.option.backer.call(this, this.wrap);

    }

    _showWrap() {
        if (this.option.channel && this.demo.css('display') == 'none') {
            this.demo.css({
                display: 'block'
            });
            this.option.caller && this.option.caller.call(this, this.wrap);
            return true;
        }
        return false;
    }

    _removeWrap() {
        this.demo.remove();

        this.option.backer && this.option.backer.call(this, this.wrap);
    }

    _fireEvent(data) {
        if (this.option.channel) this._hideWrap();
        else this._removeWrap();
        myStorage.add(_placeKey, this.PlaceCon.data.keyWords, {
            exp: 7 * 24 * 60 * 60
        });
        $(document).trigger(this.option.event, JSON.parse(data));
        _gol.history.back();
    }

    _cacheEvent() {
        const that = this;

        this.dom.list.on('click', 'li a', function(e) {
            const self = $(this);
            const target = e.target;
            const info = self.attr('data-info');
            that._fireEvent(info);

        });

        this.dom.history.on('click', 'ul li a', function(e) {
            const self = $(this);
            const target = e.target;
            const info = self.attr('data-info');
            that.dom.search.input.val(info).trigger('input');
        });

        $(document).off('poiSelect').on('poiSelect', function(e, data) {
            that.dom.search.input.blur();
            that._fireEvent(data);
        });

        that.dom.search.input.on('input', function() {
            const self = $(this);
            loading.remove();
            loading.init();
            that.dom.search.clear.css('display', 'block');
            that._getResult(self.val());
        }).on('blur', function() {
            setTimeout(function() {
                window.__searchResult.refresh();
            }, 600);
        });

        that.dom.search.clear.on('click', function() {
            that.dom.search.input.val('');
            that.dom.con.empty().hide();

            that.dom.content.css({
                display: 'block'
            });
            $(this).hide();
        });

    }

    _getResult(val) {
        const that = this;
        getData.searchPlace({
        // input: val,
            keyword: val,
            offset: 0,
            limit: 20,
            cityId: that.option.cityId
        // serviceType: that.option.serviceType,
        // location: that.option.location,
        },
        function(result) {
            loading.remove();
            if (this.data.keyword === '') {
                that.dom.con.empty().hide();
                that.dom.content.css({
                    display: 'block'
                });
                that.dom.search.clear.hide();
                return;
            }
            if (result.status == 200) {
                that.dom.content.css({
                    display: 'none'
                });
                that.dom.con.css({
                    display: 'block'
                });
                const data = result.data.places || [];
                that.PlaceCon.init(data, val);
            } else {
                new layer({
                    msg: result.message
                });
            }
        }
        );
    }

}

if (typeof _define === 'function' && _define.amd) {
    _define(function() {
        return Place;
    });
} else if (typeof _exports === 'object') module.exports = Place;
else _gol.Place = Place;
