var fs = require("fs");
var start = new Date();
console.log(1);
// fs.readFile("./day09.txt","utf-8",function(error,data){
//   console.log(2);
// if(error){
//   console.log(error);
// }else{
// console.log(data);
// // console.log(data.toString());//不指定字符集，转换成字符集
// }
// });

//同步读取文件
var result = fs.readFileSync("./day09.txt");

console.log(3);
var end = new Date();

console.log("程序执行花了"+(end-start)+"ms");