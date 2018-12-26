var util = require("../../../../utils/util.js");
var app = getApp()

Page({
  data: {},
  formSubmit: function (e) {
    console.log(e.detail.value);

    if (e.detail.value.parent.length == 0){
      wx.showToast({
        title: '请输入身份!'
      })
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    } else if (e.detail.value.name.length == 0){
      wx.showToast({
        title: '请输入姓名!',
      })
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    } else if (e.detail.value.tel.length == 0){
      wx.showToast({
        title: '请输入手机号码!'
      })
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    }
    else {
      wx.request({
        url: 'http://127.0.0.1/miniApp/form.php',
        data: { parent: e.detail.value.parent, name: e.detail.value.name, tel: e.detail.value.tel },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }, // 设置请求的 header
        success: function (res) {
          console.log(res);
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          // success
        },
        fail: function (res) {
          console.log(res);
          // fail
        }
      })
    }
  }
  })