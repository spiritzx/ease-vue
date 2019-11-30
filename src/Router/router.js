import Vue from "vue";
import Router from "vue-router";
import store from "../store/store";
import storage from "../utils/storage";
import mainRoutes from "@/config/mainRoute.config.js";
import globalRoutes from "@/config/globalRoute.config.js";
import http from "@/http/http";
// 项目配置
import { activeRouter } from "@/config/globalConfig";

Vue.use(Router);

let routerFlag = false;

// 生成动态路由
function createRouterMenuFn(menu, index = 1) {
  menu.forEach(val => {
    val.path = val.url.replace("/main", "");
    let urlArr = val.url.split("/");
    let _name = urlArr[urlArr.length - 1];
    val.title = _name;
    val.name = _name;
    val.component = () => import(`@/views${val.url}/${_name}`);
    if (val.children && val.children.length) {
      val.redirect = val.children[0].url.replace("/main", "");
      createRouterMenuFn(val.children, ++index);
    }
  });
}

// 集成本地路由
routerFlag = storage.getUserMenuList();
console.log(routerFlag);
if (routerFlag) {
  globalRoutes[0].children = mainRoutes
    .concat(globalRoutes[0].children)
    .concat(routerFlag);
} else {
  globalRoutes[0].children = mainRoutes.concat(globalRoutes[0].children);
}

let routers = globalRoutes;
createRouterMenuFn(globalRoutes);

/**
 * 筛选出导航路由
 * @param {*} list 菜单列表
 */

function filterRouterMenuFn(list) {
  const topMain = [];
  const topSub = [];
  const asideMain = [];
  list.forEach(val => {
    if (val.position === "top" && val.type === "main" && val.isNavTable) {
      topMain.push(val);
    } else if (val.position === "top" && val.type === "sub" && val.isNavTable) {
      topSub.push(val);
    } else if (
      val.position === "aside" &&
      val.type === "main" &&
      val.isNavTable
    ) {
      asideMain.push(val);
    }
  });
  store.dispatch("auth/setTopMain", JSON.stringify(topMain));
  store.dispatch("auth/setTopSub", JSON.stringify(topSub));
  store.dispatch("auth/setAsideMain", JSON.stringify(asideMain));
}

const RouterObj = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routers
});

// 权限验证
RouterObj.beforeEach((to, from, next) => {
  let isLogin = storage.getUserToken();
  let userInfo = storage.getUserInfo();
  store.dispatch("auth/setAuthTagFn", !!isLogin);
  store.dispatch("auth/setUserFn", userInfo);
  store.dispatch("page/setViewLayout", to.meta.layout);
  if (to.name == "login" && isLogin) {
    next({ path: "/" });
    return;
  }
  if (to.meta.isAuth) {
    let _to = {
      path: to.path,
      title: to.meta.title,
      active: false
    };
    store.dispatch("page/setTagViewFn", _to); // 页面预览标签
    store.dispatch("page/setTagActiveFn", to.path); // 当前页面路径
    if (isLogin) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next();
  }
});
// 添加动态路由
RouterObj.afterEach(to => {
  let isLogin = storage.getUserToken();
  let _routers = routers[0];
  let routerArr = routers[0].children;
  document.title = to.meta.title;
  if (isLogin) {
    if (activeRouter) {
      if (!routerFlag) {
        http.getRequest("/mock/api/menuList").then(res => {
          _routers.children = res.menuList;
          storage.savaUserMenuList(res.menuList);
          createRouterMenuFn([_routers]);
          RouterObj.addRoutes([_routers]); // 添加动态路由
          // 集成动态路由
          routerArr = routerArr.concat(_routers.children);
          filterRouterMenuFn(routerArr); // 筛选动态路由中菜单路由
          routerFlag = true;
        });
      } else {
        if (routerFlag !== true) {
          filterRouterMenuFn(routerArr);
        }
      }
    } else {
      filterRouterMenuFn(routerArr);
    }
  } else {
    // 没有登陆
    filterRouterMenuFn(routerArr);
  }
});
export default RouterObj;
