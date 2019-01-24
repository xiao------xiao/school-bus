var app = getApp()

Page({
  data: {
    name: '',
    busNo: '',
    roteRemark:'',
    time:''
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
    wx.request({
      url: 'http://192.168.3.78:9080/SmartSchoolBus/driverService/routeInstance/detail',
      data:app.driverId,
      method:'GET',
      success(res){
        app.route = res.data.data //司机路线
        that.setData({
          busNo: app.route.busNo,
          roteRemark: app.route.roteRemark,
          goTime: app.route.goTime,
          backTime: app.route.backTime
        })
      }
    })
  }
})