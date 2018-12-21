const app = getApp()
var arr = [], index

Page({
  data: {
    name:'',
    routers: [
      {
        name: '我的校车',
        url: '/pages/wode/wodexiaoche/wodexiaoche',
        icon: '../images/icon_schoolbus.png',
        code: '10'
      },
      {
        name: '我的账号',
        url: '/pages/wode/wodezhanghao/wodezhanghao',
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
        url: '/pages/wode/haiziziliao/haiziziliao',
        icon: '../images/icon_data.png',
        code: '11'
      },
      {
        name: '绑定家属',
        url: '/pages/wode/bangdingjiashu/bangdingjiashu',
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
  onLoad: function (options) {
    let user = app.searchWord
    var that = this;
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/student',
      data: that.data.listData,
      method: 'GET',
      success: function (res) {
        arr = res.data.data.list
        console.log(arr)
        for(var i=0;i<arr.length;i++){
          if (user == arr[i].phone){
            index = i
          }
        }
        that.setData({
          name: arr[index].name
        })
      },
      fail: function (res) {
        console.log('submit fail');
      }
    })
  }
})  
