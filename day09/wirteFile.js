var fs = require("fs");
fs.writeFile("./2.txt","love for you",function (err) {
  if(err){
    console.log("创建失败");
  }
  console.log("创建成功");
})
