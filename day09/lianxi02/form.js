var http = require('http');
var fs = require("fs");
var url = require("url");
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  };
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}); 
  var urlStr = req.url;
  var urlObj = url.parse(urlStr,true);
  var pathname = urlObj.pathname;
  var query = urlObj.query;

  console.log(urlObj);
  if(pathname=="/"){
    fs.readFile("./form.html",function(err,data){
      if(err){
        console.log(err);//打印错误信息
        res.end("读取文件错误");//返回响应
      }
        res.end(data);//返回数据
       
    })
  }else if(pathname=="/tijiao"){
    
    // res.end("成功提交");
   var username = query.username;
   var password = query.password;
   res.end("用户名："+username+",密码："+password);
  }else{
    res.end("请求地址出错");
  }
  
});
server.listen(4000, 'localhost');