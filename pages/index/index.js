//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner:'',
    list:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.showLoading({
      title: "加载中"
    })
    var _that = this;
    wx.request({
      url: 'https://h5.91jianguo.com/Api_applet/list',
      success: function (res) {
        console.log(res.data.cvoData)
        var data = res.data.cvoData;
        _that.setData({
          list: data
        })
        _that.bannerData(data);
        _that.listData(data);
        wx.hideLoading();
      }
    })
    //首页转发
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  bannerData:function(data){
    var res=[];
    for(let i=0;i<4;i++){
      res.push(data[i])
    }
    this.setData({
      banner:res
    })
  },
  listData(data){
    let res=[];
    for(let i=4;i<9;i++){
      res.push(data[i]);
    }
    this.setData({
      list:res
    })
  },
  onPullDownRefresh: function () {
    console.log('111')
    wx.stopPullDownRefresh()
  }
})
