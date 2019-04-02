Page({

  /**
   * 页面的初始数据
   */
  data: {
    reviewPoem: [{
        poemTitle: "离思五首",
        poemAuthor:"元稹",
        poemBody: "曾经沧海难为水，除却巫山不是云。取次花丛懒回顾，半缘修道半缘君。",
      },
      {
        poemTitle: "摊破浣溪沙·手卷真珠上玉钩",
        poemAuthor:"李璟",
        poemBody: "手卷真珠上玉钩，依前春恨锁重楼。风里落花谁是主？思悠悠。青鸟不传云外信，丁香空结雨中愁。回首绿波三楚暮，接天流。 ",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  backToIndex() {
    wx.navigateBack();
  }
})