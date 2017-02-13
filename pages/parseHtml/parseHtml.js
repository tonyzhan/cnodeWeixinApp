/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data: {
    article: '<div>我是HTML代码</div>'
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this; 
    WxParse.wxParse('article', 'html', that.data.article, that, 5);
  }
})