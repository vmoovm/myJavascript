function isValidDecimal( chars ) {
  var re=/^\d*\.?\d{1,2}$/;
  if (chars.match(re) == null)
    return false;
  else
    return true;
}