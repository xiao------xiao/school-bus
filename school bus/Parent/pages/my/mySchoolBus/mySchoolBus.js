// pages/my/mySchoolBus/mySchoolBus.js
const app = getApp()
Page({
  data:{
    currentTab:0,
    route: null
  },
  switchTab(e) {
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({ currentTab: 0 })
    } else if (tab === 'tabright') {
      this.setData({ currentTab: 1 })
    }
  },
  onLoad:function(){
   
    this.getAllRoutes()
  },
  getAllRoutes() {
    var that = this
    var studentId = app.chooseChildId ? app.chooseChildId : app.defaultchildId
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/parentServices/InstanceRoutes',
      data: {
        studentId: 5
      },
      method: 'GET',
      success(res) {
        app.remarks = res.data.data.list //所有线路的信息
        // console.log(app.remarks)
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