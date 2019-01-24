// pages/wode/qiehuanhaizi/qiehuanhaizi.js
var app = getApp()

Page({
  data: {
    children: '',
    childName:'',
    icon:{
      boy:'../../images/icon_boy.png',
      girl:'../../images/icon_girl.png'
    },
    selectedIndex:0
  },
  onLoad: function () {
    var loginResult = app.globalData.loginInfo;
    this.setData({
      children: loginResult.children,
    })
  },
  formSubmit: function (e) {
    this.data.childName = e.detail.value.name
    wx.navigateBack({
      delta: 1
    })
    
    for (var i = 0; i < app.globalData.loginInfo.children.length;i++){
      var childModel = app.globalData.loginInfo.children[i]
      if (this.data.childName == childModel.name){
        app.globalData.childIndex = i;
        app.globalData.choosechild = childModel;
        console.log("选中小孩的index =="+ i);
      }
    }
  }
})