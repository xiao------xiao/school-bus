var util = require('../../../utils/util.js');
var app=getApp()

Page({
  data:{
    reason: [
      { value: '病假', checked: 'true'},
      { value: '事假' },
      { value: '其他' }
      ],
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
      name: app.children.name
    });
  },
  bindDateChangestart: function (e) {
    console.log( e.detail.value)
    this.setData({
      datestart: e.detail.value,
      dateend: e.detail.value
    })
  },
  bindDateChangeend: function (e) {
    console.log( e.detail.value)
    this.setData({
      dateend: e.detail.value
    })
  },
  formSubmit(e) {
    console.log(e.detail.value)
    if (e.detail.value.leaveReason==''){
      wx.showToast({
        title: '请输入请假理由',
      })
    }else{
      if (e.detail.value.reason=='病假'){
        e.detail.value.reason=0
      } else if (e.detail.value.reason=='事假'){
        e.detail.value.reason = 1
      }else{
        e.detail.value.reason = 2
      }
      console.log(e.detail.value.reason)
      var data={
        userId: app.children.id,
        startTime: e.detail.value.startdate,
        endTime: e.detail.value.enddate,
        leaveType: e.detail.value.reason,
        leaveRemark: e.detail.value.leaveReason,
        leaveStatus:0,
        targetUserId: app.children.id
      }
      wx.request({
        url: 'http://schoolbus.917tou.com/OrientBase/parentServices/attendances',
        data:data,
        method:'POST',
        success(res){
          console.log(res.data.data)
          wx.navigateBack({
            delta: 1,
            success() {
              wx.showToast({
                title: '请假成功',
              })
            }
          })
        },
        fail(err){
          console.log(err)
        }
      })
    }
  }
})