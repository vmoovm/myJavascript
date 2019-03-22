function getIE(){
    if (window.ActiveXObject){
        var v = navigator.userAgent.match(/MSIE ([^;]+)/)[1];
        return parseFloat(v.substring(0, v.indexOf(".")))
    }
    return false
}