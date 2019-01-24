// pages/shouye/shouye.js
var app = getApp()
Page({
  onLoad: function () {
    app.globalData.choosechild = app.globalData.loginInfo.children[0];
    console.log("默认小孩的信息", app.globalData.choosechild)
      }
})