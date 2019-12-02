<template>
  <div class="main">
    <header
      class="top-nav__wrap"
      :class="{
        fixNav: $route.meta.isNavFix,
        navBg: $store.getters['page/getNavBg']
      }"
    >
      <div id="topNav">
        <nav-menu :navArr="topMainArr" :navPosition="navPosition">
          <div slot="nav-icon" class="web-logo" @click="navToHomeFn">
            <img src="@/assets/logo.png" alt="logo" />
            <div>
              <h1>Ease-vue</h1>
              <p>基于vue、element-ui的PC端解决方案</p>
            </div>
          </div>
          <div slot="nav-sub">
            <!-- 页面功能模块 -->
            <top-nav-right></top-nav-right>
          </div>
        </nav-menu>
      </div>
    </header>
    <el-main>
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </el-main>
    <!-- <footer>
      <div class="page-footer">
        Ease-vue@tomz_z
      </div>
    </footer> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// 引入导航
import NavMenu from "@/components/TopNav/NavMenu";
// 引入上方右侧功能模块
import TopNavRight from "@/components/TopNavRight/TopNavRight";

export default {
  name: "topPage",
  components: {
    NavMenu,
    TopNavRight
  },
  data() {
    return {
      navPosition: "nav-left"
    };
  },
  created() {},
  computed: {
    ...mapGetters({
      topMainArr: "auth/getTopMain"
    })
  },
  methods: {
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
  position: relative;
  .top-nav__wrap {
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
  }
  .fixNav {
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    border: 0;
    box-shadow: none;
    z-index: 999;
  }
  .login-btn {
    cursor: pointer;
  }
  .navBg {
    background: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 0 3px #eee;
  }
}
#topNav {
  margin-bottom: 0px;
  padding: 0 30px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  z-index: 99;
  background: rgba(255, 255, 255, 0.3);
}
.el-main {
  padding: 0;
  background: #fff;
  height: 100%;
  .view {
    box-sizing: border-box;
    padding: 0;
    height: 100%;
  }
}
.page-footer {
  height: 100px;
  width: 100%;
  background: #fff;
  line-height: 100px;
}
</style>
