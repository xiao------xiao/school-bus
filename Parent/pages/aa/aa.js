var app = getApp()
Page({
  navigateBack: function () {
    wx.navigateBack({
      delta: 1,
    })
  },
  onLoad:function(){
    // console.log(app.sites)
  }
})