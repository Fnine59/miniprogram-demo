Page({
  data: {},
  onLoad: function () {
    console.log('demo index page onload...')
  },
  /**
   * 页面跳转方法
   */
  handleNavigate(e) {
    console.log(e)
    const { url } = e.target.dataset;
    wx.navigateTo({
      url,
    });
  }
})
