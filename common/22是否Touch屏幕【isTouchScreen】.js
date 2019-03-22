function isTouchScreen(){
  return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
}