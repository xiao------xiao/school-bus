// pages/wode/qiehuanhaizi/qiehuanhaizi.js
var app = getApp()

Page({
  data: {
    children: '',

  },
  onLoad: function () {
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
        app.chooseChildId = app.children[i].id  //选中小孩的id
        app.chooseChildgender = app.children[i].gender //选中小孩的性别
        app.chooseChildclassname = app.children[i].classname //选中小孩的班级
        app.chooseChildhomeAddress = app.children[i].homeAddress //选中小孩的家庭地址
        app.chooseChildphone = app.children[i].phone //选中小孩的手机号码
        app.chooseChildschoolId = app.children[i].schoolId //选中小孩的学校id
        console.log("选中小孩的信息", app.chooseChild)
      }
    }
  }
})