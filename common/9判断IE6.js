var ua = navigator.userAgent.toLowerCase();
var isIE6 = ua.indexOf("msie 6") > -1;
if (isIE6) {
    try {
        document.execCommand("BackgroundImageCache", false, true)
    } catch(e) {}
}