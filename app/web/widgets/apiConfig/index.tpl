/**
 * Created by Gorden on 16/6/2.
 */
module.exports = {
  "domainHost": "<%- mHost %>",
  "goodsHost":"<%- goodsHost %>",
  "gappHost": "<%- domainHost %>",
  "apiHost": "<%- apiHost %>",
  "wxApiHost": "<%- apiHost %>",
  "sApiHost": "<%- apiHost %>",
  "resHost": "<%- resHost %>",
  'frHost': '<%- frHost %>',
  'actHost': '<%- actHost %>',
  'api3': '<%- api3 %>',
  'infoHost': '<%- infoHost %>',
  'getAK': '<%- apiHost %>passport/v1.0/c/getWebAccessKey',
  'openApiHost': '<%- apiHost %>',
  'openApiHost2': '<%- apiHost %>',
  'payHost': '<%- payHost %>',

  'logout': '<%- apiHost %>ucenter/v1.0/c/user/h5logout', // 用户注销接口地址

  'toPay': '<%- pay %>', // 支付

  'sendCode': '<%- apiHost %>ucenter/v1.0/c/user/captcha', //发送验证码
  'codeLogin': '<%- apiHost %>ucenter/v1.0/c/user/h5login/bycaptcha', //验证码登录
  "getPackW" : "<%- apiHost %>/marketing/v1.0/e/openapi/coupon/packet/webkit",// 券批次
  
  'cdnHost' : '<%- cdnHost %>',
  'packNo': '<%- packNo %>',
  'channelId': '1108019942',
  'gChannelId': '1901198716',//G端channelId
  'cChannelId' : '18',
  'cbcChannelId' : '1145431513', //建行channelId
  'masterChannelId' : '1106049142',
  'cbcPackNo' : '<%- cbcPackNo %>',
  'masterPackNo' : '<%- masterPackNo%>',
  'ENV' : '<%- ENV %>',



  'guideInfo' : '<%- apiHost%>supplier/v2.0/e/open/personalinfo',//司导个人页，司导信息


};
