let app = getApp()
let AnalysysAgent = my.AnalysysAgent
Page({
  onLoad(options) {
      AnalysysAgent.pageView('分享',options)
   },
  data: {},
  onShow() {
   
  },
  onShareAppMessage() {
    let shareObj = AnalysysAgent.share({
      title: '分享 View 组件',
      desc: 'View 组件很通用'

    })
    my.alert({
      title: JSON.stringify(shareObj),
    });
    return shareObj
  },
  share: () => {
    my.showSharePanel();
  }
});