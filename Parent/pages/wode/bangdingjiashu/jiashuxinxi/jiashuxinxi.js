var util = require("../../../../utils/util.js");
var app = getApp()

Page({
  data: {},
  formSubmit: function (e) {
    console.log(e.detail.value);

    if (e.detail.value.parent.length == 0){
      wx.showToast({
        title: '请输入身份!'
      })
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    } else if (e.detail.value.name.length == 0){
      wx.showToast({
        title: '请输入姓名',
      })
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    } else if (e.detail.value.tel.length == 0){
      wx.showToast({
        title: '请输入手机号码'
      })
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    } else if (e.detail.value.tel.length != 11){
      wx.showToast({
        title: '号码不足11位'
      })
      setTimeout(function () {
        wx.hideToast()
      }, 1000)
    }
    else {
      var data = {
        studentId: app.children.id,
        name: e.detail.value.name,
        phone: e.detail.value.tel,
        role: e.detail.value.parent,
        parent:1
      }
      console.log(data)
      wx.request({
        url: 'http://schoolbus.917tou.com/OrientBase/parentServices/baseInfo/parentInfos?studentId=' + app.children.id,
        data:data,
        method:'POST',
        success(res){
          console.log(res.data.data)
          wx.navigateBack({
            delta: 1,
            success() {
              wx.showToast({
                title: '添加成功',
              })
            }
          })
        },
        fail(err){
          console.log(error)
        }
      })
    }
  }
  })