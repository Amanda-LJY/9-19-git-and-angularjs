var http = require('http');
var fs = require("fs");
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  if(req.url=="/circle"){
    fs.readFile("./01_red-circle.html",function(err,data){
      if(err){
        res.end("读取数据出错");
      }else{
        res.end(data);
      }
    })
  }else if(req.url=="/suqare"){
    fs.readFile("./02_blue-square.html",function(err,data){
      if(err){
        res.end("读取数据出错");
        return;
      }
        res.end(data);
    })
  }else{
    res.end("地址错误");
  }
});
server.listen(4000, 'localhost');