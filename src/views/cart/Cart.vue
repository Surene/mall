<template>
  <div id="cart">
        <nav-bar class="nav"></nav-bar>
        <div v-if="getCarts.length> 0" class="cart-content">
            <scroll :probe-type="3" class="content" ref="scroll">
                <cart-item-list :carts="getCarts"></cart-item-list>
            </scroll>
            <cart-bottom-bar :price="getTotalPrice" :count="getCount"></cart-bottom-bar>
        </div>
        <div v-else class="empty">
            <scroll :probe-type="3" class="empty-content" ref="scrolls">
                <div class="empty-cart">
                购物车是空的
                </div>
                <div class="recommend">
                    <cart-recommend :recommend="recommend" @RecommendImageLoad="RecommendImageLoad"></cart-recommend>
                </div>
                
            </scroll>
        </div> 
  </div>   
</template>

<script>

import CartItemList from './childComs/CartItemList.vue'
import NavBar from './childComs/CartNavBar'
import CartBottomBar from './childComs/CartBottomBar'

import CartRecommend from 'views/detail/childComs/DetailRecommend'
import scroll from 'components/common/scroll/Scroll'
import {getRecommend} from 'network/cart'
export default {
    name:'cart',
    components:{
        NavBar,
        CartItemList,
        scroll,
        CartBottomBar,
        CartRecommend
    },
    data() {
        return {
            hasItem:true,
            recommend:[]
        }
    },
    methods: {
        //获取推荐数据
        getCartRecommend(){
            getRecommend().then(res => {
                this.recommend = res.data.data.list
            })
        },
        RecommendImageLoad(){
            this.$refs.scrolls && this.$refs.scrolls.refresh()
        }
    },
    computed:{
        //获取在vuex中计算好的价格
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
        //每次点进该页面进行一次刷新 以防卡顿
        this.$refs.scroll && this.$refs.scroll.refresh()
    },
    created(){
        this.getCartRecommend()
    }
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
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 18px;
    background-color: white;
    border-radius: 5%;
    border-bottom: 15px solid rgba(233, 225, 225, 0.685);
}

.empty-content{
    background-color: #fff;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;

    overflow: hidden;
}
</style>