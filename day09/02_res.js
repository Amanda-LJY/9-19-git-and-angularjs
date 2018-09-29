var http = require("http");
var server = http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    return;
  }
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

  // res.write();返回数据，但不结束请求
  res.write("第一返回数据");
  res.write("<h1>第二返回数据</h1>");
  res.write("<div style='border:1px solid red'>第三返回数据</div>");
  //结束请求，并返回数据
  res.end("<h5>返回数据</h5>");
});
server.listen(4000,"localhost");