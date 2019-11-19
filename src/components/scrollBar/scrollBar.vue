<template>
  <div class="scrollbar">
    <div ref="wrapper" class="scroll-bar-wrap">
      <div
        class="scroll-bar-content scroll-bar-row"
        :style="{ width: scrollBallWidth + 'px' }"
      >
        <div class="scroll-bar-item" v-for="(item, i) in tagViews" :key="i">
          <el-tag
            type="info"
            closable
            :class="{ active: item.active }"
            @close="closeTagFn(i)"
          >
            <router-link :to="item.path">
              <span>{{ item.title }}</span>
            </router-link>
          </el-tag>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";

export default {
  name: "scrollBar",
  data() {
    return {
      scroll: null,
      visible: true,
      scrollBallWidth: 0,
      tagViews: []
    };
  },
  created() {
    let tag = (this.tagViews = this.$store.getters["page/getTagViewFn"]);
    this.scrollBallWidth = tag.length * 120;
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        click: true
      });
    });
  },
  watch: {
    tagViews(newValue) {
      this.scrollBallWidth = newValue.length * 120;
    }
  },
  methods: {
    // 关闭标签
    closeTagFn(i) {
      if (this.tagViews.length > 1) {
        this.tagViews.splice(i, 1);
        this.$router.replace(this.tagViews[this.tagViews.length - 1].path);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.scrollbar {
  position: relative;
  background: #fff;
}
.scrollbarMenu {
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  text-align: center;
  width: 4%;
  height: 30px;
  line-height: 30px;
  font-size: 24px;
  box-shadow: 0px 0px 6px #999;
}
.scroll-bar-wrap {
  width: 100%;
  height: 30px;
  overflow: hidden;
  box-shadow: 0px 0px 6px #999;
  text-align: left;
  .scroll-bar-row {
    white-space: nowrap;
    display: inline-flex;
    height: 30px;
    background: #fff;
    overflow: hidden;
    padding: 0 20px;
    .scroll-bar-item {
      width: 100px;
      height: 30px;
      margin-right: 20px;
      a {
        color: #333;
      }
      .active {
        background: #64bf0a;
        a {
          color: #fff;
        }
      }
      .el-tag {
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        overflow: hidden;
      }
    }
  }
}
</style>
