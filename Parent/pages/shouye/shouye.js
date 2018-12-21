//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function (options) {
    let user = app.searchWord
    console.log(user)
  }
})
