/*
* geolocation - 0.0.1
* {
* timeout
* maximumAge
*}
*/

const _gol = window || this;
const ajax = require('widgets/ajax');
const util = require('widgets/util');
const apiConfig = require('widgets/apiConfig');

const getData = (data, fn) => {
    const opts = {
	    url: apiConfig.getpoi,
	    data: util._extend(data, { channelId: util.getRightChannelId() }),
	    success: fn
	 };
	 return ajax.sendRequest(opts);
};

class Geolocation {
    constructor(ops) {
        this.option = {
            timeout: 10000,
            maximumAge: 0
        };
        this.data = {};
        this.params = util.getRequestParam('userId');
        util._extend(this.option, ops);
        util._extend(this.option, { enableHighAccuracy: false });
    }

    init(fn) {
        const getPositionSuccess = position => {
            let longitude = position.coords.longitude,
                latitude = position.coords.latitude;
            getData({ longitude, latitude, userId: this.params },
            	result => {
            	if (result.status == 200) util._extend(this.data, result.data);
            	else util._extend(this.data, {});
            	fn && fn.call(position, null, result);
                });
        };

        const getPositionError = error => {
            let message = '';
            switch (error.code) {
		        case error.TIMEOUT:
		        	message = '连接超时，请重试';
		            console.warn();
		            break;
		        case error.PERMISSION_DENIED :
		            message = '您拒绝了使用位置共享服务，查询已取消';
		            break;
		        case error.POSITION_UNAVAILABLE :
		            message = '非常抱歉，无法为您所提供位置服务';
		            break;
	            default:
	            	message = `geolocation is error: ${error}`;
	            	break;
		    }
		    console.warn(message);
		    fn && fn.call(error, 'error', message);

        };

        try {
            if (_gol.navigator.geolocation) {
                _gol.navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError, this.option);

            } else {
                const message = '`geolocation` need navigator, but no';
                console.warn(message);
                fn && fn.call(error, 'error', message);
            }
        } catch (err) {
            throw Error('type error');
        }

    }
}

if (typeof exports === 'object') module.exports = Geolocation;
else _gol.Geolocation = Geolocation;
