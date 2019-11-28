<template>
  <div class="top-nav-right">
    <div class="top-right__item">
      <el-dropdown @command="selectLangFn">
        <span class="el-dropdown-link">
          {{ style }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="cn">白天</el-dropdown-item>
          <el-dropdown-item command="en">黑夜</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="top-right__item">
      <el-dropdown @command="selectLangFn">
        <span class="el-dropdown-link">
          {{ lang }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="cn">中文</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="top-right__item" v-if="activeRouter">
      <el-dropdown
        @command="handleCommand"
        v-if="$store.getters['auth/getAuthTagFn']"
      >
        <span class="el-dropdown-link">
          admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="navToAdminHomeFn">
            {{ $t("my") }}
          </el-dropdown-item>
          <el-dropdown-item command="logout">
            {{ $t("logout") }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div @click="navToLoginFn" class="login-btn" v-else>
        {{ $t("login") }}
      </div>
    </div>
  </div>
</template>
<script>
// 获得vuex
import { mapGetters } from "vuex";
// 是否需要动态路由
import { activeRouter } from "@/config/globalConfig";
// 引入用户授权操作
import Auth from "@/utils/auth";

export default {
  name: "TopNavRight",
  data() {
    return {
      activeRouter: activeRouter,
      lang: "cn",
      style: "白天"
    };
  },
  computed: {
    ...mapGetters({
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
      this.$router.push(this.asideMainArr[0].path);
    },
    // 跳转登录页
    navToLoginFn() {
      this.$router.push({
        path: "/login"
      });
    },
    // 退出登录
    logout() {
      Auth.removeAuth();
      location.reload(true);
    },
    // 选择语言
    selectLangFn(name) {
      this.lang = name;
      this.$i18n.locale = name;
    }
  }
};
</script>
<style lang="less" scoped>
.top-nav-right {
  display: flex;
  .top-right__item {
    margin-left: 20px;
    cursor: pointer;
    background: #f5f5f5;
    padding: 5px 10px;
    border-radius: 4px;
  }
}
</style>
