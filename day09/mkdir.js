var fs = require("fs");
fs.mkdir("./b",function(err){
  if(err){
    console.log("创建失败");
  }
  console.log("创建成功")
})