var util = require("../../../utils/util.js");
const app = getApp()
var arr = []
var index

Page({
  data: {
    loginBtnTxt: "登录",
    loginBtnBgBgColor: "#ff9900",
    btnLoading: false,
    disabled: false,
    inputUserName: '',
    inputPassword: '',
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/student',
      data: that.data.listData,
      method: 'GET',
      success: function (res) {
        var data = res.data.data.list
        for (var i = 0; i < data.length; i++) {
          arr.push(data[i].phone)
        }
        console.log(arr)
      },
      fail: function (res) {
        console.log('submit fail');
      }
    })
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  formSubmit: function (e) {
    var param = e.detail.value;
    this.mysubmit(param);
  },
  mysubmit: function (param) {
    var flag = this.checkUserName(param) && this.checkPassword(param)
    if (flag) {
      this.setLoginData1();
      this.checkUserInfo(param);
    }
  },
  setLoginData1: function () {
    this.setData({
      loginBtnTxt: "登录中",
      disabled: !this.data.disabled,
      loginBtnBgBgColor: "#999",
      btnLoading: !this.data.btnLoading
    });
  },
  setLoginData2: function () {
    this.setData({
      loginBtnTxt: "登录",
      disabled: !this.data.disabled,
      loginBtnBgBgColor: "#ff9900",
      btnLoading: !this.data.btnLoading
    });
  },
  checkUserName: function (param) {
    var email = util.regexConfig().email;
    var phone = util.regexConfig().phone;
    var inputUserName = param.username.trim();
    if (email.test(inputUserName) || phone.test(inputUserName)) {
      return true;
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入正确的手机号码'
      });
      return false;
    }
  },
  checkPassword: function (param) {
    var userName = param.username.trim();
    var password = param.password.trim();
    if (password.length <= 0) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入密码'
      });
      return false;
    } else {
      return true;
    }
  },
  checkUserInfo: function (param) {
    var username = param.username.trim();
    var password = param.password.trim();
    var that = this;
    index = arr.indexOf(username)+1 
    if (index && password == username) {
      setTimeout(function () {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1500
        });
        that.setLoginData2();
        that.switchTab(param);
        that.search(param);
      }, 2000);
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '用户名或密码有误，请重新输入'
      });
      this.setLoginData2();
    }
  },
  search: function (param) {
    let user = arr[index-1];
    app.searchWord = user;
  },
  switchTab: function (param) {
    getApp().globaIDdata = param
    wx.switchTab({
      url: '/pages/shouye/shouye'
    })
  }
})
