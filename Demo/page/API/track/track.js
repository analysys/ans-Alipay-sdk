let app = getApp()
let AnalysysAgent = my.AnalysysAgent
Page({
  onLoad() { },
  data: {},
  onShow() {
  },
  track: () => {
    AnalysysAgent.track('back')
  },
  trackAndProperty: () => {
    AnalysysAgent.track('buy', {"type":"Phone",
    "name":"Apple iPhone8",
    "money":4000,
    "count":1})
  }
});
