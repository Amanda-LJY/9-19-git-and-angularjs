var fs= require("fs");
fs.writeFile("./1.txt","12344",function(err){
  if(err){
    console.log(err);
  }else{
    console.log("写入成功");
  }
})