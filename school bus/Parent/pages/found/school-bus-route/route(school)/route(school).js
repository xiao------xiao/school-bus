var app = getApp()
var sites = []

Page({
  data: {
    id: 0,
    startEnd: '',
    goTime: '',
    backTime: ''
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
    app.goTime = this.data.startEnd[this.data.id].goTime
    app.backTime = this.data.startEnd[this.data.id].backTime
    console.log('选择路线上的所有站点', app.sites)
    // console.log('选择路线上的发车时间（早）', app.goTime)
    // console.log('选择路线上的发车时间（晚）', app.backTime)
    this.setData({
      goTime: app.goTime,
      backTime: app.backTime
    })
  }
})