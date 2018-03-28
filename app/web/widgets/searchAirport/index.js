/*
 *	search/plane
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

const tpl = require('./tpl/index.tpl');
const getData = require('./js/getData.js');

const history = require('./tpl/history.tpl');
const hot = require('./tpl/hot.tpl');
const bar = require('./tpl/bar.tpl');
const main = require('./tpl/main.tpl');

const STORAGEKEY = 'airInfo';
const myStorage = new storage();
// const myPlane = new search();
const _uuid = () => 'G-plane-wrap' + (new Date()).getTime();

const _remove = ($obj, $his) => {

    const parent = $obj.parent();
    const grand = parent.parent();
    if (grand.children().length < 2) $his.remove();
    else parent.remove();
};

require('widgets/csslib/base.css');
require('./scss/index.scss');

class SearchAirport {
    constructor(option = {}) {
        this.option = {
            wrap: '#page',
            channel: false,
            event: 'airportSelect'
        };

        util._extend(this.option, option);

        this.wrap = $(this.option.wrap);

        this.callback = util.getRequestParam('param');
        this.data = {
            uuid: _uuid(),
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
        loading.init();
        this._addJuicerHelp();
        this._cacheAuto();
    }

    _cacheAuto() {
        const history = myStorage.get(STORAGEKEY, true);
        util._extend(this.data, {
            history: [].concat(history || []).slice(0, 3)
        });
        getData.hot({
            size: 3
        },
        result => {
            if (result.status == 200) {
                util._extend(this.data, {
                    hot: result.data
                });
            } else {
                util._extend(this.data, {
                    hot: []
                });
            }

            getData.initial({},
                result1 => {
                    if (result.status == 200) {
                        util._extend(this.data, {
                            main: result1.data
                        });
                    } else {
                        util._extend(this.data, {
                            main: []
                        });
                    }
                    this._renderUI();

                }
            );

        }
        );
    }

    _cacheHeader() {
        this.header = new Header({
            wrap: this.demo,
            title: '请选择机场',
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
            return `${obj.cityName}-${obj.airportName}`;
        });
    }

    _cacheAbcd() {
        const height = $(_gol).height() - parseInt(this.dom.bar.css('padding-top')) - this.dom.barTitle.height() - 10;
        this.abcd = new abcd(
            '.bar-box dl dt',
            this.dom.plane, {
                deviation: this.dom.plane.css('top'),
                sign: '.bar-sign',
                height
            }
        );
    }

    _cacheDome() {
        this.demo = $('#' + this.data.uuid);
        this.dom = {
            list: $('.plane-main ul', this.demo),
            bar: $('.plane-bar', this.demo),
            barTitle: $('.bar-box span', this.demo),
            plane: $('.plane-main', this.demo),
            planeSearch: $('#planeSearch', this.demo),
            history: $('.history-box', this.demo),
            search: {
                area: $('.sp-input-wrap', this.demo),
                input: $('#J-Sp-input', this.demo),
                clear: $('.sp-clear-icon', this.demo)
            }
        };
    }

    _renderUI() {
        this.wrap.append(juicer(tpl, this.data));
        this._cacheDome();
        this._cacheHeader();
        this.myPlane = new search({
            warp: this.dom.planeSearch,
            decorate: juicer.options._method.setResult,
            event: 'airSelect'
        });
        this._cacheEvent();
        loading.remove();

    }

    _locationHref(info) {
        myStorage.add(STORAGEKEY, info, {
            exp: 7 * 24 * 60 * 60,
            key: 'cityId'
        });
        _backTo(this.callback, {
            planeInfo: JSON.parse(info)
        });

    }

    _cacheEvent() {
        const that = this;
        this._cacheAbcd();
        this.dom.list.on('click', 'li a', function(e) {
            const self = $(this);
            const target = e.target;
            const info = self.attr('data-info');
            if (target.tagName.toLowerCase() == 'del') {
                _remove(self, that.dom.history);
                myStorage.replace(STORAGEKEY, info);
                that.abcd._getOffset();
                return;
            }

            that._fireEvent(info);
        });

        $(document).off('airSelect').on('airSelect', function(e, data) {
            that.dom.search.input.blur();
            that._fireEvent(data);
        });

        that.dom.search.input.on('input', function() {
            const self = $(this);
            loading.remove();
            loading.init();
            that.dom.search.clear.css('display', 'block');
            getData.search({
                keyword: self.val()
            },
            function(result) {
                loading.remove();
                if (this.data.keyword === '') {
                    that.dom.planeSearch.hide();
                    that.dom.bar.show();
                    that.dom.plane.show();
                    that.dom.search.clear.hide();
                    return;
                }
                if (result.status == 200) {
                    that.dom.planeSearch.css({
                        display: 'block'
                    });
                    that.dom.bar.hide();
                    that.dom.plane.hide();
                    that.myPlane.init(result.data, self.val());
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
            that.dom.planeSearch.hide();
            that.dom.bar.show();
            that.dom.plane.show();
            $(this).hide();
        });

    }

    _hideWrap() {
        this.demo.css({
            display: 'none'
        });
        this.option.backer && this.option.backer.call(this, this.wrap);
    }

    _removeWrap() {
        this.demo.remove();
        this.option.backer && this.option.backer.call(this, this.wrap);
    }

    _fireEvent(data) {
        myStorage.add(STORAGEKEY, data, {
            exp: 7 * 24 * 60 * 60,
            key: 'cityId'
        });
        if (this.option.channel) this._hideWrap();
        else this._removeWrap();
        $(document).trigger(this.option.event, JSON.parse(data));
        _gol.history.back();
    }


}
// new SearchAirport;
if (typeof _define === 'function' && _define.amd) {
    _define(function() {
        return SearchAirport;
    });
} else if (typeof _exports === 'object') module.exports = SearchAirport;
else _gol.SearchCityW = SearchAirport;
