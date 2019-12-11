let startUpList = [{
  name: '启动事件',
  path: '/page/API/startup/startup',
}];

let pageViewList = [{
  name: '统计页面',
  path: '/page/API/pageview/pageview',
}];

let trackList = [{
  name: '统计事件',
  path: '/page/API/track/track',
}];

const superPropertyList = [{
  name: '通用属性',
  path: '/page/API/superProperty/superProperty',
}];

const userIDList = [{
  name: '设备ID与用户关联',
  path: '/page/API/userID/userID',
}];

const profileList = [{
  name: '用户属性',
  path: '/page/API/profile/profile',
}];

let resetList = [{
  name: '清除本地设置',
  path: '/page/API/reset/reset',
}];

let shareList = [{
  name: '分享',
  path: '/page/API/share/share',
}]
const APIList = [{
  type: '启动',
  list: startUpList,
},
{
  type: '统计页面',
  list: pageViewList,
},
{
  type: '统计事件',
  list: trackList,
},
{
  type: '通用属性',
  list: superPropertyList,
},
{
  type: '用户ID与设备ID',
  list: userIDList,
},
{
  type: '用户属性',
  list: profileList,
},
{
  type: '分享',
  list: shareList,
},
{
  type: '清除本地设置',
  list: resetList,
}

];

Page({
  data: {
    APIList,
  },
  onShow() { },
  onSearchBarTap() {
    my.navigateTo({
      url: '/page/common/search/search',
    });
  },
});