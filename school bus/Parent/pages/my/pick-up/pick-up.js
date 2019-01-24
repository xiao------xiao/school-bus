// pages/wode/lingjiesongma/lingjiesongma.js
const app = getApp();
Page({
  bc: function () {
    wx.showToast({
      title: '成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  onLoad(){
    imageUrl:''
    this.getQRCode()

  },
  getQRCode() {
    var that = this;
    wx.request({
      url: 'http://schoolbus.917tou.com/OrientBase/settings/qrCode',
      data: {
        userId: 6,
        studentId: 4
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.status == 200) {

          
          app.showToast('获取二维码成功')
          console.log("获取二维码成功")

          
          var jsonStr = res.data.data.qrcodeFile
          var jsonObj = JSON.parse(jsonStr)
          var imageObj = jsonObj[0]
          console.log("name  ==" + imageObj.id);
          
          // var imageUrl = "http://schoolbus.917tou.com/FileServiceWeb/file/preview/" + imageObj.id;
          var imageUrl = "http://schoolbus.917tou.com/FileServiceWeb/file/preview/" + '25';

          console.log("imageurl --- " + imageUrl);
          that.setData({
            imageUrl:imageUrl
          })

        } else {
          var imageUrl = "http://schoolbus.917tou.com/FileServiceWeb/file/preview/" + '25';

          console.log("imageurl --- " + imageUrl);
          that.setData({
            imageUrl: imageUrl
          })
    
          console.log("获取二维码失败")

        }
      }

    })

  }

})