function getPageWidth(){
  var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
      ? a
      : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}