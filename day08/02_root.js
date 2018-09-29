//1.引入http模块
var http = require("http");
var fs=require("fs");
//2.通过http创建服务器
var server = http.createServer(function(req,res){
  /*
  因为NodeJs没有根目录,所以无法通过localhost:4000/02_root.html来访问该文件中的内容
    可以使用fs模块来实现这个功能
  */
 //使用fs来读取02_root.html的内容，并将读取的内容作为响应内容，返回给页面
 //err是读取文件出错时触发的错误对象
 //data是从文件读取的数据
 fs.readFile("./02_root.html",function(error,data){
   if(error){
     //读取文件出错了
     console.log(error);//打印错误信息
     res.end("read file error!");
   }else{
     //读取问价成功
     console.log(data.toString());//查看data
     res.end(data);//返回给页面
   }
 });
});
//3.开启服务监听端口
server.listen(4000,"localhost");






