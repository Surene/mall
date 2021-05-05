<template>
  <div v-for="item in carts" :key="item" class="cart-list">
      <cart-item :item="item"></cart-item>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
    name:'cartItemList',
    components:{
        CartItem
    },
    props:{
        carts:{
            type:Array,
            default:[]
        }
    },
}
</script>

<style scoped>
.cart-list{
    width: 100%;
    padding-bottom: -49px;
}
</style>