const app = getApp()
var util = require('../../../../../../utils/util.js');

Page({
  data:{
    site:'',
    name:'',
    datestart:'',
    dateend: '',
    week:[
      {
        date:'Monday',
        time: '星期一',
        checked: 'true'
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
    catalogSelect:0
  },
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      name: app.name,
      site: options.site ? options.site : '请选择上车站点',
      datestart: time,
      dateend: time
    })
  },
  bindDateChangestart: function (e) {
    console.log(e.detail.value)
    this.setData({
      datestart: e.detail.value
    })
  },
  bindDateChangeend: function (e) {
    console.log(e.detail.value)
    this.setData({
      dateend: e.detail.value
    })
  },
  formSubmit:function(e){
    console.log(e.detail.value)
    wx.navigateTo({
      url: '/pages/aa/aa',
    })
  }
})