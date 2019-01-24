// pages/my/mySchoolBus/myBusStation/myBusStation.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stationIndex: 0,
    stations: null,
    routeId: 0,
    stationId: 0,
    stationName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var stations = app.remarks[options.stationIndex].stations
    var routeId = app.remarks[options.stationIndex].id
    console.log("stations ==" + stations)
    this.setData({
      stationIndex: options.stationIndex,
      stations: stations,
      routeId: routeId
    })
    
  },
  pressStation: function (event) {

   
    console.log("点击站点" + event.currentTarget.id);

    var stationName = this.data.stations[event.currentTarget.dataset.index].name;

    this.setData({
      stationId:event.currentTarget.id,
      stationName:stationName
    })
  
    //  获取预定路线
    // http://schoolbus.917tou.com/OrientBase//parentServices/orders/4
    
  },
  submitOnBusStation(){

      console.log("提交站点")
    var that = this;
    var userid = app.globalData.loginInfo.parentId
    console.log("userbase" + userid )
    var childModel = app.globalData.loginInfo.children[app.globalData.childIndex]

    console.log("childid" + childModel.id)
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/parentServices/orders',
      data: {
        userId: 6,
        studengId: 4,
        routeId: this.data.routeId,
        beginDate: "2019-01-01",
        endDate: "2020-01-23",
        orderRule: "1,2,3,4,5",
        orderStatus:"2",  //必须要传的参数 
        stationId: this.data.stationId
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        //取数组里的最后一个对象
        if (res.data.status == 200) {
          console.log("预定路线成功")

          var pages = getCurrentPages();
          var curpage = pages[pages.length -1];
          var prepage = pages[pages.length -2];
          var routes = [];

          var routes = prepage.data.selectRoutes;
          routes.push(this.data.routeId)
          
          prepage.setData({
            selectRoute: prepage.data.selectRoute + this.data.routeId
          })
          wx.navigateBack({
            
          })
        } else {
          console.log("预定路线失败")

        }

      }

    })

  }

})