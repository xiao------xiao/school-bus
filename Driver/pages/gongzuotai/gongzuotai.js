var app = getApp()

Page({
  data: {
    name: '彭师傅',
    licensePlate: '123456789'
  },
  onLoad: function() {
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/drivers/' + app.driverId,
      method: 'GET',
      success(res) {
        app.driverName = res.data.data.name
        // console.log(app.driverName)
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})