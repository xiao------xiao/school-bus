const app = getApp()
var arr = [], index,name

Page({
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/student',
      data: that.data.listData,
      method: 'GET',
      success: function (res) {
        arr = res.data.data.list
        console.log(arr)
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].phone == app.userphone) {
            index = i
          }
        }
        // name= arr[index].name
        // app.name=name
        // console.log(app.name)
        app.children={
          id: arr[index].id,
          name: arr[index].name,
          gender: arr[index].gender,
          classname: arr[index].classname,
          parent: arr[index].parent,
          phone: arr[index].phone,
          homeAddress: arr[index].homeAddress, 
          schoolId: arr[index].schoolId,
          schoolname: arr[index].school.name,
        }
        // console.log(app.children)
      },
      fail: function (res) {
        console.log('submit fail');
      }
    })
  }
})
