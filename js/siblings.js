// JavaScript Document

//siblings() 
Object.prototype.siblings = function(){ 
 var chid=this.parentNode.children; 
 var eleMatch = []; 
 for(var i=0,l=chid.length;i<l;i++){ 
  if(chid[i]!=this){ 
   eleMatch.push(chid[i]); 
  } 
 } 
 return eleMatch; 
}
















