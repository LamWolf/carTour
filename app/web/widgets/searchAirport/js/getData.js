import ajax from 'widgets/ajax/index';
import util from 'widgets/util/index';
import apiConfig from 'widgets/apiConfig/index';

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
    ajax.sendRequest(opts);
    SIGNS[sign] = time;
};


module.exports = {
    initial(data = {}, fn, url = apiConfig.initialAirport) {
        const opts = {
            url,
            data: util._extend(data, {
                channelId: util.getRightChannelId()
            }),
            success: fn
        };
        ajax.sendRequest(opts);
    },
    hot(data = {}, fn, url = apiConfig.hotAirport) {
        const opts = {
            url,
            data: util._extend(data, {
                channelId: util.getRightChannelId()
            }),
            success: fn
        };
        ajax.sendRequest(opts);
    },
    search(data = {}, fn, url = apiConfig.getAirports) {
        const opts = {
            url,
            data: util._extend(data, {
                channelId: util.getRightChannelId()
            }),
            success: fn,
            async: false
        };
        _DelayAjax(opts);
    }
};
