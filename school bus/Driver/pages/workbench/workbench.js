var app = getApp()

Page({
  data: {
    name: '',
    licensePlate: '123456789'
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/drivers/' + app.driverId,
      method: 'GET',
      success(res) {
        app.driverName = res.data.data.name //获取司机姓名
        console.log('司机姓名',app.driverName)
        that.setData({
          name: app.driverName
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})