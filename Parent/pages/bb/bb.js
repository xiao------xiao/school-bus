// pages/bb/bb.js
var requestQ = require('../../utils/request.js')
Page({
  onLoad: function (options) {
    requestQ.sendRequest('http://schoolbus.917tou.com/OrientBase/student', 'GET', { user_id: 212 })
      .then(function (response) {
        console.log(response.data.data.list)
      }, function (error) {
        console.log(error);
      })
  }
})