var app = getApp()

Page({
  data: {
    currentTab: 0,
    route: ''
  },
  switchTab(e) {
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({
        currentTab: 0
      })
    } else if (tab === 'tabright') {
      this.setData({
        currentTab: 1
      })
    }
  },
  onLoad: function () {
    var that = this
    that.setData({
      route:app.route
    })
  }
  

})