const app = getApp()

Page({
  data: {
    routers: [{
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '10',
        pic: '../images/login_bg.png',
        num: 520
      },
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '11',
        pic: '../images/login_bg.png',
        num: 520
      },
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '10',
        pic: '../images/login_bg.png',
        num: 520
      },
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '11',
        pic: '../images/login_bg.png',
        num: 520
      },
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '10',
        pic: '../images/login_bg.png',
        num: 520
      },
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '11',
        pic: '../images/login_bg.png',
        num: 520
      },
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '10',
        pic: '../images/login_bg.png',
        num: 520
      },
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '11',
        pic: '../images/login_bg.png',
        num: 520
      },
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '10',
        pic: '../images/login_bg.png',
        num: 520
      }
    ]
  },
  onLoad: function() {
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/chiefs/' + app.chiefId,
      method: 'GET',
      success(res) {
        app.chiefName = res.data.data.name //获取乘务长姓名
        // console.log(app.chiefName)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  help: function() {
    wx.showModal({
      title: '热线电话',
      content: '拨打110热线',
      success(res){
        if (res.confirm) {
          console.log('用户点击确定')
        } else {
          console.log('用户点击取消')
        }
      },
      fail(err){
        console.log(err)
      }
    })
  }
})