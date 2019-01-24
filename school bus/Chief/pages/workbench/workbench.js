// pages/workbench/workbench.js
Page({
  data: {
    currentTab: 0,
    students: [{
        student: '小明',
        status: '未上车'
      },
      {
        student: '小华',
        status: '请假'
      },
      {
        student: '小红',
        status: '已上车'
      },
      {
        student: '小青',
        status: '未上车'
      },
      {
        student: '王华',
        status: '未上车'
      },
      {
        student: '王云',
        status: '已上车'
      },
      {
        student: '孙超',
        status: '请假'
      },
      {
        student: '孙庆',
        status: '已上车'
      },
      {
        student: '章佳佳',
        status: '未上车'
      },
      {
        student: '吴长耀',
        status: '已上车'
      },
      {
        student: '刘长渠',
        status: '未上车'
      },
      {
        student: '吴柳月',
        status: '请假'
      },
      {
        student: '超宇',
        status: '已上车'
      },
      {
        student: '刘高',
        status: '未上车'
      },
      {
        student: '高燕',
        status: '未上车'
      },
      {
        student: '高亚迪',
        status: '已上车'
      },
      {
        student: '章天成',
        status: '未上车'
      },
      {
        student: '闵梦云',
        status: '未上车'
      },
      {
        student: '孙晶晶',
        status: '已上车'
      },
    ],
    arr1:[],
    arr2:[],
    arr3:[]
  },
  switchTab(e) {
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({
        currentTab: 0
      })
    } else if (tab === 'tabcenter') {
      this.setData({
        currentTab: 1
      })
    } else {
      this.setData({
        currentTab: 2
      })
    }
  },
  sweep() {
    var that=this
    wx.scanCode({
      success(res) {
        var childup = res.result
        console.log(childup)
        wx.showToast({
          title: '扫码成功',
          success() {
            if (that.data.students[0].status == '未上车'){
              that.data.students[0].status = '已上车'
            } else if (that.data.students[0].status == '已上车'){
              that.data.students[0].status = '未上车'
            }
            that.onLoad()
          }
        })
      }
    })
  },
  onLoad:function(){
    var arr1=[],arr2=[],arr3=[]
    var that = this
    for (var i = 0; i < that.data.students.length;i++){
      if (that.data.students[i].status=='未上车'){
        arr1.push(that.data.students[i].student)
      } else if (that.data.students[i].status == '已上车'){
        arr2.push(that.data.students[i].student)
      } else if (that.data.students[i].status == '请假'){
        arr3.push(that.data.students[i].student)
      }
    }
    that.setData({
      arr1: arr1,
      arr2: arr2,
      arr3: arr3
    })
  }
})