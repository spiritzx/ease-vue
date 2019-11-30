/**
 * 用户授权操作
 */
import storage from "./storage";
import store from "@/store/store";
// 重置用户
function removeAuth() {
  storage.deleteUserMenuList();
  storage.deleteUserToken();
  storage.deleteUserInfo();
}
// 更新用户信息
function setUserInfoFn(obj) {
  let userInfo_vuex = store.getters["auth/getUser"]
    ? store.getters["auth/getUser"]
    : {};
  let userInfo = {};
  Object.assign(userInfo, userInfo_vuex, obj);
  store.dispatch("auth/setUserFn", userInfo);
  storage.savaUserInfo(userInfo);
}

export default {
  removeAuth,
  setUserInfoFn
};
