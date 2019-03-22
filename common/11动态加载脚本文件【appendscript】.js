function appendscript(src, text, reload, charset) {
  var id = hash(src + text);
  if(!reload && in_array(id, evalscripts)) return;
  if(reload && $(id)) {
    $(id).parentNode.removeChild($(id));
  }
  evalscripts.push(id);
  var scriptNode = document.createElement("script");
  scriptNode.type = "text/JavaScript";
  scriptNode.id = id;
  scriptNode.charset = charset ? charset : (BROWSER.firefox ? document.characterSet : document.charset);
  try {
    if(src) {
      scriptNode.src = src;
      scriptNode. = false;
      scriptNode.onload = function () {
        scriptNode. = true;
        JSLOADED[src] = 1;
      };
      scriptNode.onreadystatechange = function () {
        if((scriptNode.readyState == 'loaded' || scriptNode.readyState == 'complete') && !scriptNode. {
          scriptNode. = true;
          JSLOADED[src] = 1;
        }
      };
    } else if(text){
      scriptNode.text = text;
    }
    document.getElementsByTagName('head')[0].appendChild(scriptNode);
  } catch(e) {}
}