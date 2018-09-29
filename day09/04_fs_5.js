var fs=require("fs");
fs.stat("./day09.txt",function (err,stats) {
  if(err){
    console.log(err);
  }else{
    console.log(stats);
    console.log(stats.isBlockDevice());
    console.log(stats.isDirectory());
    console.log(stats.isFile());
  }
  });