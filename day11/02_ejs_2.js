//1
var ejs = require("ejs");
//2创建模板
var str ="这是一个数组：<%= stus[2].name %>";
//3.模拟数据
var data ={names:['jack','rose','lily']};
var stu = {stus:[
  {name:"zs"},
  {name:"kiki"},
  {name:"kimi"}
]};
//4.填充
var html = ejs.render(str,stu);
console.log(html);