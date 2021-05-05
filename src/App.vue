<template>
    <router-view v-slot="{ Component }">
      <!-- exclude="detail" 需要每次重新创建详情页来请求不同的数据 -->
      <keep-alive exclude="detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tabbar></main-tabbar>
</template>
<script>

import MainTabbar from 'components/content/maintabbar/MainTabbar'


export default {
  name:"app",
  components:{
    MainTabbar,
  }
}
</script>
<style>
@import 'assets/css/base.css'
</style>
