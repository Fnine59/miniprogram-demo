Page({
  data: {},
  onLoad: function () {
    console.log('z-index-demo page onload...')
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
