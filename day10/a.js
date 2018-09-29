require("./b.js");
console.log("这是a.js的内容");

var a=12;
// console.log("a.js中属性a的值是："+a);
function b(){
  console.log("这是a.js的方法b");
}
//exports.暴露
exports.a=a;
exports.b=b;
