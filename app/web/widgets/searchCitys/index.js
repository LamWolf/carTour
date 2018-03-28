/*
 *	newSearchCity
 * event - newSearchCity
 * option{
 * wrap:*,
 * type : * 1国内，2国际,
 * channel : 隐藏/删除,
 * backer: function(){}
 * caller: function(){}
 *}
 */

const [ _gol, _define, _exports ] = [ window || this, define, exports ];
const $ = require('widgets/zepto/zepto');
const juicer = require('widgets/juicer/juicer.js');

const util = require('widgets/util');
const Header = require('widgets/header/index2.js');
const storage = require('widgets/storage');
const loading = require('widgets/loading');
const abcd = require('widgets/abcd');
const search = require('widgets/search');
const geolocation = require('widgets/geolocation');
const layer = require('widgets/layer/index');

const tpl = require('./tpl/index.tpl');
const getData = require('./js/getData.js');

const history = require('./tpl/history.tpl');
const hot = require('./tpl/hot.tpl');
const bar = require('./tpl/bar.tpl');
const main = require('./tpl/main.tpl');

const STORAGEKEY = 'widgetsCityInfo';
const myStorage = new storage();
const myGeolocation = new geolocation();

const _uukey = () => (new Date()).getTime();
const _uuid = () => 'G-newCity-wrap' + _uukey();

const _remove = ($obj, $his) => {

    const parent = $obj.parent();
    const grand = parent.parent();
    if (grand.children().length < 2) $his.remove();
    else parent.remove();
};

require('./scss/index.scss');

class SearchCityW {
    constructor(option = {}) {

        this.option = {
            wrap: '#page',
            type: 1,
            channel: false,
            event: 'newSearchCity',
            inland: 1
        };

        util._extend(this.option, option);

        this.wrap = $(this.option.wrap);

        this.data = {
            uuid: _uuid(),
            type: this.option.inland,
            tpl: {
                history,
                hot,
                bar,
                main
            },
            offset: {}

        };

        this._init();
    }

    _init() {

        this._addJuicerHelp();

        this._cacheAuto(this.option.inland);
    }

    _hideWrap() {

    /* this.headers.demo.css({
      'display': 'none'
    });*/
        this.demo.css({
            display: 'none'
        });
        this.option.backer && this.option.backer.call(this, this.wrap);

    }

    _showWrap() {
        if (this.option.channel && this.demo.css('display') == 'none') {
            /* this.headers.demo.css({
        'display': 'block'
      });*/
            this.demo.css({
                display: 'block'
            });
            this.option.caller && this.option.caller.call(this, this.wrap);
            return true;
        }
        return false;
    }

    _removeWrap() {
    // this.headers.demo.remove();
        this.demo.remove();
        this.option.backer && this.option.backer.call(this, this.wrap);
    }

    _cacheDome() {

        this.demo = $('#' + this.data.uuid);
        this.dom = {
            location: $('#location', this.demo),
            list: $('.city-main ul', this.demo),
            bar: $('.plane-bar', this.demo),
            barTitle: $('.bar-box span', this.demo),
            history: $('.history-box', this.demo),
            citySearch: $('.city-search', this.demo),
            city: $('.city-main', this.demo),
            cityNav: $('#cityNav span', this.demo),
            search: {
                area: $('.sp-input-wrap', this.demo),
                input: $('#J-Sp-input', this.demo),
                clear: $('.sp-clear-icon', this.demo)
            }
        };

    }

    _cacheGeolocation() {

        myGeolocation.init((type, result) => {
            const data = result.data;
            if (!type && result.status == 200) {
                this.dom.location.removeClass('fail');
                this.dom.location.text(data.cityName);
                this.dom.location.attr('data-info', JSON.stringify(data));
            } else {
                this.dom.location.addClass('fail');
                this.dom.location.text('定位失败');
                this.dom.location.attr('data-info', null);
            }
        });
    }

