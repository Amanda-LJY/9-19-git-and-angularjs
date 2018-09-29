function showIndex(req,res){
  res.write(req.url);
  res.end("这是首页");
}
function showInfo(req,res){
  res.write(req.url);
  res.end("这是信息页");
}
function showError(req,res){
  res.write(req.url);
  res.end("显示错误信息");
}
exports.showIndex = showIndex;
exports.showInfo = showInfo;
exports.showError=showError;