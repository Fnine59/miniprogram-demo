// package-hidden/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHidden: true,
  },
  toggle() {
    this.setData({
      isHidden: !this.data.isHidden,
    });
  }
})