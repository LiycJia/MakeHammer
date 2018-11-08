// pages/index/index.js

var touchDotX = 0;
var touchDotY = 0;
var time = 0
var inteval = ""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteList: [{
        content: "1111今天要下雨今天要下雨今天要下雨今天要下雨今天要下雨今天要下雨今天要下雨今天要下雨今天要下雨今天要下雨今天要下雨今天要下雨",
        time: "今天 下午3：17"
      },
      {
        content: "111今天要下雨",
        time: "今天 下午3：17"
      }
    ]
  },

  // 触摸开始事件
  touchStart: function (e) {
    touchDot = e.touches[0].pageX; // 获取触摸时的原点
    // 使用js计时器记录时间  
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸移动事件
  touchMove: function (e) {
    var touchMove = e.touches[0].pageX;
    console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    // 向左滑动  
    if (touchMove - touchDot <= -40 && time < 10) {
      // wx.switchTab({
      //   url: '../左滑页面/左滑页面'
      // });
    }
    // 向右滑动
    if (touchMove - touchDot >= 40 && time < 10) {
      console.log('向右滑动');
      // wx.switchTab({
        
      // });
    }
  },
  // 触摸结束事件
  touchEnd: function (e) {
    clearInterval(interval); // 清除setInterval
    time = 0;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})