function sendRequest (url, method, data = {}, header = {}) {
  var promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: header,
      success: function (data) {
        //做一些统一处理操作，例如401验证

        //resolve用于具体调用中
        resolve(data);
      },
      fail: function (data) {
        reject(data);
      }
    })
  })

  return promise
}

//导入
module.exports = {
  sendRequest: sendRequest
}
