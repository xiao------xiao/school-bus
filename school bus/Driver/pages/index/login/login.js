var util = require("../../../utils/util.js");
const app = getApp()

var rck = 'rememberCheck';
var rui = 'rememberUserInfo';
var loginList = 'loginList';
var rbFlag = false;

Page({
  data: {
    loginBtnTxt: "登录",
    loginBtnBgBgColor: "#ff9900",
    btnLoading: false,
    disabled: false,
    inputUserName: '',
    inputPassword: '',
    image:''
  },
  onLoad: function (options) {
    // 判断是否记住密码
    try {
      rbFlag = wx.getStorageSync(rck)
      if (rbFlag) {
        this.setData({
          image: '../../images/ok.png'
        })
        var rif = wx.getStorageSync(rui);
        if (rui != null && rui != '') {
          var name = rif.name;
          var pswd = rif.pswd;
          console.log('记住账号和密码', name, pswd);
          this.setData({
            inputUserName: name,
            inputPassword: pswd,
          })
        }
      } else {
        this.setData({
          image: '../../images/no.png'
        })
      }

    } catch (e) {
      console.log(e)
    }
  },
  // 记住密码
  rembUser: function (e) {
    if (rbFlag) {
      this.setData({
        image: '../../images/no.png'
      })
      rbFlag = false;
      console.log('rbFlag', rbFlag);
      wx.setStorageSync(rck, rbFlag);
    } else {
      this.setData({
        image: '../../images/ok.png'
      })
      rbFlag = true;
      console.log('rbFlag', rbFlag);
      wx.setStorageSync(rck, rbFlag);
    }
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
      method: 'POST',
      success(res) {
        if (res.data.error == '用户名密码错误') {
          wx.showModal({
            title: '提示',
            showCancel: false,
            content: '用户名或密码有误，请重新输入'
          });
          that.setLoginData2()
        } else {
          // 记住密码,你也可以放到请求数据成功的里面，这样用户输错信息，就不会记住错误的密码
          // 跳转带有tab的界面使用：wx.switchTab({ url: "../home/home" });
          var obj = new Object();
          obj.name = param.username;
          obj.pswd = param.password;
          console.log('obj', obj);
          wx.setStorageSync(rui, obj);
          app.driverId = res.data.data.driverId //获取司机id
          console.log('司机id',app.driverId)
          setTimeout(function () {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 1500
            });
            wx.switchTab({
              url: '/pages/workbench/workbench',
            })
          }, 2000)
        }

      },
      fail(err) {
        console.log(err)
      }
    })
  }
})
