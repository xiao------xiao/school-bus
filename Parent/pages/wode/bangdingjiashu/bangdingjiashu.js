var app = getApp()
var parent

Page({
  data: {
    listData: ''
  },
  onLoad:function(){
    var that = this
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/parentServices/baseInfo/parentInfos',
      data:{
        studentId: app.children.id
      },
      method:'GET',
      success(res){
        parent = res.data.data
        // console.log(parent)
        that.setData({
          listData: parent
        })
      }
    })
  }
})