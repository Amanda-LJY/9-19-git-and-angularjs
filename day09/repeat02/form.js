var http = require('http');
var fs = require("fs");
var url = require("url");
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  };
  var urlobj = url.parse(req.url,true);
  var query = urlobj.query;
  var pathname = urlobj.pathname;
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  if(pathname=="/"){
    fs.readFile("./form.html",function(err,data){
      if(err){
        res.end("read file error");
      }
      res.end(data);
    }
    )
  }else if(pathname=="/tijiao"){
    
   console.log(query.username);
   console.log(query.password);
   res.end("发送成功");
  }
});
server.listen(4000, 'localhost');