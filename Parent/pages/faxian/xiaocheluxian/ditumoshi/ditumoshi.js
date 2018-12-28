// 引入SDK核心类
var QQMapWX = require('../../../../utils/qqmap-wx-jssdk.min.js');
var qqmap = new QQMapWX({
  //在腾讯地图开放平台申请密钥 http://lbs.qq.com/mykey.html
  key: '3RCBZ-OXGKF-FGDJZ-JJQ76-PHRIH-2KFJZ'
});
Page({
  data: {
    myLatitude: "",
    myLongitude: "",
    myAddress: ""
  },
  onLoad: function () {
    var that = this
    //用微信提供的api获取经纬度
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        that.setData({ myLatitude: res.latitude, myLongitude: res.longitude })
        //用腾讯地图的api，根据经纬度获取城市
        qqmap.reverseGeocoder({
          location: {
            latitude: that.data.myLatitude,
            longitude: that.data.myLongitude
          },
          success: function (res) {
            console.log(res)
            var a = res.result.address_component
            //获取市和区（区可能为空）
            that.setData({ myAddress: a.city + a.district })
            //控制台输出结果
            console.log(that.data.myAddress)
          }
        })
      }
    })
  }
})
