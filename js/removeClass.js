// JavaScript Document

//removeClass() 
Object.prototype.removeClass = function(cName){ 
 if( this.hasClass( cName ) ){ 
  this.className = this.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); 
 } 
 return this; 
}

// 方案2
/*Object.prototype.removeClass = function(cName){ 
 if( this.hasClass( cName ) ){ 
  this.classList.remove(cName); 
 } 
 return this; 
}*/












