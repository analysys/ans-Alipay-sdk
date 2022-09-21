//app.js
let AnalysysEncryption = require('../../dist/AnalysysAgent_encryption.min.js') //加密板块，目前与sdk分开，为了缩小sdk的体积。需要的话单独引入。
AnalysysAgent.encrypt = AnalysysEncryption

import AnalysysAgent from  '../../dist/AnalysysAgent_Alipay_SDK.es6.min.js';

AnalysysAgent.init({
  appkey: '2d01eb66efd95d2c',
  uploadURL: 'https://uba-up.analysysdata.com',
  debugMode: 2,
  $appname: 'test_appname',
  encryptType: 1,
  $appid: 'test_app_id',
  autoPageViewDuration: true,
  autoShare: false,
  autoTrack: true
})

AnalysysAgent.onReady = function(config) {
  console.log('sdk已准备就绪')
}

AnalysysAgent.onBeforeStartUp = function (res) {
  console.log('开始发送预制启动事件')
  console.log(res)
}
AnalysysAgent.onAfterStartUp = function (res) {
  console.log('预制启动事件发送成功')
  console.log(res)
}

App({
  onLaunch: function(options) {
    
    // AnalysysAgent.identify('identy1111111', false)
    // AnalysysAgent.alias("1")
    // AnalysysAgent.pageProperty({'page1':'property1'})

    // AnalysysAgent.pageView('test', {username: 'hry'})

    if (options.shareTicket) {
      my.getShareInfo({
        shareTicket: options.shareTicket,
        success: function(res) {
          //解密res.encryptedDat
          // AnalysysAgent.appProperty({ 'openGId': 123256465 })
        },
      })
    }
  },
  onShow: function(options) {
    // console.log('APP---onShow--->', options)
    // AnalysysAgent.appStart(options)
    // if (options.shareTicket) {
    //   my.getShareInfo({
    //     shareTicket: options.shareTicket,
    //     success: function (res) {
    //       //解密res.encryptedDat
    //       console.log('获取成功--->', res)
    //       // AnalysysAgent.appProperty({ 'openGId': 123256465 })
    //     }
    //   })
    // }

    // AnalysysAgent.profileAppend('Movies', '霸王别姬')
    // let profies = {
    //   age: 20,
    //   integral: 200,
    // }
    // AnalysysAgent.profileIncrement(profies)
  },
  onHide: function () {
    console.log('onhide+2222')
  },
  globalData: {
    userInfo: null,
  },
})
