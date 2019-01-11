// pages/wode/qiehuanhaizi/qiehuanhaizi.js
var app = getApp()

Page({
  data: {
    children: '',
    icon:{
      boy:'../../images/icon_boy.png',
      girl:'../../images/icon_girl.png'
    }
  },
  onLoad: function () {
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/parents/' + app.parentId,
      method: 'GET',
      success(res) {
        app.children = res.data.data.children //所有小孩的信息
        console.log('所有小孩的信息', app.children)
      },
      fail(err) {
        console.log(err)
      }
    })
    this.setData({
      children: app.children
    })
  },
  formSubmit: function (e) {
    app.chooseChildName = e.detail.value.name
    // console.log(app.chooseChildName)
    wx.navigateBack({
      delta: 1
    })
    for (var i = 0; i < app.children.length;i++){
      if (app.children[i].name == app.chooseChildName){
        app.chooseChild = app.children[i]   //选中小孩的信息
        app.chooseChildId = app.chooseChild.id  //选中小孩的id
        app.chooseChildgender = app.chooseChild.gender //选中小孩的性别
        app.chooseChildclassname = app.chooseChild.classname //选中小孩的班级
        app.chooseChildhomeAddress = app.chooseChild.homeAddress //选中小孩的家庭地址
        app.chooseChildphone = app.chooseChild.phone //选中小孩的手机号码
        app.chooseChildschoolId = app.chooseChild.schoolId //选中小孩的学校id
        console.log("选中小孩的信息", app.chooseChild)
      }
    }
  }
})