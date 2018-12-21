const app = getApp()
var arr = [], index

Page({
  data: {
    name: "",
    gender: "",
    classname: "",
    phone: "",
    homeAddress: "",
    school:''
  },
  onLoad: function (options) {
    let user = app.searchWord
    var that = this;
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/student',
      data: that.data.listData,
      method: 'GET',
      success: function (res) {
        arr = res.data.data.list
        for (var i = 0; i < arr.length; i++) {
          if (user == arr[i].phone) {
            index = i
          }
        }
        that.setData({
          name: arr[index].name,
          gender: arr[index].gender,
          classname: arr[index].classname,
          phone: arr[index].phone,
          homeAddress: arr[index].homeAddress,
        })
        if (that.data.gender==1){
          that.setData({
            gender: '男'
          })
        }else{
          that.setData({
            gender: '女'
          })
        }
      },
      fail: function (res) {
        console.log('submit fail');
      }
    })
  }
})