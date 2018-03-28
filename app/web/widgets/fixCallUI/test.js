/**
 * Created by Gorden on 2017/1/25.
 */
const $ = require('widgets/zepto/zepto');
const Insurance = require('widgets/insurance_/index.js');
const HackWxFixed = require('./index.js');
const hackFixed = new HackWxFixed({ current: $('.inner-wrap'), callbackName: 'insureIndex' });
$('button').on('click', function() {
    hackFixed.triggerHideEvent();
    new Insurance({
        peopleNum: 20,
        defaultData: '',
        isRerender: true,
        hackWxVo: hackFixed
    }).show();
});
