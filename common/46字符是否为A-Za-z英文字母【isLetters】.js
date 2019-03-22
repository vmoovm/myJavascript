function isLetters( str ){
  var re=/^[A-Za-z]+$/;
  if (str.match(re) == null)
    return false;
  else
    return true;
}