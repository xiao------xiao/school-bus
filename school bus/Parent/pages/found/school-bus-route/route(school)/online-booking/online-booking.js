const app = getApp()
var util = require('../../../../../utils/util.js');

Page({
  data: {
    siteid: '',
    site: '',
    name: '',
    datestart: '',
    dateend: '',
    week: [
      {
        date: 'Monday',
        time: '星期一',
        checked: 'true',
        select: 1
      },
      {
        date: 'Tuesday',
        time: '星期二',
        select: 2
      },
      {
        date: 'Wednesday',
        time: '星期三',
        select: 3
      },
      {
        date: 'Thursday',
        time: '星期四',
        select: 4
      },
      {
        date: 'Friday',
        time: '星期五',
        select: 5
      },
      {
        date: 'Saturday',
        time: '星期六',
        select: 6
      },
      {
        date: 'Sunny',
        time: '星期七',
        select: 7
      }
    ],
    catalogSelect: 0
  },
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      name: app.chooseChildName ? app.chooseChildName : app.defaultchildName,
      site: options.site ? options.site : '请选择上车站点',
      siteid: options.siteid ? options.siteid : '',
      datestart: time,
      dateend: time
    })

  },
  bindDateChangestart: function (e) {
    // console.log(e.detail.value)
    this.setData({
      datestart: e.detail.value,
      dateend: e.detail.value
    })
  },
  bindDateChangeend: function (e) {
    // console.log(e.detail.value)
    this.setData({
      dateend: e.detail.value
    })
  },
  formSubmit: function (e) {
    var that = this
    // console.log(e.detail.value)
    if (e.detail.value.site == '请选择上车站点') {
      wx.showToast({
        title: '请选择站点!'
      })
    } else {
      for (var i = 0; i < e.detail.value.date.length; i++) {//星期转换成数字
        if (e.detail.value.date[i] == '星期一') {
          e.detail.value.date[i] = 1
        } else if (e.detail.value.date[i] == '星期二') {
          e.detail.value.date[i] = 2
        } else if (e.detail.value.date[i] == '星期三') {
          e.detail.value.date[i] = 3
        } else if (e.detail.value.date[i] == '星期四') {
          e.detail.value.date[i] = 4
        } else if (e.detail.value.date[i] == '星期五') {
          e.detail.value.date[i] = 5
        } else if (e.detail.value.date[i] == '星期六') {
          e.detail.value.date[i] = 6
        } else {
          e.detail.value.date[i] = 7
        }
      }
      var orderRule = (e.detail.value.date).join()//数组转换成字符串
      // console.log(orderRule)
      var data = {
        userId: app.parentId,
        studentId: app.chooseChildId ? app.chooseChildId : app.defaultchildId,
        beginDate: e.detail.value.startdate,
        endDate: e.detail.value.enddate,
        stationId: that.data.siteid,
        orderRule: orderRule,
      }
      // console.log(data)
      wx.request({
        url: 'http://schoolbus.917tou.com/OrientBase/parentServices/orders',
        data: data,
        method: 'POST',
        success(res) {
          // console.log(res)
          wx.navigateBack({
            delta: 99,
            success() {
              wx.showToast({
                title: '提交成功',
              })
            }
          })
        },
        fail(err) {
          console.log(err);
        }
      })
    }
  }
})