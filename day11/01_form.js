var http = require('http');
var fs = require("fs");
var fd = require("formidable");
var sd = require("silly-datetime");
var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  if(req.url=="/"){
    fs.readFile("./01_form.html",function(err,data){
      if(err){
        console.log(err);
        res.end("read file error");
        return;
      }
      res.end(data);
    })
  }else if(req.url=="/tijiao"&&req.method.toUpperCase()=="POST"){
    //post的/tijiao请求
    //使用formidable模块处理问题
    //创建表单对象
    // var form = new fd.IncomingForm();
    var form =fd.IncomingForm();
    //上传文件保存的位置
    form.uploadDir = "./uploads";
    //解析请求对象
    //err:解析出错的错误信息
    //fields:解析文件
    //files:
    form.parse(req,function(err, fields, files){
      if(err){
        console.log(err);
        res.end("请求失败");
        return;
      }
      console.log("fields:");
      console.log(fields);
      console.log('files');
      console.log(files);
      //对文件改名
      //获取旧路径
      var oldpath = files.pic.path;
      var oldname = files.pic.name;
      var arr = oldname.split(".");
      var ext = arr[arr.length-1];
      //设置名称
      var name = sd.format(new Date(),"YYYYMMDDHHmmss");
      var newname = name+"."+ext;
      var newpath = "./uploads/"+newname;
      fs.rename(oldpath,newpath,function(err){
        if(err){
          console.log(err);
          res.end("重命名失败");
          return;
        }
        res.end("请求成功");
      });

      
    })
  }else{
    res.end("地址错误");
  }
});
server.listen(4000, 'localhost');