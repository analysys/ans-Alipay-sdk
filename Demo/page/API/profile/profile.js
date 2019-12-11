let app = getApp()
let AnalysysAgent = my.AnalysysAgent
Page({
  onLoad() {},
  data: {},
  onShow() {},
  profileSetOnce: () => {
    AnalysysAgent.profileSetOnce("activationTime", 1521280551929);
  },
  profileSetOnceMore: () => {
    let setOnceProfile = {
      "birth": 548798705000,
      "sex": "male"
    }
    AnalysysAgent.profileSetOnce(setOnceProfile);
  },
  profileSet: () => {
    AnalysysAgent.profileSet("Email", "yonghu@163.com");
  },
  profileSetMore: () => {
    let property = {
      "Email": "yonghu@163.com",
      "WeChatID": "weixinhao"
    }
    AnalysysAgent.profileSet(property);
  },
  profileIncrement: () => {
    AnalysysAgent.profileIncrement("age", 1);
  },
  profileIncrementMore: () => {
    let incrementProfile = {
      "gameAge": 1,
      "gameRating": 2
    }
    AnalysysAgent.profileIncrement(incrementProfile);
  },
  profileAppend: () => {
    let list = ["PlayBasketball", "music"];
    AnalysysAgent.profileAppend("hobby", list);
  },
  profileUnset: () => {
    AnalysysAgent.profileUnset("age");
  },
  profileDelete: () => {
    AnalysysAgent.profileDelete();
  }
});