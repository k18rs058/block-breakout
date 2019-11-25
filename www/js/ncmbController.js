// ncmbController.js

var ncmbController = {
  APPLICATION_KEY:appkey,
  CLIENT_KEY:clientkey,

  ncmb:null,
  currentUser:null,
  screenSize:null,

  init:function(screenSize){
    var self = this;
    self.ncmb=new NCMB(self.APPLICATION_KEY,self.CLIENT_KEY);
    selfscreenSize = screenSize;
  }
}
