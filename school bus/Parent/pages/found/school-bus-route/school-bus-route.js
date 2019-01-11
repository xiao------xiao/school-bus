var app = getApp()

Page({
  data: {
    currentTab: 0,
    route: ''
  },
  switchTab(e) {
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({
        currentTab: 0
      })
    } else if (tab === 'tabright') {
      this.setData({
        currentTab: 1
      })
    }
  },
  onLoad: function() {
    var that = this
    var studentId = app.chooseChildId ? app.chooseChildId : app.defaultchildId
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/parentServices/InstanceRoutes',
      data: {
        studentId: studentId
      },
      method: 'GET',
      success(res) {
        app.remarks = res.data.data.list //所有线路的信息
        console.log('所有线路的信息',app.remarks)
        that.setData({
          route: app.remarks
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})