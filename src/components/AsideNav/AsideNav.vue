<template>
  <ul class="child-menu">
    <li v-for="(item, i) in asideNavArr" :key="i" class="list">
      <div class="child-menu-list" v-if="item.isNavTable">
        <div v-if="item.children && item.children.length">
          <div class="child-menu-title" @click="showChildFn(i)">
            <p>
              <i class="icon-2"></i>
              <span>{{ $t(item.meta.title) }}</span>
            </p>
            <i
              class="el-icon-arrow-right"
              v-if="navIndex + '' + i === isShow"
            ></i>
            <i class="el-icon-arrow-down" v-else></i>
          </div>
          <transition name="slide" mode="in-out">
            <div
              class="child-menu-list-wrap"
              v-if="navIndex + '' + i === isShow"
            >
              <aside-nav
                :asideNavArr="item.children"
                :navIndex="navIndex + 1"
              ></aside-nav>
            </div>
          </transition>
        </div>
        <div v-else>
          <router-link
            class="child-menu-title link"
            :to="item.path"
            v-if="item.isNavTable"
          >
            <i :class="'icon-' + item.meta.icon"></i>
            {{ $t(item.meta.title) }}
          </router-link>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "AsideNav",
  props: {
    asideNavArr: {
      type: Array,
      default() {
        return [];
      }
    },
    navIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    // 展示子组件
    showChildFn(i) {
      if ("" + this.navIndex + i === this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = "" + this.navIndex + i;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../style/font.less");
.child-menu-list {
  min-height: 50px;
  line-height: 50px;
  .child-menu-title {
    padding-left: 10px;
    padding-right: 20px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    box-sizing: border-box;
  }
  .child-menu-title:hover {
    background: #555;
    color: rgb(95, 233, 141);
  }
  .router-link-active {
    border-right: 2px solid rgb(70, 141, 94);
    color: rgb(65, 134, 88);
  }
}
.child-menu-list-wrap {
  .child-menu-list {
    padding: 0;
    padding-left: 15px;
    border: 0;
    transition: height 0.8s;
    overflow: hidden;
    .child-menu-title {
      display: flex;
      align-items: center;
      font-size: 16px;
      border: 0;
      width: auto;
      white-space: nowrap;
      user-select: none;
    }
    .router-link-active {
      border-right: 2px solid rgb(70, 141, 94);
      color: rgb(65, 134, 88);
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.6s;
  max-height: 300px;
  overflow: hidden;
}
.slide-enter,
.slide-leave-to {
  max-height: 0;
}
</style>
