// pages/wode/woyaoqingjia/woyaoqingjia.js
Page({
  bindDateChangestart: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datestart: e.detail.value
    })
  },
  bindDateChangeend: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateend: e.detail.value
    })
  }
})