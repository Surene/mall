<template>
  <div id="cart">
        <nav-bar class="nav"></nav-bar>
        <div v-if="getCarts.length> 0" class="cart-content">
            <scroll :probe-type="3" class="content" ref="scroll">
                <cart-item-list :carts="getCarts"></cart-item-list>
            </scroll>
            <cart-bottom-bar :price="getTotalPrice" :count="getCount"></cart-bottom-bar>
        </div>
        <div v-else class="empty-cart">
            购物车是空的
        </div> 
  </div>   
</template>

<script>

import CartItemList from './childComs/CartItemList.vue'
import NavBar from './childComs/CartNavBar'
import CartBottomBar from './childComs/CartBottomBar'

import scroll from 'components/common/scroll/Scroll'
import {debounce} from 'common/utils'
export default {
    name:'cart',
    components:{
        NavBar,
        CartItemList,
        scroll,
        CartBottomBar
    },
    data() {
        return {
            hasItem:true
        }
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
    },
    mounted () {
        //接受图片加载完成事件
        this.$eventBus.on('cartImageLoad',() => {
            this.$refs.scroll && this.$refs.scroll.refresh()
        })
    },
    activated() {
        this.$refs.scroll && this.$refs.scroll.refresh()
    },
}
</script>

<style scoped>
#cart{
        height: 100vh;
        position: relative;
    }
.content{
    background-color: #fff;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 87px;
    
    /* height: calc(100% - 44px - 37px - 49px); */
    overflow: hidden;
}
.empty-cart{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 18px;
    border-bottom: 1px solid rgba(129, 129, 129, 0.685);
}
</style>