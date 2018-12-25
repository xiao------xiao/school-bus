const app = getApp()
var arr = [], index,name

Page({
  onLoad: function (options) {
    let user = app.searchWord
    var that = this;
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/student',
      data: that.data.listData,
      method: 'GET',
      success: function (res) {
        arr = res.data.data.list
        console.log(arr)
        for (var i = 0; i < arr.length; i++) {
          if (user == arr[i].phone) {
            index = i
          }
        }
        name= arr[index].name
        app.name=name
        console.log(app.name)
      },
      fail: function (res) {
        console.log('submit fail');
      }
    })
  }
})
