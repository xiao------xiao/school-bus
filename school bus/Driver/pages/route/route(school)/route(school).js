var app = getApp()
var sites = []

Page({
  data: {
    roteRemark:'',
    stations: '',
    goTime:'',
    backTime:''
  },
  onLoad: function (options) {
    this.setData({
      roteRemark: app.route.roteRemark,
      stations: app.route.stations,
      goTime: app.route.goTime,
      backTime: app.route.backTime
    })
  }
})