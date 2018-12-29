var app=getApp()
var sites=[]

Page({
  data:{
    id: 0,
    startEnd: '',
    site:''
  },
  wyyd:function(){
    wx.navigateTo({
      url: '/pages/faxian/xiaocheluxian/zhandianmoshi/route(school)/zaixiandingpiao/zaixiandingpiao',
    })
  },
  onLoad: function (options){
    this.setData({
      id: options.id,
      startEnd: app.remarks,
      site: app.remarks
    })
    app.sites = this.data.site[this.data.id].stations
    console.log(app.sites)

  }
})