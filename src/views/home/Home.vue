<template lang>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center-nav>
                <div>
                    购物商城
                </div>
            </template>
        </nav-bar>
        <!-- 选项卡吸顶效果 -->
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" 
        ref="tab1" v-show="isTabFixed" class="tab-control"></tab-control>
        <!-- 滚动bug出现原因 在图片加载完之前已经确定了scrollHeight的高度 -->
        <home-scroll class="home-content" ref="scroll" 
        @contentScroll="showContent" :probe-type="3" @pullingUp="loadMore">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <home-recommend :recommends="recommends"></home-recommend>
            <home-popular></home-popular>
            <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tab2"></tab-control>
            <goods-list :goods="getGoods"></goods-list>
        </home-scroll>
        <back-top @click.enter="backClick" v-show="isShowBackTop"></back-top>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'
import HomeScroll from 'components/common/scroll/Scroll'

import HomeSwiper from './childComs/HomeSwiper'
import HomeRecommend from './childComs/HomeRecommend.vue'
import HomePopular from './childComs/HomePopular.vue'


import {getMultidata,getGoodsdata} from 'network/home.js'


export default {
    name:'home',
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommend,
        HomePopular,
        TabControl,
        GoodsList,
        BackTop,
        HomeScroll,
    },
    data() {
        return {
            banners:[],      
            recommends:[],
            // titles:[],
            goods:{
                'new':{
                    page:0,
                    list:[]
                },
                'pop':{
                    page:0,
                    list:[]
                },
                'sell':{
                    page:0,
                    list:[]
                } 
            },
            currentType:'pop',
            isShowBackTop:false,
            isTabFixed:false,
            tabOffSetTop:100,
            getPositionY:0
        }
    },
    methods: {
        //请求主页非商品数据
        getHomeMultidata(){
            getMultidata().then(res => {
                // console.log(res.data.data.recommend.list);
                this.banners = res.data.data.banner.list
                this.recommends = res.data.data.recommend.list
            })
        },
        //获取主页商品数据
        getHomeGoodsdata(type){
            const page = this.goods[type].page + 1
            getGoodsdata(type,page).then(res => {
                // console.log(res.data.data.list);
                this.goods[type].list.push(...res.data.data.list)
                this.goods[type].page += 1
                //完成上拉加载更多
                this.$refs.scroll.finishPullUp()
            })
        },
        //切换选项卡
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
            this.$refs.tab1.currentType = index
            this.$refs.tab2.currentType = index
        },
        //瞬间置顶 
        backClick(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        showContent(position){
            //判断置顶图标是否显示
            this.isShowBackTop = (-position.y) > 1000
            //判断何时吸顶
            this.isTabFixed = (-position.y) > this.tabOffSetTop
            // console.log(this.tabOffSetTop);
        },
        //上拉加载更多 也可以使用钩子函数activated
        loadMore(){
            this.getHomeGoodsdata(this.currentType)
            this.$refs.scroll.refresh()
        },
        //防抖函数
        debounce(func,delay){
            let timer = null
            return function(...args){
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    func.apply(this,args)
                }, delay);
                
            }
        },
        swiperImageLoad(){
            this.tabOffSetTop = this.$refs.tab2.$el.offsetTop
        }

    },
    created() {
        //当组件被创建时请求数据
        this.getHomeMultidata()
        this.getHomeGoodsdata('pop')
        this.getHomeGoodsdata('new')
        this.getHomeGoodsdata('sell')
    },
    computed:{
        getGoods(){
            return this.goods[this.currentType].list
        }
    },
    mounted () {
        //接受图片加载完成事件
        const refresh = this.debounce(() =>{
            this.$refs.scroll.refresh
        },50)
        this.$eventBus.on('imageLoad',() => {
            //执行频率很高 进行防抖处理
            refresh()
        })
    },
    activated() {
        //回到页面时 重新滚动到上次的位置
        this.$refs.scroll.scrollTo(0,this.getPositionY,0)
        //如果不刷新 回到下次页面时 scrollHieght可能被改变导致不能滚动
        this.$refs.scroll.refresh()
    },
    deactivated() {
        //在离开页面时 保存页面所在位置时
        this.getPositionY = this.$refs.scroll.scroll.y
    },
}
</script>
<style scoped>
    #home{
        /* vH：视口高度 */
        height: 100vh;
        position: relative;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: white;
    }
    .home-content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        right: 0;
        left: 0;
        overflow: hidden;
    
        /* height: calc(100%-93px);
        overflow: hidden;
        margin-top: 44px; */
    }
    .tab-control{
        /* 在BScroll里 使用定位会导致突然脱离标准流 出现向上瞬间提的bug 而且并不能很好的展示吸顶效果*/
        /* position: fixed;
        top: 44px;
        left: 0;
        right: 0; */

        position:relative;
        z-index: 9;
    }
</style>