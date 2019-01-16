var date = require('../../../utils/util.js')

Page({
  data: {
    date: '',
    week: '',
    currentTab: 0

  },
  onLoad: function () {
    function formatTime(date) {
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var date = year + '年' + month + '月' + day + '日'
      return date
    }

    function formatNumber(n) {
      n = n.toString()
      return n[1] ? n : '0' + n
    }
    var date = formatTime(new Date())
    console.log(date)
    this.setData({
      date: date
    })
    this.switchday(new Date())
  },
  switchday: function (date) {
    function getWeek(date) {
      var week;
      if (date.getDay() == 0) week = "星期日"
      if (date.getDay() == 1) week = "星期一"
      if (date.getDay() == 2) week = "星期二"
      if (date.getDay() == 3) week = "星期三"
      if (date.getDay() == 4) week = "星期四"
      if (date.getDay() == 5) week = "星期五"
      if (date.getDay() == 6) week = "星期六"
      return week;
    }
    var week = getWeek(new Date(date))
    console.log(week)
    this.setData({
      week: week
    })
  }

})