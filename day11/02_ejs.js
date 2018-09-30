//引入ejs模块
var ejs = require("ejs");

//创建一个模板
var str = "今天开始学习<%= mgs %>";

//模拟一个数据填充
//数据必须是json
var data= {mgs:"esj"};
// 返回值是一个完整的视图
var html = ejs.render(str,data);
console.log(html);

