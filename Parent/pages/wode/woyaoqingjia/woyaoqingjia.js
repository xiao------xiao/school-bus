// pages/wode/woyaoqingjia/woyaoqingjia.js
var util = require('../../../utils/util.js');
var app=getApp()

Page({
  data:{
    reason: ['病假', '事假','其他'],
    reasonSelect: 0,
    datestart:'请选择时间',
    dateend:'请选择时间',
    name:''
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      datestart: time,
      dateend:time,
      name:app.name
    });
  },
  changeTime: function (data) {
    var that = this
    that.setData({//把选中值放入判断值
      reasonSelect: data.currentTarget.dataset.select
    })
  },
  bindDateChangestart: function (e) {
    console.log( e.detail.value)
    this.setData({
      datestart: e.detail.value
    })
  },
  bindDateChangeend: function (e) {
    console.log( e.detail.value)
    this.setData({
      dateend: e.detail.value
    })
  }
})