<template>
    <router-view v-slot="{ Component }">
      <keep-alive>
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
    MainTabbar
  }
}
</script>
<style>
@import 'assets/css/base.css'
</style>
