const app = getApp()

Page({
  data: {
    name: '',
    index: 0,
    routers: [
      {
        name: '我的校车',
        url: '/pages/my/mySchoolBus/mySchoolBus',
        icon: '../images/icon_schoolbus.png',
        code: '10'
      },
      {
        name: '我的账号',
        url: '/pages/my/myAccount/myAccount',
        icon: '../images/icon_account.png',
        code: '11'
      },
      {
        name: '我要请假',
        url: '/pages/my/askForLeave/askForLeave',
        icon: '../images/icon_car.png',
        code: '10'
      },
      {
        name: '孩子资料',
        url: '/pages/my/childInformation/childInformation',
        icon: '../images/icon_data.png',
        code: '11'
      },
      {
        name: '绑定家属',
        url: '/pages/my/familyMembers/familyMembers',
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
        url: '/pages/my/feedback/feedback',
        icon: '../images/icon_feedback.png',
        code: '10'
      },
      {
        name: '接送记录',
        url: '/pages/my/pickup-record/pickup-record',
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
  onLoad: function (options) {
  },
  onShow: function () {
    this.setData({
      name: app.chooseChildName ? app.chooseChildName : app.defaultchildName
    })
  }
})  
