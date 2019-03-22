function checkAll() {
  var selectall = document.getElementById("selectall");
  var allbox = document.getElementsByName("allbox");
  if (selectall.checked) {
    for (var i = 0; i < allbox.length; i++) {
      allbox[i].checked = true;
    }
  } else {
    for (var i = 0; i < allbox.length; i++) {
      allbox[i].checked = false;
    }
  }
}