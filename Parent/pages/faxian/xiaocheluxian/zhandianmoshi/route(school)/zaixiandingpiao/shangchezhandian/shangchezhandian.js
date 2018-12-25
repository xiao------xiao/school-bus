let app = getApp()
var sites=[]

Page({
  data:{
    site: ''
  },
  onLoad:function(){
    sites=app.sites
    console.log(sites)
    this.setData({
      site: sites
    })
  },
  selectSite:function(e){
    console.log(this)
  }
})