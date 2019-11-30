<template>
  <div
    id="app"
    :class="
      $store.getters['auth/getUser']
        ? $store.getters['auth/getUser'].style
        : 'default'
    "
  >
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import url("./style/base.less");
</style>
