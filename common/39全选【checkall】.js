function checkall(form, prefix, checkall) {
  var checkall = checkall ? checkall : 'chkall';
  for(var i = 0; i < form.elements.length; i++) {
    var e = form.elements[i];
    if(e.type=="checkbox"){
      e.checked = form.elements[checkall].checked;
    }
  }
}