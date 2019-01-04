// pages/shouye/shouye.js
var app = getApp()
Page({
  onLoad: function () {
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/parents/' + app.parentId,
      method: 'GET',
      success(res) {
        // console.log(res.data.data)
        app.children = res.data.data.children //所有小孩的信息
        app.defaultchild = app.children[0] //默认小孩的信息
        app.defaultchildId = app.defaultchild.id //默认小孩的id
        app.defaultchildName = app.defaultchild.name //默认小孩的姓名
        app.defaultchildgender = app.defaultchild.gender //默认小孩的性别
        app.defaultchildclassname = app.defaultchild.classname //默认小孩的班级
        app.defaultchildhomeAddress = app.defaultchild.homeAddress //默认小孩的家庭地址
        app.defaultchildphone = app.defaultchild.phone //默认小孩的手机号码
        app.defaultchildschoolId = app.defaultchild.schoolId //默认小孩的学校id
        // console.log(app.children)
        // console.log("默认小孩的信息",app.defaultchildName, app.defaultchildId, app.defaultchildgender, app.defaultchildclassname, app.defaultchildhomeAddress, app.defaultchildphone)
      },
      fail(err) {
        console.log(err)
      }
    })
  }
})