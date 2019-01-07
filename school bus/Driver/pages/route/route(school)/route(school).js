var app = getApp()
var sites = []

Page({
  data: {
    id: 0,
    startEnd: ''
  },
  onLoad: function (options) {
    this.setData({
      id: options.id,
      startEnd: app.remarks
    })
  }
})