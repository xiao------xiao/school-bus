var app = getApp()
var locationInfoLongitude, locationInfoLatitude
const QQMapWX = require('../../../../utils/qqmap-wx-jssdk.min.js');
const wxMap = new QQMapWX({
  key: '3RCBZ-OXGKF-FGDJZ-JJQ76-PHRIH-2KFJZ' // 必填
})


Page({
  data: {
    map_width: 380,
    map_height: 380,
    longitude: '',
    latitude: '',
    address: ''
  },
  // show current position
  onLoad: function () {
    var that = this;
    // 获取定位，并把位置标示出来
    app.getLocationInfo(function (locationInfo) {
      console.log('map', locationInfo);
      locationInfoLongitude = locationInfo.longitude
      locationInfoLatitude = locationInfo.latitude
      that.setData({
        longitude: locationInfo.longitude,
        latitude: locationInfo.latitude,
        markers: [
          {
            id: 0,
            iconPath: "../../../images/ic_position.png",
            longitude: locationInfo.longitude,
            latitude: locationInfo.latitude,
            width: 30,
            height: 30
          }
        ]
      })
    })
    //set the width and height
    // 动态设置map的宽和高
    wx.getSystemInfo({
      success: function (res) {
        console.log('getSystemInfo');
        console.log(res.windowWidth);
        that.setData({
          map_width: res.windowWidth,
          map_height: res.windowWidth,
          controls: [{
            id: 1,
            iconPath: '../../../images/ic_location.png',
            position: {
              left: res.windowWidth / 2 - 8,
              top: res.windowWidth / 2 - 16,
              width: 30,
              height: 30
            },
            clickable: true
          }]
        })
      }
    })

  },
  regionchange(e) {
    // 地图发生变化的时候，获取中间点，也就是用户选择的位置
    if (e.type == 'end') {
      var that = this;
      this.mapCtx = wx.createMapContext("map4select");
      this.mapCtx.getCenterLocation({
        success: function (res) {
          that.setData({
            longitude: res.longitude,
            latitude: res.latitude,
          })
        }
      })
    }
  },
  markertap(e) {
    console.log(e)
  },
  location: function () {
    this.setData({
      longitude: locationInfoLongitude,
      latitude: locationInfoLatitude
    })
  },

  onShow() {
    /**经纬度逆解析 */
    this.reverseGeocoder()
  },
  /**经纬度逆解析 */
  reverseGeocoder() {
    const that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wxMap.reverseGeocoder({
          location: {
            latitude: latitude,
            longitude: longitude
          },
          success: function (res) {
            // console.log(res.result)
            var address = res.result.address
            console.log(address);
            that.setData({
              address,
            })
          },
        });
      },
      fail(res) {
        console.log(res)
      }
    })
  }
})