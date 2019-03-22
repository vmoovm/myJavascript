function isNumber( chars ) {
  var re=/^\d*$/;
  if (chars.match(re) == null)
    return false;
  else
    return true;
}