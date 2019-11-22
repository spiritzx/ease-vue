import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

// 按需引入element-ui
import "./ui/element";
// axios请求封装
import Http from "./http/http";
// 国际化
import i18n from "./language/lang";

// 挂载404页面路由
const notFound = {
  path: "*",
  redirect: "/404"
};
// 需要进行拦截的请求
Vue.prototype.$Http = Http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created() {
    // 拼接404路由
    this.$router.addRoutes([notFound]);
  }
}).$mount("#app");
