function $(id) {
  return !id ? null : document.getElementById(id);
}
function display(id) {
  var obj = $(id);
  if(obj.style.visibility) {
    obj.style.visibility = obj.style.visibility == 'visible' ? 'hidden' : 'visible';
  } else {
    obj.style.display = obj.style.display == '' ? 'none' : '';
  }
}