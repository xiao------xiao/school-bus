// pages/workbench/workbench.js
Page({
  data:{
    currentTab: 0
  },
  switchTab(e) {
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({ currentTab: 0 })
    } else if (tab === 'tabcenter') {
      this.setData({ currentTab: 1 })
    } else {
      this.setData({ currentTab: 2 })
    }
  },
  sweep(){
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  }
})