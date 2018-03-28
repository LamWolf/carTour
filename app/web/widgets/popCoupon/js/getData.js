import ajax from 'widgets/ajax/index';
import util from 'widgets/util/index';
import apiConfig from 'widgets/apiConfig/index';
import loading from 'widgets/loading/index';

const MINTIME = 300;
const SIGNS = {};

const _DelayAjax = opts => {
    const time = (new Date()).getTime();
    const sign = String(opts.url);
    SIGNS.timer && clearTimeout(SIGNS.timer);
    if (SIGNS[sign] && ((time - SIGNS[sign]) < MINTIME)) {
        SIGNS.timer = setTimeout(function() {
            ajax.sendRequest(opts);
        }, MINTIME);
        SIGNS[sign] = time;
        return;
    }

    SIGNS[sign] = time;
    ajax.sendRequest(opts);
};

module.exports = {
    city(data = {}, fn, url = apiConfig.getABCity) {
        loading.remove();
        loading.init();
        const opts = {
            url,
            data: util._extend(data, {
                channelId: util.getRightChannelId()
            }),
            success: fn
        };
        ajax.sendRequest(opts);
    },
    searchCity(data = {}, fn, url = apiConfig.searchABCCity) {
        loading.remove();
        loading.init();
        const opts = {
            url: url || apiConfig.searchABCCity,
            data: util._extend(data, {
                channelId: util.getRightChannelId()
            }),
            async: false,
            success: fn
        };
        _DelayAjax(opts);
    }
};
