var util = require("../../../utils/util.js");
const app = getApp()

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
    // app.userphone = e.detail.value.username; // 用户手机号码
    // app.userpassword = e.detail.value.password;// 用户密码
    // console.log(app.userphone, app.userpassword)
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
    } else if (password.length < 6 || password.length > 20) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '密码长度为6-20位字符'
      });
      return false;
    } else {
      return true;
    }
  },
  checkUserInfo: function (param) {
    var that = this;
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/login?username=' + param.username + '&password=' + param.password,
      method:'POST',
      success(res){
        if (res.data.error =='用户名密码错误'){
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '用户名或密码有误，请重新输入'
          });
          that.setLoginData2()
        }else{
          app.chiefId = res.data.data.chiefId //获取乘务长id
          console.log(app.chiefId)
          setTimeout(function () {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 1500
            });
            wx.switchTab({
              url: '/pages/shouye/shouye',
            })
          }, 2000)
        }
        
      },
      fail(err){
        console.log(err)
      }
    })
  }
})
