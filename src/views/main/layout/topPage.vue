<template>
  <div class="main">
    <el-header
      :height="headHeight"
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
    </el-header>
    <el-container>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </el-main>
    </el-container>
    <footer>
      <div class="page-footer">
        Ease-vue@tomz_z
      </div>
    </footer>
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
      headHeight: "60px",
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
  .el-header {
    padding: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
    box-shadow: 0 0 3px #eee;
    box-sizing: border-box;
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
  min-height: calc(100vh - 160px);
  box-shadow: 0 0 3px #eee;
  .view {
    box-sizing: border-box;
    padding: 0;
  }
}
.page-footer {
  height: 100px;
  width: 100%;
  background: #fff;
  line-height: 100px;
}
</style>
