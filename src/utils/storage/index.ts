
import { globalWindow } from '../../constant/index'
import { getCore } from '../../store/core'

export const setStorage = function (key = 'FZ_STROAGE', data: any = getCore()) {
  globalWindow.setStorageSync({ key: key, data: data })
}

export const getStorage = function (key = 'FZ_STROAGE') {
  const res = globalWindow.getStorageSync({ key: key })
  return res.data
}