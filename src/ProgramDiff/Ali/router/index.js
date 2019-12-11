import baseConfig from '../../../lib/baseConfig/index'
/**
 * 返回对应场景值
 * @returns {String} scene 场景值
 */

function getScene() {
    return baseConfig.system.scene || ''
}
/**
 * 返回包名
 * @returns {String} packageName 包名
 */
function getPackageName() {
    return ''
}

function getPath() {
    let pathArray = getCurrentPages()
    let path = pathArray[pathArray.length - 1].__proto__.route
    return path
}

function getTitle() {
    return ''
}

function getReferer() {
    let pathArray = getCurrentPages()
    if (pathArray.length > 1) {
        return '/' + pathArray[pathArray.length - 2].__proto__.route
    }
    return getScene()
}
export {
    getScene,
    getPackageName,
    getPath,
    getTitle,
    getReferer
}