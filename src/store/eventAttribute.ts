

export const eventAttribute = {
  startup: {
    state: false, // startup事件上报状态
    xwhen: 0
  },
  pageview: {
    xwhen: 0,
    state: {  // 当前页面pageview上报状态
      
    },
    query: {} // 记录当前页面的url参数
  },

  // 记录自定义时间持续时长
  timeEvent: {}
}