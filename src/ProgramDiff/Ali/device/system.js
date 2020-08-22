function systemPromise () {
    let promist = new Promise(function (resolve, reject) {
        my.getSystemInfo({
            success: function (res) {
                // 因为 支付宝小程序的获取系统属性的差异，获取的系统属性需要重新组装，和微信保持一致，
                // 不然后面的公共方法填充数据错误。
                let AlipayRes = {}
                Object.assign(AlipayRes, res);
                // 微信的 system 是 操作系统及版本 ，支付宝 system 只是 版本
                AlipayRes.system = res.platform + " " + res.system;
                resolve(AlipayRes)
            },
            fail: function (res) {
                reject(res)
            }
        })
    }).catch((e) => {

    })
    return promist
}

export {
    systemPromise
}




