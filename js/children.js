// JavaScript Document

//children() 原生js已含有该方法，故命名为userChildren。 
Object.prototype.userChildren = function(){ 
	var chid=this.childNodes; 
	var eleMatch = []; 
	for(var i=0,l=chid.length;i<l;i++){ 
		if (chid[i].nodeType == 1)	eleMatch.push(chid[i]);
	} 
	return eleMatch; 
}















