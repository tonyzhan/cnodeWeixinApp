// pages/topics/topics.js
Page({
  data:{
    title: '话题列表',
    postsList: [],
    hidden: false,
    page: 1,
    tab: 'all'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.fetchData();
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onTapTag: function (e) {        
    var tabValue = e.currentTarget.id;
    console.log('tabValue: '+tabValue);
    this.setData({tab:tabValue});    
    this.fetchData();
  },
  redictDetail: function (e) {
    console.log('我要看详情');
    var id = e.currentTarget.id;
    var url = '../detail/detail?id=' + id;
    console.log('url: '+url);
    wx.navigateTo({
      url: url
    })
  },
  fetchData: function (data) { 
    var page = this;   
    console.log('page.data.tab: '+page.data.tab);
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics?tab='+page.data.tab,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.data);
        page.setData({postsList:res.data.data,hidden:true});
      }
    });
  }  
})