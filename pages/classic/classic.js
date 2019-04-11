//index.js
//获取应用实例
//
//引入本地json数据，这里引入的就是第一步定义的json数据
var jsonData = require('../../api/latest.js');
const app = getApp()

Page({

	/**
   * 页面的初始数据
   */
  data: {
    classic:null,
    latest:true,
    first:false,
    like:false,
    count:0
  },

  
/*
	生命周期函数--监听页面加载
*/
	onLoad: function (options) {
		this.setData({
	      //jsonData.dataList获取json.js里定义的json数据，并赋值给dataList
	      classic: jsonData.dataList[0]
	    });
	}

})
