// pages/wode/wode.js
var app=getApp()

Page({
  data:{
    name:''
  },
  onLoad:function(){
    this.setData({
      name: app.chiefName ? app.chiefName:'读取错误'
    })
  }
})