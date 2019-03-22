String.prototype.unique=function(){
  var x=this.split(/[\r\n]+/);
  var y='';
  for(var i=0;i<x.length;i++){
    if(!new RegExp("^"+x[i].replace(/([^\w])/ig,"\\$1")+"$","igm").test(y)){
      y+=x[i]+"\r\n"
    }
  }
  return y
}