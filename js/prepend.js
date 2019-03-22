// JavaScript Document

//prepend() 
Object.prototype.prepend = function(newElem){ 
 this.innerHTML = arguments[0] + this.innerHTML; 
 return this; 
} 




























