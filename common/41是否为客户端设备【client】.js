function client(o){
       var b = navigator.userAgent.toLowerCase();
     var t = false;
     if (o == 'isOP'){
       t = b.indexOf('opera') > -1;
     }
     if (o == 'isIE'){
       t = b.indexOf('msie') > -1;
     }
     if (o == 'isFF'){
       t = b.indexOf('firefox') > -1;
     }
       return t;
}