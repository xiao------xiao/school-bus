const app = getApp()
var arr = [], index

Page({
  data: {
    name: "",
    gender: "",
    classname: "",
    phone: "",
    homeAddress: "",
    schoolname: '',
    schoolId:''
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      name: app.globalData.choosechild.name,
      gender: app.globalData.choosechild.gender,
      classname: app.globalData.choosechild.classname,
      phone: app.globalData.choosechild.phone,
      homeAddress: app.globalData.choosechild.homeAddress,
      schoolId: app.globalData.choosechild.schoolId,
    })
    // console.log(that.data.schoolId)
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/schools/' + that.data.schoolId,
      method:'GET',
      success(res){
        // console.log(res)
        that.setData({
          schoolname: res.data.data.name ? res.data.data.name : ''
        })
      },
      fail(err){
        console.log(err)
      }
    })
    if(that.data.gender==0){
      that.setData({
        gender:'女'
      })
    }else{
      that.setData({
        gender: '男'
      })
    }
  }
})