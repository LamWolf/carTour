/**
 * Created by Gorden on 16/6/8.
 */

const MD5 = require('./blueimp-md5.js');
const ajax = require('widgets/ajax/index.js');
const apiConfig = require('widgets/apiConfig/index.js');
const myStorage = new (require('widgets/storage/index.js'))();

const SETTINGS = {
    userType: 'c', // 用户类型
    channelId: '1108019942', // 渠道ID
    sourceId: 6, // 注册时应用于source字段
    appKey: 'com.hbc.web', // 用于获取ak
    appName: '皇包车-WEB', // 用于获取ak
    appVersion: '1.0' // 用于获取ak
};
class getAK {
    constuctor() {

    }

    getPushToken() {
        return Math.random().toString(36).substring(2, 10) + Date.now();
    }

    getDeviceId() {
    // DeviceID 校验 deviceId = MD5(pushToken倒序＋appKey倒序＋appVersion+appName倒序)
        let deviceId;
        window.pushToken = this.getPushToken();
        const appKey = SETTINGS.appKey;
        const appName = SETTINGS.appName;
        const appVersion = SETTINGS.appVersion;
        const pushTokenReverse = window.pushToken.split('').reverse().join('');
        const appKeyReverse = appKey.split('').reverse().join('');
        const appNameReverse = appName.split('').reverse().join('');
        deviceId = MD5(pushTokenReverse + appKeyReverse + appVersion + appNameReverse);
        return deviceId;
    }

    getAk(success) {
        const url = apiConfig.getAK;
        const deviceId = this.getDeviceId();
        const pushToken = window.pushToken;
        const param = {
            deviceId,
            pushToken,
            appKey: SETTINGS.appKey,
            appName: SETTINGS.appName,
            appVersion: SETTINGS.appVersion
        };
        /*
    hack by shiqing
    */
        let userInfo;
        try {
            userInfo = myStorage.get('userInfo');
            // userInfo = window.localStorage.getItem('userInfo') && JSON.parse(window.localStorage.getItem('userInfo'))
        } catch (e) {
            userInfo = null;
        }

        if (userInfo && userInfo.userId) {
            param.userSerial = userInfo.userId;
        }

        const opt = {
            url,
            method: 'POST',
            data: param,
            success(ret) {
                window.__AK = ret.data;
                success && success(ret.data);
            },
            error(ret) {
                console.log('get ak error');
            }
        };
        return ajax.sendRequest(opt);

    }


}

module.exports = new getAK();
