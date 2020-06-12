if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../page/common/components/block-list/block-list?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../page/API/index/index?hash=29962edf8fc534845c0b8fe4c01bc2b108d05b7c');
require('../../page/API/startup/startup?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/pageview/pageview?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/track/track?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/userID/userID?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/profile/profile?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/superProperty/superProperty?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/reset/reset?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/share/share?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}