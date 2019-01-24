var app = getApp()
var parent

Page({
  data: {
    listData: ''
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/parentServices/baseInfo/parentInfos',
      data: {
        studentId: app.globalData.choosechild.id,
        userId: app.globalData.loginInfo.parentId
      },
      method: 'GET',
      success(res) {
        parent = res.data.data
        // console.log(parent)
        that.setData({
          listData: parent
        })
      }
    })
  }
})