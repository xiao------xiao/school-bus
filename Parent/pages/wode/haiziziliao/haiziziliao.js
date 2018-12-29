const app = getApp()
var arr=[],index

Page({
  data: {
    name: "",
    gender: "",
    classname: "",
    phone: "",
    homeAddress: "",
    schoolname:''
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      name: app.children.name,
      gender: app.children.gender == 1 ? '男' : '女',
      classname: app.children.classname,
      phone: app.children.phone,
      homeAddress: app.children.homeAddress,
      schoolname: app.children.schoolname,
    })
  }
})