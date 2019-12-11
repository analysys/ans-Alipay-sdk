let app = getApp()
let AnalysysAgent = my.AnalysysAgent
Page({
  onLoad() { },
  data: {
    distinctId: ''
  },
  onShow() { },
  alias() {
    AnalysysAgent.alias("zhangsan")
  },
  identify() {
    AnalysysAgent.identify("fangke009901")
  },
  getDistinctId() {
    let distinctId = AnalysysAgent.getDistinctId()
    this.setData({
      distinctId: distinctId
    })
  }
});