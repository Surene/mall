<template>
   <nav-bar class="navbar">
      <template v-slot:center-nav>
          <div class="center">
            商品分类
          </div>
      </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    components:{
        NavBar
    }
}
</script>

<style scoped>
    .navbar{
        color: #fff;
        background-color: var(--color-tint)
    }
</style>