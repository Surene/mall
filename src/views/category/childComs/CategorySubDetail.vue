<template>
  <goods-list :goods="categoryDetail" v-if="categoryDetail"></goods-list>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList.vue"

export default{
    name:'categorySubDetail',
    components:{
         GoodsList,
    },
    props:{
        categoryDetail:{
            type:Object,
            default:[]
        }
    }
    
}
</script>

<style>

</style>