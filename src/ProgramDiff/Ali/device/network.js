function netWorkPromise () {
    let promist = new Promise(function (resolve, reject) {
        my.getNetworkType({
            success: function (res) {
                resolve(res)
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
    netWorkPromise
}




