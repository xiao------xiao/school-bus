var requestQ = require('../../utils/request.js')
const app = getApp()

Page({
  data: {
    routers: [
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
  onLoad: function () {
    requestQ.sendRequest('http://schoolbus.917tou.com/OrientBase/drivers/' + app.driverId, 'GET')
      .then(function (res) {
        app.driverName = res.data.data.name//获取司机姓名
        // console.log(app.driverName)
      }, function (err) {
        console.log(err);
      })
  }
})  
