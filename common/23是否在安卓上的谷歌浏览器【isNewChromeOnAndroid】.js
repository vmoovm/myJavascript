function isNewChromeOnAndroid(){
  if(this.isAndroidMobileDevice()){
    var userAgent = navigator.userAgent.toLowerCase();
    if((/chrome/i.test(userAgent))){
      var parts = userAgent.split('chrome/');
      var fullVersionString = parts[1].split(" ")[0];
      var versionString = fullVersionString.split('.')[0];
      var version = parseInt(versionString);
      if(version >= 27){
        return true;
      }
    }
  }
  return false;
}