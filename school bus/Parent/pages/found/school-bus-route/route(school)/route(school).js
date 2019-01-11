var app = getApp()
var sites = []

Page({
  data: {
    id: 0,
    startEnd: ''
  },
  wyyd: function () {
    wx.navigateTo({
      url: '/pages/found/school-bus-route/route(school)/online-booking/online-booking',
    })
  },
  onLoad: function (options) {
    this.setData({
      id: options.id,
      startEnd: app.remarks
    })
    app.sites = this.data.startEnd[this.data.id].stations //选择的路线上的所有站点
    console.log('选择路线上的所有站点',app.sites)

  }
})