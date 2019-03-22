function getPageHeight(){
  var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
      ? a
      : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}