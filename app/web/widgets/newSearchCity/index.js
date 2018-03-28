/*
 *	newSearchCity
 * event - newSearchCity
 * option{
 * warp:*,
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
const header = require('widgets/header/index2.js');
const storage = require('widgets/storage');
const loading = require('widgets/loading');
const abcd = require('widgets/abcd');
const search = require('widgets/search');
const geolocation = require('widgets/geolocation');

const tpl = require('./tpl/index.tpl');
const getData = require('./js/getData.js');

const history = require('./tpl/history.tpl');
const hot = require('./tpl/hot.tpl');
const bar = require('./tpl/bar.tpl');
const main = require('./tpl/main.tpl');

const STORAGEKEY = 'widgetsCityInfo';
const myStorage = new storage();
const myGeolocation = new geolocation();


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
            fireEvent: 'newSearchCity', // trigger事件的名称
            searchOnline: false, // 是否启用接口搜索
            scroll: false // 关闭弹层后是否禁止body touchmove
        };
        util._extend(this.option, option);
        this.wrap = $(this.option.wrap);

        this.data = {
            type: this.option.type,
            tpl: {
                history,
                hot,
                bar,
                main
            },
            offset: {},
            groupCity: {
                location: this.option.groupCity.location || false,
                history: this.option.groupCity.history || false,
                hot: this.option.hotCities.length > 0,
                groupCities: this.option.groupCity.format == true ? (this.option.groupCity.groupCities || []) : (this._dataSort(this.option.groupCity.groupCities) || [])
            },
            hotCities: this.option.hotCities

        };
        this._init();
    }

    _init() {
        this._showWrap();
        this._addJuicerHelp();

        this._cacheAuto(this.option.type);
    }

    _setBack(type) {
        this.option.back && this.option.back;
    }

    _hideWrap() {
        this.wrap.css({
            display: 'none'
        });
        this.option.backer && this.option.backer.call(this, this.wrap);

    }

    _showWrap() {
        if (this.option.channel && this.wrap.css('display') == 'none') {
            this.wrap.css({
                display: 'block'
            });
            this.option.caller && this.option.caller.call(this, this.wrap);
            return this;
        }
    }

    _removeWrap() {
        this.wrap.remove();
        this.option.backer && this.option.backer.call(this, this.wrap);
    }

    _cacheDome() {
        this.dom = {
            location: $('#location', this.wrap),
            list: $('#cityCircle ul', this.wrap),
            bar: $('.plane-bar', this.wrap),
            barTitle: $('.bar-box span', this.wrap),
            city: $('#cityCircle', this.wrap),
            history: $('.history-box', this.wrap),
            citySearch: $('#citySearch', this.wrap),
            cityNav: $('#cityNav span'),
            search: {
                area: $('.sp-input-wrap', this.wrap),
                input: $('#J-Sp-input', this.wrap),
                clear: $('.sp-clear-icon', this.wrap)
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


    _cacheAuto(type) {
    // loading.init();
        if (this.data.groupCity.history) {
            const history = myStorage.get(STORAGEKEY, true);
            util._extend(this.data, {
                history
            });
        }


        /* getData.city({
        cityId: this.option.cityId || 217,
        source: 6
      },
      (result1) => {
        if (result1.status == 200) {

          util._extend(this.data, {
            'main': this._dataSort(result1.data)
          });
        } else util._extend(this.data, {
          'main': []
        });
        this._renderUI();
        loading.remove();
      }
    );*/
        this._renderUI();
    }

    _cacheHeader() {
        const that = this;
        this.header = new header({
            wrap: this.wrap,
            title: '请选择城市',
            pannel: this.wrap,
            hash: '#' + this.wrap.attr('id'),
            callback: () => {
                this.option.handleParent && this.option.handleParent.triggerShowEvent(); // 解决父级影响固定定位(fix)问题
            }
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
    }

    _cacheAbcd() {
        const height = $(_gol).height() - parseInt(this.dom.bar.css('padding-top')) - this.dom.barTitle.height() - 10;
        this.abcd = new abcd(
            '.bar-box dl dt',
            this.dom.city, {
                deviation: this.dom.city.css('top'),
                sign: '.bar-sign',
                height
            }
        );
    }

    // _locationHref(info){
    // 	myStorage.add(STORAGEKEY, info, {exp : 7 * 24 * 60 * 60});
    // 	// _gol.location.href = 'app/city.html?data=' + info;
    // }

    _fireEvent(data) {
        myStorage.add(STORAGEKEY, data, {
            exp: 7 * 24 * 60 * 60
        });
        if (this.option.channel) this._hideWrap();
        else this._removeWrap();
        this._initScroll();
        $(document).trigger(this.option.fireEvent, data);
        this.option.handleParent && this.option.handleParent.triggerShowEvent(); // 解决父级影响固定定位(fix)问题
        _gol.history.back();
    }

    _renderUI(type) {
        this._initScroll();
        this.wrap.empty();
        this._cacheHeader();
        this.wrap.append(juicer(tpl, this.data));
        if (this.data.groupCity.location) {
            this._cacheGeolocation();
        }
        this._cacheEvent();
        this.cityCon = new search({
            warp: this.dom.citySearch,
            decorate: juicer.options._method.setResult
        });
        this.option.handleParent && this.option.handleParent.triggerHideEvent(); // 解决父级影响固定定位(fix)问题
    }

    _cacheEvent() {
        const that = this;
        this._cacheDome();
        this._cacheAbcd();

        // this.dom.city.on('scroll', function(e){
        // 	let self = $(this);
        // 	console.log(self.offset().top);
        // 	console.log($(_gol).height());
        // 	console.log(self.scrollTop());
        // 	console.log(self.height());
        // 	// scrollTop == (offsetHeight – clientHeight)
        // });

        this.dom.list.on('click', ' li a', function(e) {
            const self = $(this);
            const target = e.target;
            const info = self.attr('data-info');
            if (target.tagName.toLowerCase() == 'del' && that.data.groupCity.history) {
                _remove(self, that.dom.history);
                myStorage.replace(STORAGEKEY, info);
                that.abcd._getOffset();
                return;
            }

            that._fireEvent(info);

        });

        /* this.dom.cityNav.on('click', function(e) {
      let self = $(this);
      let type = self.attr('data-type');
      that.data.type = type;
      that._cacheAuto(type);
    });*/

        $(document).off('searchData').on('searchData', function(e, data) {
            that.dom.search.input.blur();
            that._fireEvent(data);
        });

        $(document).off('backHeader').on('backHeader', function() {
            if (that.option.scroll) {
                that._initScroll();
            } else {
                that._preventScroll();
            }
        });

        that.dom.search.input.on('input', function() {
            loading.remove();
            loading.init();
            const self = $(this);
            that.dom.search.clear.css('display', 'block');
            let result = [];
            if (that.option.searchOnline) {
                result = that._searchOnline(self.val());
            } else {
                loading.remove();
                if (self.val() != '') {
                    result = that._searchCity(self.val());
                    that.cityCon.init(result, self.val());
                } else {
                    that.dom.citySearch.empty();
                    that.dom.search.clear.hide();
                }

            }

        }).on('blur', function() {
            setTimeout(function() {
                window.__searchResult.refresh();
            }, 600);
        });

        that.dom.search.clear.on('click', function() {
            that._initScroll();
            that.dom.search.input.val('');
            that.dom.citySearch.empty();
            $(this).hide();
        });


    }

    _dataSort(data) {
        const obj = {};
        let capLetter;

        function getCapLetter(str) {
            return str.toUpperCase().substr(0, 1);
        }
        data.sort((v1, v2) => {
        // return v1.spell.localeCompare(v2.spell)
            return v1.spell > v2.spell ? 1 : -1;
        })
            .forEach((v, i) => {
                capLetter = getCapLetter(v.spell);
                obj[capLetter] ? obj[capLetter].push(v) : (obj[capLetter] = [], obj[capLetter].push(v));
            });

        return obj;
    }

    _preventScroll() {
        $('body').on('touchmove', function(e) {
            e.preventDefault();
        });
    }

    _initScroll() {
        $('body').off('touchmove');
    }

    _searchCity(val) {
        const that = this;
        const arr = [];
        const item = that.data.groupCity.groupCities;
        const reg = new RegExp($.trim(val), 'gi');
        let str = '';
        for (const i in item) {
            item[i].filter(el => {
                reg.lastIndex = 0;
                str = `${el.cityName}${el.spell}${el.enName}`;
                // str = `${el.continentName}${el.countryName}${el.cityName}${el.spell}${el.enName}${el.placeName}`;
                if (reg.test(str)) {
                    arr.push(el);
                }
            });
        }
        return arr;
    }
    _searchOnline(val) {
        const that = this;
        getData.searchCity({
            keyword: val,
            type: 3,
            source: 6,
            offset: 0,
            limit: 2000
        },
        function(res) {
            loading.remove();
            if (this.data.keyword === '') {
                that.dom.citySearch.empty();
                that.dom.search.clear.hide();
                return;
            }
            if (res.status == 200) {
                that.cityCon.init(res.data.listData, val);
                that._preventScroll();
            }
        }
        );
    }

}

if (typeof _define === 'function' && _define.amd) {
    _define(function() {
        return SearchCityW;
    });
} else if (typeof _exports === 'object') module.exports = SearchCityW;
else _gol.SearchCityW = SearchCityW;
