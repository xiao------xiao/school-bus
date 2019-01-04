'use strict';
let choose_year = null,
  choose_month = null,
  choose_day = null,
  taskDateList = ['2018-01-10', '2018-01-14', '2018-01-15', '2018-01-16'],
  // 日历左右滑
  _x_start = 0,
  _y_start = 0,
  _x_move = 0,
  _y_move = 0,
  _x_end = 0,
  _y_end = 0,
  top_val = 0,
  left_val = 0,
  // 日历上下滑
  bar_y_start = 0,
  bar_y_move = 0,
  bar_y_end = 0,
  bar_line_offsetY = 0,
  touch_angel_result = 0,
  // 单行高度
  singleHeight = 0,
  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  currentDay = 'current',
  hasTaskClassName = 'has-task'

const conf = {
  data: {
    // 是否有 天数 空格
    hasEmptyGrid: false,
    showPicker: false,
    // 收起 剩一行 展开
    showAllCalender: false,
    // 选中那天的所在星期的所有日期
    onlyThisWeekDays: [],
    // 选中那天的所在星期的行数
    saveLine: -1,
    // 当前年
    cur_year: '',
    // 当前月
    cur_month: '',
    // 当前天
    cur_day: '',
    // 当前 日期字符串
    cur_date: '',
    //  天数区域高度
    barHeight: 40,
    // 天数区域的  translateY 偏移量
    tranY: 0,
    // 整个天数区域 占高度 
    totalDaysHeight: 0,
    // 整个天数区域 动画实例
    daysAnimationData: {},
    // 年月 标题
    yearMonthTitleAnimationData: {},
  },
  onLoad() {
    // 设置单行高度
    singleHeight = 40
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const cur_day = date.getDate();
    const cur_date = this.str2str(cur_year, cur_month, cur_day);
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.setData({
      cur_year,
      cur_month,
      cur_day,
      cur_date,
      weeks_ch
    });
    this.calculateEmptyGrids(cur_year, cur_month);
    this.calculateDays(cur_year, cur_month);
    // 创建动画实例
    this.initAnimation()
  },
  initAnimation() {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation
    this.createLongAnimation(singleHeight)
    var fastAnimation = wx.createAnimation({
      duration: 10,
      timingFunction: 'linear',
    })
    this.fastAnimation = fastAnimation
    var yearMonthTitleAnimation = wx.createAnimation({
      duration: 500,
      timingFunction: 'linear',
    })
    // 年月 标题
    this.titleAnimation = yearMonthTitleAnimation
  },
  // 500ms 动画
  createLongAnimation(height, translateY = 0) {
    var transY = translateY + 'px'
    // console.log('long animation', height, transY)
    this.animation.height(height).translateY(transY).step()
    this.setData({
      daysAnimationData: this.animation.export()
    })
  },
  // 0.01s 快速动画
  createFastAnimation(height, translateY = 0) {
    var transY = translateY + 'px'
    // console.log('fast animation', height, transY)
    this.fastAnimation.height(height).translateY(transY).step()
    this.setData({
      daysAnimationData: this.fastAnimation.export()
    })
  },
  // 2018年xx 月 动画
  createCalenderTitleAnimation(isOpen) {
    // 展开
    if (isOpen) {
      this.titleAnimation.height('80rpx').translateY(0).step()
    } else {
      // 收起
      this.titleAnimation.height('80rpx').translateY(0).step()
    }
    // 驱动页面
    this.setData({
      yearMonthTitleAnimationData: this.titleAnimation.export()
    })
  },
  // 获取 指定的年份中的月份的最大天数 maxDays ，便于 计算月份天数
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  // 函数说明 获取 某月1 号是星期几， 前面的都是空格
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  // 函数说明 计算 空出来的格
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },
  // 跳回今天 的 logo
  skip2Today() {
    const date = new Date()
    const cur_year = date.getFullYear()
    const cur_month = date.getMonth() + 1
    const cur_day = date.getDate()
    const cur_date = this.str2str(cur_year, cur_month, cur_day)
    this.setData({
      cur_year,
      cur_month,
      cur_day,
      cur_date
    });
    this.calculateEmptyGrids(cur_year, cur_month)
    this.calculateDays(cur_year, cur_month)
  },
  // 计算年月对应的天数
  calculateDays(year, month) {
    var that = this
    let days = [];
    const cur_year = this.data.cur_year
    const cur_month = this.data.cur_month
    const thisMonthDays = this.getThisMonthDays(year, month);
    const cur_day = (new Date(this.data.cur_date)).getDate()
    this.setData({
      cur_date: this.str2str(cur_year, cur_month, cur_day)
    })
    for (let i = 1; i <= thisMonthDays; i++) {

      var dateStr = this.str2str(cur_year, cur_month, i)
      var hasTask = taskDateList.indexOf(dateStr) > -1
      if (cur_day > thisMonthDays && i == thisMonthDays) {
        this.setData({
          cur_date: this.str2str(cur_year, cur_month, i),
          cur_day: i
        })
        days.push({
          day: i,
          hasTask,
          dateStr,
          choosed: true,
          isEmptyGrid: false
        });
      }
      else if (cur_day == i) {
        days.push({
          day: i,
          hasTask,
          dateStr,
          choosed: true,
          isEmptyGrid: false
        });

      } else {
        days.push({
          day: i,
          hasTask,
          dateStr,
          choosed: false,
          isEmptyGrid: false
        });
      }
    }
    this.setData({
      days
    }, function () {
      that.computedLineDays()
    });
    // 收集选中日期所在周的日期days    
  },
  // 函数说明 获取 选中日期所在周的所有装进数组里面
  computedLineDays() {
    // console.log('bar_line_offsetY', bar_line_offsetY, this.data.tranY)
    var cur_date = this.data.cur_date
    var sameWeekIndex = -1
    var days = this.data.empytGrids.concat(this.data.days)
    if (days.length / 7 > 5) {
      // 日历日期 总高度
      this.setData({
        totalDaysHeight: singleHeight * 6
      })
      // console.log('total 6')
      // 展开状态
      if (!this.data.showAllCalender) {
        this.createLongAnimation(singleHeight, -bar_line_offsetY)
        this.createCalenderTitleAnimation(false)
      } else {
        this.createLongAnimation(singleHeight * 6)
        this.createCalenderTitleAnimation(true)
      }
    }
    else {
      // 日历日期 总高度
      this.setData({
        totalDaysHeight: singleHeight * 5
      })
      // console.log('total 5')
      if (!this.data.showAllCalender) {
        this.createLongAnimation(singleHeight, -bar_line_offsetY)
        this.createCalenderTitleAnimation(false)
      } else {
        this.createLongAnimation(singleHeight * 5)
        this.createCalenderTitleAnimation(true)
      }
    }

    var that = this
    days.forEach((val, key) => {
      if (typeof val == 'object' && cur_date == val.dateStr) {
        sameWeekIndex = key
      }
    })
    // 以7天进行分割
    const com = [0, 7, 14, 21, 28, 35, 42]
    var isFind = false
    // if (this.isFind) {
    //   return
    // }
    // 根据 当天的索引 查出 同一周的 days （收起时显示）
    com.forEach((val, key) => {
      if (sameWeekIndex >= val && sameWeekIndex < com[key + 1] && !isFind) {
        isFind = true
        var _days = []
        var max = com[key + 1]
        for (let i = val; i < max; i++) {
          if (typeof days[i] == 'number') {
            _days.push({
              isEmptyGrid: true,
            })
          }
          else {
            _days.push(days[i])
          }
        }
        bar_line_offsetY = key * singleHeight
        this.setData({
          onlyThisWeekDays: _days,
          saveLine: key
        })
      }
    })
    if (!this.data.showAllCalender) {
      // console.log('line - 249')
      this.createFastAnimation(singleHeight, -this.data.saveLine * singleHeight)
      this.createCalenderTitleAnimation(false)
      this.setData({
        tranY: -this.data.saveLine * singleHeight,
      })
    }
  },
  // 展开日历或者收起
  changeShowAllCalender() {
    var state = this.data.showAllCalender
    this.setData({
      showAllCalender: !state
    })
  },
  // date 对象 转换为字符串
  date2Str(date, addZero) {
    if (!addZero) {
      return date.getFullYear() + this.data.sep + (date.getMonth() + 1)
        + this.data.sep + date.getDate();
    }
    return date.getFullYear() + this.data.sep + months[date.getMonth()] + this.data.sep + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  },
  // xyd,拼凑为字符串
  str2str(y, m, d, addZero = true, sep = '-') {

    if (!addZero) {
      return y + sep + months[m - 1] + sep + d
    }
    return y + sep + months[m - 1] + sep + (d < 10 ? '0' + d : d);
  },
  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    const cur_day = this.data.cur_day
    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      var newDateStr = ''
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
        newDateStr = this.str2str(newYear, newMonth, cur_day)
      }
      this.setData({
        cur_year: newYear,
        cur_month: newMonth,
        cur_date: newDateStr
      })
      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);
    }
    else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
        newDateStr = this.str2str(newYear, newMonth, cur_day)
      }
      this.setData({
        cur_year: newYear,
        cur_month: newMonth,
        cur_date: newDateStr
      });
      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

    }
  },
  touchHandleCalendar(handle) {

    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    if (handle === 'prev') {
      // 上一月
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      });
      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

    } else {
      // 下一月
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }
      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      });
      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);
    }
  },
  // 展开时选日期
  tapDayItem(e) {
    const idx = e.currentTarget.dataset.idx;
    const days = this.data.days;
    days[idx].choosed = true;
    //days[idx].choosed = !days[idx].choosed;
    this.setData({
      // days,
      cur_date: days[idx].dateStr
    });
    this.computedLineDays()
  },
  // 收起时选日期
  tapDayItemWhenCloseCalendar(e) {
    const idx = e.currentTarget.dataset.idx;
    const days = this.data.onlyThisWeekDays
    //days[idx].choosed = !days[idx].choosed;
    this.setData({
      // days,
      cur_date: days[idx].dateStr
    });
  },
  touchStart(e) {
    _x_start = e.touches[0].pageX
    _y_start = e.touches[0].pageY
    this.barTouchStart(e)
  },
  touchMove(e) {
    var endX, endY;
    endX = e.changedTouches[0].pageX
    endY = e.changedTouches[0].pageY

    _x_move = e.touches[0].pageX
    //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动 
    touch_angel_result = this.GetSlideDirection(_x_start, _y_start, endX, endY)
    // console.log('result', touch_angel_result)
    if (touch_angel_result == 1 || touch_angel_result == 2 || touch_angel_result == 0) {
      this.barTouchMove(e)
    }
  },
  touchEnd(e) {
    // console.log(e)

    if (_x_move == 0) {
      // console.log('点击')
      _x_start = 0
      touch_angel_result = 0
      return
    }
    if (!this.data.showAllCalender && (touch_angel_result == 3 || touch_angel_result == 4)) {
      touch_angel_result = _x_start = _x_end = _x_move = 0
      return
    }
    // 收起状态不跳转
    // else if (!this.data.showAllCalender ){
    //   _x_start = 0 
    //   _x_move = 0
    //   return 
    // }
    _x_end = e.changedTouches[0].pageX
    var offsetX = _x_end - _x_start
    // console.log(offsetX)
    if (Math.abs(offsetX) > 70) {
      if (offsetX > 0) {
        // 向右 月份减1
        this.touchHandleCalendar('prev')
      } else {
        // 向左 月份加1
        this.touchHandleCalendar('next')
      }
    }
    // 归0
    _x_start = _x_end = _x_move = 0
    // 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动 
    if (touch_angel_result == 1 || touch_angel_result == 2) {
      this.barTouchEnd(e, 'day')
      touch_angel_result = 0
    }


  },
  barTouchStart(e) {
    // console.log(e)
    // this.data.totalDaysHeight 
    bar_y_start = e.touches[0].pageY

  },
  barTouchMove(e) {

    // console.log(e)
    var that = this

    bar_y_move = e.touches[0].pageY
    var offsetY = bar_y_move - bar_y_start
    // 当前日历天数dom的高度
    var height = this.data.barHeight
    // console.log('offsetY', offsetY)
    // 判断往 该行收起还是展开
    var line_tranY = this.computedLineDayTranY(offsetY)

    // console.log('line_tranY', line_tranY)
    // 向上滑
    if (offsetY < 0) {
      // 变量说明 number   _height [日历天数dom 的高度]
      var _height = Math.abs(height + offsetY * 2)
      // console.log(_height)
      // 收起状态了,再向上滑动，不触发任何动画与计算类方法
      if (height == singleHeight) {
        // console.log(33)
        return
      }
      if (_height <= singleHeight) {
        // 注释原因 ，鼠标按住屏幕不放手，但是 touchmove 一直在调用，会使height 不断增加
        // this.setData({
        //   barHeight: 40
        // })
        // 动画 改变天数dom高度
        // console.log('line - 458')
        that.createFastAnimation(singleHeight, line_tranY)
      } else {
        // 快速动画 改变天数dom高度
        // console.log('line - 468')
        // 则认为是已在收起状态 , 再往上拉也不会有改变
        if (Math.abs(offsetY) > bar_line_offsetY) {
          this.createFastAnimation(singleHeight, line_tranY)
        } else {
          this.createFastAnimation(_height, line_tranY)
        }

      }
    } else {
      var _height = height + offsetY * 2
      // 注释原因同上
      // this.setData({
      //   barHeight: _height 
      // })
      if (_height >= this.data.totalDaysHeight) {
        //  that.setData({
        //    barHeight: this.data.totalDaysHeight 
        //  }) 
        // console.log('line - 481')
        this.createFastAnimation(this.data.totalDaysHeight, line_tranY)
      } else {
        // console.log('line - 484')
        this.createFastAnimation(_height, line_tranY)
      }
      setTimeout(function () {
        that.setData({
          showAllCalender: true
        })
      }, 100)
    }
  },
  barTouchEnd(e, dom = null) {
    var that = this
    bar_y_end = e.changedTouches[0].pageY
    var offsetY = bar_y_end - bar_y_start
    var nowBarHeight = this.data.barHeight

    // console.log(offsetY)
    if (offsetY > 0) {
      // 展开
      this.setData({
        showAllCalender: true,
        barHeight: this.data.totalDaysHeight,
        tranY: 0
      })
      // console.log('line- 547')
      this.createLongAnimation(this.data.totalDaysHeight, 0)
      this.createCalenderTitleAnimation(true)
    } else if (offsetY < 0) {
      // 收起
      this.setData({
        barHeight: singleHeight,
        tranY: -bar_line_offsetY,
        showAllCalender: false
      })
      // console.log('line- 555')
      this.createLongAnimation(singleHeight, -bar_line_offsetY)
      this.createCalenderTitleAnimation(false)
    }
    else if (!dom && offsetY == 0) {
      // console.log(222)
      if (nowBarHeight == singleHeight) {
        //开启
        setTimeout(function () {
          that.setData({
            showAllCalender: true,
            barHeight: that.data.totalDaysHeight
          })
          // 防止 变换时dom自动撑高 没有过度效果
        }, 700)
        // console.log('line- 571')
        this.createLongAnimation(this.data.totalDaysHeight, 0)
        this.setData({
          tranY: 0,
          showAllCalender: false
        })
        this.createCalenderTitleAnimation(true)
      }
      else {
        //关闭
        setTimeout(function () {
          that.setData({
            // showAllCalender: false,
            barHeight: singleHeight
          })
        }, 100)
        // console.log('line- 586')
        this.createLongAnimation(singleHeight, -bar_line_offsetY)
        this.setData({
          tranY: -bar_line_offsetY,
          showAllCalender: false
        })
        this.createCalenderTitleAnimation(false)
      }
    }
    bar_y_start = 0
    bar_y_move = 0
    bar_y_end = 0
    touch_angel_result = 0
  },
  computedLineDayTranY(offsetY) {
    // console.log('offsetY...', offsetY)
    var tranY = 0
    var alreadyTranY = this.data.tranY
    // console.log('already tranY', alreadyTranY, bar_line_offsetY)
    /* 
      0 < = realTranY <= bar_line_offsetY
    */
    var realTranY
    if (alreadyTranY == 0) {
      // console.log('up')
      // 从完全展开的状态 开始向上滑
      if (offsetY > 0) {
        // console.log('11111')
        tranY = 0
      } else {
        realTranY = 0 + offsetY
        // 40 * n > | realTranY |
        if (bar_line_offsetY > Math.abs(realTranY)) {
          tranY = realTranY
        }
        else {
          if (bar_line_offsetY > Math.abs(realTranY)) {
            tranY = realTranY
          }
          else {
            tranY = -bar_line_offsetY
          }
        }
      }
    }
    else if (Math.abs(alreadyTranY) == Math.abs(bar_line_offsetY)) {
      // console.log('down')
      // 从完成收起 底部开始向下拉
      if (offsetY < 0) {
        return -bar_line_offsetY
      }
      else {
        if (alreadyTranY + offsetY > 0) {
          tranY = 0
        }
        else {
          tranY = alreadyTranY + offsetY
        }
      }
    }
    else {
      // console.log('move when bettewn')
      // 从中间开始 经历 start move 
      if (bar_line_offsetY > Math.abs(realTranY)) {
        tranY = realTranY
      } else {
        tranY = 0
      }
    }
    return tranY
  },
  resetTranY(direction) {
    if (direction == 'up') {
      // console.log('line - 608')
      this.createFastAnimation(this.data.totalDaysHeight, 0)
    } else {
      // console.log('line - 611')
      this.createFastAnimation(singleHeight, -bar_line_offsetY)
    }
  },
  //返回角度  
  GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI
  },
  //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动  
  GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;
    //如果滑动距离太短  
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
      return result;
    }
    var angle = this.GetSlideAngle(dx, dy);
    var littleAngle = 60
    var biggerAngle = 180 - 60 // 120
    if (angle >= -littleAngle && angle < littleAngle) {
      result = 4;
    } else if (angle >= littleAngle && angle < biggerAngle) {
      result = 1;
    } else if (angle >= -biggerAngle && angle < -littleAngle) {
      result = 2;
    }
    else if ((angle >= biggerAngle && angle <= 180) || (angle >= -180 && angle < -biggerAngle)) {
      result = 3;
    }
    return result;
  }
};

Page(conf);