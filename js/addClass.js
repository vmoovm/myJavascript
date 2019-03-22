// JavaScript Document

//addClass() 
Object.prototype.addClass = function(cName){ 
 if( !this.hasClass( cName ) ){ 
  this.className += " " + cName; 
 } 
 return this; 
}

// 方案2
/*Object.prototype.addClass = function(cName){ 
 if( !this.hasClass( cName ) ){ 
  this.classList.add(cName); 
 } 
 return this; 
}*/












