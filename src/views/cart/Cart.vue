<template>
  <div id="cart">
        <nav-bar class="nav"></nav-bar>
        <scroll :probe-type="3" class="content">
            <cart-item-list :carts="getCarts"></cart-item-list>
        </scroll>
        <cart-bottom-bar :total-price="getTotalPrice" :count="getCount"></cart-bottom-bar>
  </div>
</template>

<script>

import CartItemList from './childComs/CartItemList.vue'
import NavBar from './childComs/CartNavBar'
import CartBottomBar from './childComs/CartBottomBar'

import scroll from 'components/common/scroll/Scroll'

export default {
    name:'cart',
    components:{
        NavBar,
        CartItemList,
        scroll,
        CartBottomBar
    },
    computed:{
        getCarts(){
            return this.$store.getters.getItemList
        },
        getTotalPrice(){
            return this.$store.getters.getTotalPrice
        },
        getCount(){
            return this.$store.getters.getCount
        }
    }
}
</script>

<style scoped>
#cart{
        height: 100vh;
        position: relative;
    }
.content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
}
</style>