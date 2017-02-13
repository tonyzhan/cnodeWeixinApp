// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{
    title: '详情',
    detail: {},
    hidden: false,
    content: '',
    id: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('options.id: '+options.id);    
    this.setData({id: options.id});    
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
  fetchData: function (data) { 
    var p = this;      
    console.log('p.data.id: '+p.data.id);
    wx.request({
      url: 'https://cnodejs.org/api/v1/topic/'+p.data.id,
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        //console.log(res.data.data); 
        var result = res.data.data;
        var content = result.content; 
        //console.log(content);      
        p.setData({detail:result,hidden:true});
        WxParse.wxParse('content', 'html', content, p, 5);
        
        var repliesArray = result.replies;
        var l = 100;
        if(repliesArray.length<l){
          l = repliesArray.length;
        }
        var replyArr = [];
        for(var i=0; i<l; i++){
          if(repliesArray[i].content){
            var c = repliesArray[i].content;
            if(c.length>0){
              replyArr.push(repliesArray[i].content);
            }
          }          
        }         
        /**
        * WxParse.wxParseTemArray(temArrayName,bindNameReg,total,that)
        * 1.temArrayName: 为你调用时的数组名称
        * 3.bindNameReg为循环的共同体 如绑定为reply1，reply2...则bindNameReg = 'reply'
        * 3.total为reply的个数
        */    
        console.log('replies:'+replyArr.length);
        if(replyArr.length>0){
          for (let i = 0; i < replyArr.length; i++) {
            WxParse.wxParse('reply' + i, 'html', replyArr[i], p);
            if (i === replyArr.length - 1) {
              WxParse.wxParseTemArray("replyTemArray",'reply', replyArr.length, p)
            }
          }
        }             
      }
    });
  }  
})