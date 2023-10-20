

import sendData from '../sendData'
import fillData from '../fillData'
import { lengthCheck, attrCheck } from '../../utils/verify/index'
import { getSuperProperty } from '../../store/core'
import { getPageProperty } from '../../store/pageProperty'
import { config } from '../../store/config'
import { getCurrentPage } from '../../utils/path'
import { eventAttribute } from '../../store/eventAttribute'

function pageView (pageName?: string, properties?: object) {

  const eventName = '$pageview'
  let userObj = {}, customProperties = {}
  
  if (lengthCheck(pageName)) {
    userObj['$title'] = pageName
    if (properties) {
      customProperties = attrCheck(properties, eventName)
    }
  }

  userObj = Object.assign({}, customProperties, userObj)
  
  // 获取上报数据模块
  const res = fillData(eventName)

  // 合并通用属性 // 绑定页面属性 // 绑定传入的属性
  res.xcontext = Object.assign({}, res.xcontext, getSuperProperty(), getPageProperty(), userObj)
  
  sendData(res)
}

// 自动触发pageview
export function autoPageView () {
  if (config.auto === true) {
    const self = getCurrentPage()
    const pageId = self.__wxExparserNodeId__
    // 防止多次自动触发pageView事件
    if (!eventAttribute.pageview.state[pageId]) {
      pageView()
      eventAttribute.pageview.state[pageId] = true
    }
  }
}

export default pageView