var http = require('http');
var url = require("url");
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  //获取请求地址(包括请求路径与请求参数)
  var urlStr = req.url;
  //使用url模块调用其parse方法，来转化URLSTR字符串
  var urlObj = url.parse(urlStr,true);
  //第二个参数默认是false
  /*
   如果为 true，则 query 属性总会通过 querystring 模块的 parse() 方法生成一个对象。如果为 false，则返回的 URL 对象上的 query 属性会是一个未解析、未解码的字符串。 默认为 false。
  */
  console.log("urlStr:",urlStr);
  console.log("================");
  console.log("urlObj:",urlObj);
  console.log(urlObj.query.name)
  //转化过得url有个属性query是对象，表示参数
  //结束请求
  res.end();
});
server.listen(4000, 'localhost');