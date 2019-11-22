/**
 * 不需要授权的页面配置
 * 如果清空就是单纯的后台管理页面
 * name： 文件目录名
 * isNavTable: 是否在菜单显示路由
 * position：路由显示在页面的位置
 * type: 类型
 * icon: 路由图标名
 * url：路由路径
 * meta：页面配置属性
 * children： 子菜单
 */
const mainRoutes = [
  {
    name: "Home",
    isNavTable: true,
    position: "top",
    type: "main",
    icon: "",
    url: "/main/Home",
    meta: {
      title: "home", // 页面标题
      isAuth: false, // 是否需要授权
      layout: "topPage", // 头部导航布局
      isNavFix: true // 头部导航是否固定
    }
  },
  {
    name: "About",
    isNavTable: true,
    position: "top",
    type: "main",
    url: "/main/About",
    meta: {
      title: "about",
      isAuth: false,
      layout: "topPage"
    }
  },
  {
    name: "demo",
    isNavTable: true,
    position: "top",
    type: "main",
    url: "/main/demo",
    meta: {
      title: "demo",
      isAuth: false,
      layout: "topPage"
    },
    children: [
      {
        name: "demo-1",
        isNavTable: true,
        url: "/main/demo/demo1",
        meta: {
          title: "demo_1",
          isAuth: false,
          layout: "topPage"
        }
      },
      {
        name: "demo-2",
        isNavTable: true,
        url: "/main/demo/demo2",
        meta: {
          title: "demo_2",
          isAuth: false,
          layout: "topPage"
        }
      }
    ]
  }
];
export default mainRoutes;
