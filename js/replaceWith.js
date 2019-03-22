// JavaScript Document

//replaceWith() 
Object.prototype.replaceWith = function(newElem){ 
 this.outerHTML = arguments[0]; 
 return this; 
}














