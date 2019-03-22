// JavaScript Document

//hasClass() 
Object.prototype.hasClass = function(cName){ 
 return !!this.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
}

// 方案2
/*Object.prototype.hasClass = function(cName){ 
 return this.classList.contains(cName) 
} */











