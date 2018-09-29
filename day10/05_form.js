var http = require('http');
var fs = require("fs");

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  //localhost：4000 打开form表单页面
  if(req.url=="/"){
    fs.readFile("./05_form.html",function(err,data){
      if(err){
        console.log(err);
        res.end("read file error");
        return;
      }
      res.end(data);
    })
  }
  if(req.url=="/tijiao" && req.method.toLowerCase=="post"){
   //因为nodejs是单线程，非I/O阻塞，为了追求效率。数据是一小段一小段上传
    //这样就会产生两种状态：正在接受，数据接收完成

    //addListener和on相同
    //提前声明变量，用于接受的一小段的数据
    var allData = ""; 
    //data:表示正在接收数据的状态
    // chunk：表示每次接收的一小段数据
    req.addListener("data",function(chunk){
      //拼接每次接到的数据
      allData += chunk;
    })
    // end：表示接收完成的状态，当数据全部接受完毕之后，进入状态  
    req.addListener('end',function(){
      //进入接受完成状态
      console.log(allData);
      //返回响应
      res.end();
    })
  }
});
server.listen(4000, 'localhost');