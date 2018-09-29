var fs = require("fs");
//读取a文件中的所有内容
fs.readdir("./a",function(err,files){
  if(err){
    console.log(err)
  }
    console.log(files);
  //异步导致结果出问题
  // for(var i=0;i<files.length;i++){
  //   fs.stat("./a/"+files[i],function(err,stats){
  //     if(err){
  //       console.log(err);
  //     }
  //     if(stats.isDirectory()){
  //       console.log(files[i]+"是文件夹");
  //     }else if(stats.isFile()){
  //       console.log(files[i]+"是文件");
  //     }
  //   })
  // }

  // //递归
  // (function a(i){
  //   //先判定递归结束的条件
  //   if(i==10){
  //     console.log("递归结束");
  //     return;
  //   }
  //   console.log(++i);
  //   a(i);
  // })(0)
  var dir =[];
  var document=[];
  (function a(i){
    if(i==files.length){
      console.log("文件夹有："+dir);
      console.log("文件有:"+document);
      return;
    }
    //遍历没有结束，检查
    fs.stat("./a/"+files[i],function(err,stats){
          if(err){
            console.log(err);
          }
          if(stats.isDirectory()){
            // console.log(files[i]+"是文件夹");
            dir.push(files[i]);
            
          }else if(stats.isFile()){          
            // console.log(files[i]+"是文件");
            document.push(files[i]);
          }
          a(++i);
        });
    })(0)
   
    
});