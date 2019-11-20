/**
 * 全局路由配置
 * 没有头部和侧边导航条的页面
 */
const globalRoutes = [
  {
    name: "main",
    url: "/main",
    meta: {
      title: "main"
    },
    children: [
      {
        name: "Index", // 此后台管理页面不可删除
        isNavTable: true,
        position: "aside",
        type: "main",
        url: "/main/Index",
        meta: {
          icon: "index", // icon
          title: "管理首页", // 页面标题
          isAuth: true, // 是否需要授权
          layout: "topAsidePage", // 头部导航布局
          isNavFix: false // 头部导航是否固定
        }
      }
    ]
  },
  {
    name: "404",
    url: "/404",
    meta: {
      title: "404"
    }
  },
  {
    name: "login",
    url: "/login",
    meta: {
      title: "login"
    }
  }
];
export default globalRoutes;
