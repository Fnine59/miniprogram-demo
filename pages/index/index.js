Page({
  data: {},
  onLoad: function () {
    console.log('index page onload...')
  },
  /**
   * 页面跳转方法
   */
  handleNavigate(e) {
    const { url } = e.target.dataset;
    wx.navigateTo({
      url,
    });
  }
})
