// pages/my/mySchoolBus/mySchoolBus.js
Page({
  data:{
    currentTab:0
  },
  switchTab(e) {
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({ currentTab: 0 })
    } else if (tab === 'tabright') {
      this.setData({ currentTab: 1 })
    }
  }
})