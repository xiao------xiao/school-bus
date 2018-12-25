var app=getApp()
var sites=[]

Page({
  data:{
    id: 0,
    startEnd: [
      '金域缇香--波士顿国际学校',
      '尚东雅园--波士顿国际学校',
      '第一国际--波士顿国际学校',
      '滨湖壹号--波士顿国际学校',
      '太湖锦园--波士顿国际学校',
      '波士顿国际学校--金域缇香',
      '波士顿国际学校--尚东雅园',
      '波士顿国际学校--第一国际',
      '波士顿国际学校--滨湖壹号',
      '波士顿国际学校--太湖锦园'
      ],
    site:[
      {
        num:19,
        site:[
          '金域缇香',
          '长江国际鸿园',
          '长江国际雅园',
          '万科东郡',
          '波士顿国际学校'
        ]
      },
      {
        num: 19,
        site: [
          '尚东雅园',
          '东和苑',
          '长江国际一期',
          '万科东郡',
          '波士顿国际学校'
        ]
      },
      {
        num: 19,
        site: [
          '第一国际',
          '万科东郡',
          '长江国际臻园',
          '波士顿国际学校'
        ]
      },
      {
        num: 19,
        site: [
          '滨湖壹号',
          '威尼斯花园 / 保利香槟国际 / 太湖世家',
          '蠡湖尚郡',
          '湖玺庄园',
          '山水湖滨花园'
        ]
      },
      {
        num: 19,
        site: [
          '太湖锦园',
          '栖霞栖园',
          '翠湖苑',
          '百合花园',
          '绿城蠡湖香樟园'
        ]
      },
      {
        num: 19,
        site: [
          '波士顿国际学校',
          '长江国际一期',
          '万科东郡',
          '尚东雅园',
          '东和苑'
        ]
      },
      {
        num: 19,
        site: [
          '波士顿国际学校',
          '万科东郡',
          '长江国际雅园',
          '长江国际鸿园',
          '金域缇香'
        ]
      },
      {
        num: 19,
        site: [
          '波士顿国际学校',
          '长江国际臻园',
          '万科东郡',
          '第一国际',
        ]
      },
      {
        num: 19,
        site: [
          '波士顿国际学校',
          '玉兰花园',
          '富力十号',
          '山水湖滨花园',
          '湖玺庄园'
        ]
      },
      {
        num: 19,
        site: [
          '波士顿国际学校',
          '花溪美墅',
          '万科城市花园二期/四期',
          '万科城市花园一期/万科酩悦',
          '太湖国际社区'
        ]
      }
    ]
  },
  wyyd:function(){
    wx.navigateTo({
      url: '/pages/faxian/xiaocheluxian/zhandianmoshi/route(school)/zaixiandingpiao/zaixiandingpiao',
    })
  },
  onLoad: function (options){
    this.setData({
      id: options.id,
    })
    // console.log(this.data.site[this.data.id].site)
    app.sites = this.data.site[this.data.id].site
    console.log(app.sites)
  }
})