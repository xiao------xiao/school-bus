const app = getApp()

Page({
  data: {
    routers: [
      {
        name: '南京到非你不可的覆盖面积的方式考虑过南京到非你不可的覆盖面积的方式考虑过',
        url: '/pages/aa/aa',
        icon: '../images/icon_browse.png',
        code: '10',
        pic:'../images/login_bg.png',
        num:520
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
  onLoad:function(){
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/parentServices/InstanceRoutes',
      data:{
        studentId:5
      },
      method:'GET',
      success(res){
        app.remarks = res.data.data.list
        console.log(app.remarks)
      },
      fail(err){
        console.log(err)
      }
    })
  }
})  
