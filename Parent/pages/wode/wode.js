const app = getApp()
Page({
  data: {
    routers: [
      {
        name: '我的校车',
        url: '/pages/aa/aa',
        icon: '../images/icon_schoolbus.png',
        code: '10'
      },
      {
        name: '我的账号',
        url: '/pages/aa/aa',
        icon: '../images/icon_account.png',
        code: '11'
      },
      {
        name: '我要请假',
        url: '/pages/aa/aa',
        icon: '../images/icon_car.png',
        code: '10'
      },
      {
        name: '孩子资料',
        url: '/pages/aa/aa',
        icon: '../images/icon_data.png',
        code: '11'
      },
      {
        name: '绑定家属',
        url: '/pages/aa/aa',
        icon: '../images/icon_members.png',
        code: '10'
      },
      {
        name: '联系客服',
        url: '/pages/aa/aa',
        icon: '../images/icon_servicer.png',
        code: '11'
      },
      {
        name: '意见反馈',
        url: '/pages/aa/aa',
        icon: '../images/icon_feedback.png',
        code: '10'
      },
      {
        name: '接送记录',
        url: '/pages/aa/aa',
        icon: '../images/icon_send.png',
        code: '11'
      },
      {
        name: '设置',
        url: '/pages/aa/aa',
        icon: '../images/icon_setting.png',
        code: '10'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})  
