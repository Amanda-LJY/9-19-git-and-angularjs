var http = require('http');
var ejs =require("ejs");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  fs.readFile("./02_ejs_3.html",function(err,data){
    if(err){
      console.log(err);
      res.end("加载页面出错");
      return;
    }
    // res.end(data);
    //模拟一个数据
    // var info = {msg:"来自服务器的信息"};

    //数组数据
    // var info={msg:[1,2,3,4,5]};

    // 对象数据
    // var info = {msg:{id:101,name:"jack"} }

    //对象数组
    var info={msg:[{id:101,name:"jack"},{id:102,name:"rose"}]}
    //将数据填充(渲染)到模板中--data此时是格式buffer是，所以要转换
    // ejs.render(需要需要的地方，传递的数据)
   var html= ejs.render(data.toString(),info);
   //然后的结果返回
   res.end(html);
  })
});
server.listen(4000, 'localhost');