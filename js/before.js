// JavaScript Document

//before() 
Object.prototype.before = function(newElem){ 
 this.outerHTML = arguments[0] + this.outerHTML; 
 return this; 
}
























