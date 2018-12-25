const app = getApp()

Page({
  data:{
    site:'',
    name:'',
    datestart:'2018-12-01',
    dateend: '2018-12-01',
    week:[
      {
        date:'Monday',
        time: '星期一',
        select:1
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
    this.setData({
      name: app.name,
      site: options.site ? options.site : '请选择上车站点'
    })
  },
  changeColor:function(data){
    var that = this
    that.setData({//把选中值放入判断值
      catalogSelect: data.currentTarget.dataset.select
    })
  },
  bindDateChangestart: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datestart: e.detail.value
    })
  },
  bindDateChangeend: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateend: e.detail.value
    })
  },
  submit:function(){
    wx.navigateTo({
      url: '/pages/aa/aa',
    })
  }
})