# cnodeWeixinApp
cnodejs.org Weixin App version
  前几天，我拜读了coolfishstudio分享的使用cnode社区API开发微信小程序的帖子。他提到富文本详情页显示的问题。 
在这里向大家推荐wxParse-微信小程序富文本解析自定义组件，支持HTML及markdown解析。 
先给大家看看我制作的使用cnode社区API开发微信小程序的页面截图： 
##列表页/详情页：
![ScreenshotList.jpg](https://github.com/tonyzhan/cnodeWeixinApp/blob/master/screenshot/ScreenshotList.jpg)
![ScreenshotDetail.jpg](https://github.com/tonyzhan/cnodeWeixinApp/blob/master/screenshot/ScreenshotDetail.jpg)

## wxParse的特点


| 支持特性        | 实验功能           | ToDo  |
| ------------- |-------------| -----|
| - [x] HTML的大部分标签解析 | [x] 小表情emjio | [x] table标签 |
| - [x] 内联style          | [x] a标签跳转   |               |
| - [x] 标签Class          | [x] 动态添加    |               |
| - [x] 图片自适应规则       |               |                |
| - [x] 图片多图片预览      |                |               |
| - [x] 模版层级可扩展性    |                |               |
| - [x] 多数据循环方式      |                |  |
| - [x] 内联style         |                |   |
|         |                |   |


## 基本使用方法

* 1. Copy文件夹`wxParse`
```
- wxParse/
  -wxParse.js(必须存在)
  -html2json.js(必须存在)
  -htmlparser.js(必须存在)
  -showdown.js(必须存在)
  -wxDiscode.js(必须存在)
  -wxParse.wxml(必须存在)
  -wxParse.wxss(必须存在)
  -emojis(可选)
```

* 2. 引入必要文件

```
//在使用的View中引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');
```

```
//在使用的Wxss中引入WxParse.css,可以在app.wxss
@import "/wxParse/wxParse.wxss";
```

* 3. 数据绑定
```
var article = '<div>我是HTML代码</div>';
/**
* WxParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/
var that = this;
WxParse.wxParse('article', 'html', article, that, 5);
```

* 4. 模版引用
```
//这里data中article为bindName
<template is="wxParse" data="{{wxParseData:article.nodes}}"/>
```
明天，我整理好源代码后，就上传github,供大家参考。 同时，我也提交了我开发的小程序，希望微信团队尽快审核通过，让大家试用。
