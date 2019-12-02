<template>
  <div class="main">
    <header class="top-nav__wrap">
      <div id="nav">
        <nav-menu>
          <div slot="nav-icon" class="web-logo" @click="navToHomeFn">
            <img src="@/assets/logo.png" alt="logo" />
            <div>
              <h1>Ease-vue</h1>
              <p>基于vue、element-ui的前端解决方案</p>
            </div>
          </div>
          <div slot="nav-sub">
            <!-- 页面功能模块 -->
            <top-nav-right></top-nav-right>
          </div>
        </nav-menu>
      </div>
    </header>
    <el-container>
      <el-aside :width="asideWidth">
        <aside-nav :asideNavArr="asideMainArr"></aside-nav>
      </el-aside>
      <el-main class="admin-main">
        <!-- tagView -->
        <scroll-bar></scroll-bar>
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// 引入导航
import NavMenu from "@/components/TopNav/NavMenu";
// 引入侧边导航
import AsideNav from "@/components/AsideNav/AsideNav";
// 引入滑动条
import ScrollBar from "@/components/scrollBar/scrollBar";
// 引入上方右侧功能模块
import TopNavRight from "@/components/TopNavRight/TopNavRight";

export default {
  name: "topAsidePage",
  components: {
    NavMenu,
    ScrollBar,
    AsideNav,
    TopNavRight
  },
  data() {
    return {
      asideWidth: "200px"
    };
  },
  created() {
    this.$Http
      .getRequest("/mock/api/user", {
        id: 1
      })
      .then(res => {
        console.log(res);
        console.log(this.navType);
      });
  },
  computed: {
    ...mapGetters({
      topMainArr: "auth/getTopMain",
      asideMainArr: "auth/getAsideMain"
    })
  },
  methods: {
    // 下拉菜单触发事件
    handleCommand(val) {
      this[val]();
    },
    // 跳转用户管理首页
    navToAdminHomeFn() {
      this.$router.push({
        path: this.asideMainArr[0].path
      });
    },
    // 跳转首页
    navToHomeFn() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
#nav {
  margin-bottom: 0px;
  padding: 0 30px;
}
.el-container {
  min-height: calc(100vh - 60px);
}
</style>
