
import { pathParams } from "../../store/pathParams"
import { eventAttribute } from '../../store/eventAttribute'


/**
 * 获取当前页面实例
 * @returns 
 */
export function getCurrentPage() {
  const pathArray = getCurrentPages()
  if (pathArray && pathArray.length) {
    return pathArray[pathArray.length - 1]
  }
  return {}
}

/**
 * 获取当前url路径
 * @param isQuery 是否获取参数
 * @returns 
 */
export function getPath(isQuery?: boolean): string {
  const self = getCurrentPage()
  const path = self.route
  if (isQuery) {
    const options = eventAttribute.pageview.query[self.$id]
    if (!options) return path
    const optionArr = Object.keys(options)
    // 组件完整 URL
    if (optionArr.length ) {
      let parameter = ''
      optionArr.forEach((o, i)=> {
        i && (parameter += '&')
        parameter += o + '=' + options[o]
      })
      return path + '?' + parameter
    }
  }
  return path
}


export function getReferer() {
  const pathArray = getCurrentPages()
  
  if (pathArray && pathArray.length) {
    const self = pathArray[pathArray.length - 2]
    if (self) {
      return self.route
    }
  }
  return pathParams.scene + ''
}