    _cacheAuto(type, change) {

        const history = myStorage.get(STORAGEKEY, true);

        // loading.init();
        util._extend(this.data, {
            history: [].concat(history || []).slice(0, 3)
        });

        getData.city({
            serviceType: this.option.type,
            inland: type,
            hotSize: 9
        },
        result1 => {

            if (result1.status == 200) {
                util._extend(this.data, {
                    main: result1.data
                });
            } else {
                util._extend(this.data, {
                    main: []
                });
            }
            change && this._removeWrap();
            this._renderUI();
            loading.remove();
        }
        );
    }

    _cacheHeader() {
        this.header = new Header({
            wrap: this.demo,
            title: '请选择城市',
            subShow: 'false',
            pannel: this.demo,
            hash: '#' + this.demo.attr('id')
        });
    }

    _addJuicerHelp() {
        juicer.register('setInfo', obj => {
            return JSON.stringify(obj);
        });
        juicer.unregister('setResult');
        juicer.register('setResult', obj => {
            return obj.countryName ? `${obj.cityName}<code>${obj.countryName}</code>` : `${obj.cityName}<code>${obj.placeName}</code>`;
        });

    // juicer.register('help', (obj) => {
    // 	console.log(obj);
    // });
    }

    _cacheAbcd() {
        const height = $(_gol).height() - parseInt(this.dom.bar.css('padding-top')) - this.dom.barTitle.height() - 10;
        this.abcd = new abcd(
            $('.bar-box dl dt', this.demo),
            this.dom.city, {
                deviation: this.dom.city.css('top'),
                sign: '.bar-sign',
                height
            }
        );
    }

    _fireEvent(data) {
        myStorage.add(STORAGEKEY, data, {
            exp: 7 * 24 * 60 * 60,
            key: 'cityId'
        });
        if (this.option.channel) this._hideWrap();
        else this._removeWrap();
        $(document).trigger(this.option.event, data);
        _gol.history.back();
    }

    _renderUI(type) {
        this.wrap.append(juicer(tpl, this.data));
        this._cacheDome();
        this._cacheHeader();
        this.cityCon = new search({
            warp: this.dom.citySearch,
            decorate: juicer.options._method.setResult
        });

        this._cacheGeolocation();
        this._cacheEvent();

    }

    _cacheEvent() {
        const that = this;
        this._cacheAbcd();

        this.dom.list.on('click', ' li a', function(e) {

            const self = $(this);
            const target = e.target;
            const info = self.attr('data-info');
            if (target.tagName.toLowerCase() == 'del') {
                _remove(self, that.dom.history);
                myStorage.replace(STORAGEKEY, info, '', 'cityId');
                that.abcd._getOffset();
                return;
            }
            if (self.hasClass('fail')) {
                return false;
            }
            that._fireEvent(info);

        });

        this.dom.cityNav.on('click', function(e) {
            const self = $(this);
            const type = self.attr('data-type');
            that.data.type = type;
            if (self.hasClass('select')) return;
            that._cacheAuto(type, 1);

        });

        $(document).off('searchData').on('searchData', function(e, data) {
            that.dom.search.input.blur();
            that._fireEvent(data);
        });

        that.dom.search.input.on('input', function() {
            const self = $(this);
            that.dom.search.clear.css('display', 'block');
            getData.searchCity({
                keyword: self.val(),
                type: 3
            },
            function(result) {
                loading.remove();
                if (this.data.keyword === '') {
                    that.dom.citySearch.empty();
                    that.dom.search.clear.hide();
                    return;
                }
                if (result.status == 200) {
                    that.cityCon.init(result.data, self.val());
                } else {
                    new layer({
                        msg: result.message
                    });
                }
            }
            );
        }).on('blur', function() {
            setTimeout(function() {
                window.__searchResult.refresh();
            }, 600);
        });

        that.dom.search.clear.on('click', function() {
            that.dom.search.input.val('');
            that.dom.citySearch.empty();
            $(this).hide();
        });

    }


}

if (typeof _define === 'function' && _define.amd) {
    _define(function() {
        return SearchCityW;
    });
} else if (typeof _exports === 'object') module.exports = SearchCityW;
else _gol.SearchCityW = SearchCityW;
