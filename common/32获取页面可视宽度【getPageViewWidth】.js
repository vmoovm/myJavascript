function getPageViewWidth(){
  var d = document, a = d.compatMode == "BackCompat"
      ? d.body
      : d.documentElement;
  return a.clientWidth;
}