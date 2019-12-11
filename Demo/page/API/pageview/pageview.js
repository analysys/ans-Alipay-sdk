let app = getApp()
let AnalysysAgent = my.AnalysysAgent
Page({
  onLoad() { },
  data: {},
  onShow() {
  },
  pageview: () => {
    AnalysysAgent.pageView()
  },
  pageviewAndPageName: () => {
    AnalysysAgent.pageView('首页')
  },
  pageviewAndProperty: () => {
    AnalysysAgent.pageView('首页', {
      "commodityName": "iPhone",
      "commodityPrice": 8000
    })
  },

});
