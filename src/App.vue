<template>
  <div>
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>

</template>
<script>

import MainTabbar from './components/content/MainTabbar'


export default {
  name:"app",
  components:{
    MainTabbar
  }
}
</script>
<style>
@import 'assets/css/normalize.css'
</style>
