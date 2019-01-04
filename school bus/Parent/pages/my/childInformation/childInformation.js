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
      name: app.chooseChildName ? app.chooseChildName : app.defaultchildName,
      gender: app.chooseChildgender ? app.chooseChildgender : app.defaultchildgender,
      classname: app.chooseChildclassname ? app.chooseChildclassname : app.defaultchildclassname,
      phone: app.chooseChildphone ? app.chooseChildphone : app.defaultchildphone,
      homeAddress: app.chooseChildhomeAddress ? app.chooseChildhomeAddress : app.defaultchildhomeAddress,
      schoolId: app.chooseChildschoolId ? app.chooseChildschoolId : app.defaultchildschoolId,
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