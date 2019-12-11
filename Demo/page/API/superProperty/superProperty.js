let app = getApp()
let AnalysysAgent = my.AnalysysAgent
Page({
  onLoad() {},
  data: {
    property: '',
    properties: {}
  },
  onShow() {},
  registerSuperProperty: () => {
    AnalysysAgent.registerSuperProperty("member", "VIP")
  },
  registerSuperProperties: () => {
    AnalysysAgent.registerSuperProperties({
      "platform": "TX",
      "age": "20",
      "member": "VIP",
      "user": "xiaoming"
    })
  },
  unRegisterSuperProperty: () => {
    AnalysysAgent.unRegisterSuperProperty("age")
  },
  clearSuperProperties: () => {
    AnalysysAgent.clearSuperProperties()
  },
  getSuperProperty() {
    let property = AnalysysAgent.getSuperProperty("member")
    this.setData({
      property: property
    })
  },
  getSuperProperties() {
    let properties = AnalysysAgent.getSuperProperties()
    this.setData({
      properties: properties
    })
  }
});