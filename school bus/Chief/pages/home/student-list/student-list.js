// pages/home/student-list/student-list.js
Page({
  data: {
    currentTab: 0,
    img:'../../images/icon_comein1.png'
  },
  switchTab() {
    if (this.data.currentTab == 0) {
      this.setData({
        currentTab:1,
        img:'../../images/icon_comein2.png'
      })
    }else{
      this.setData({
        currentTab: 0,
        img:'../../images/icon_comein1.png'
      })
    }
  }
})