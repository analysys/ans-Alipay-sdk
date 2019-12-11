let app = getApp()
let AnalysysAgent = my.AnalysysAgent
Page({
  onLoad() { },
  data: {},
  onShow() { },
  appStart: () => {
    let options = app.globalData.StartUpOption
    AnalysysAgent.appStart(options)
  },
});