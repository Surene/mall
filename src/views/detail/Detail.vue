<template>
    <div id="detail">
        <detail-navbar class="detail-navbar" @titleClick="titleClick" :current-index="currentIndex"></detail-navbar>
        <detail-scroll class="content" ref="scroll" :probe-type="3" @contentScroll="contentScroll">
            <detail-swiper :topImages="topImages" ref="baseInfo"></detail-swiper>
            <detail-info :detailItem="detailItem"></detail-info>
            <detail-shop :shopInfo="shopInfo"></detail-shop>
            <detail-goods :goodsInfo="goodsInfo" @goodImageLoad="goodImageLoad"></detail-goods>
            <detail-params :params="params" ref="paramInfo"></detail-params>
            <detail-comment :comments="comments" ref="commentInfo"></detail-comment>
            <detail-recommend :recommend="recommend" @RecommendImageLoad="RecommendImageLoad" ref="recommendInfo"></detail-recommend>
        </detail-scroll>
        <detail-bottom-bar class="detail-bottom" @addCart="addCart"></detail-bottom-bar>
        <back-top v-show="isBackTop" @click.enter="backClick"></back-top>
    </div>
</template>
<script>
import DetailNavbar from './childComs/DetailNavbar'
import DetailSwiper from './childComs/DetailSwiper'
import DetailInfo from './childComs/DetailInfo'
import DetailShop from './childComs/DetailShop'
import DetailGoods from './childComs/DetailGoods'
import DetailParams from './childComs/DetailParams.vue'
import DetailComment from './childComs/DetailComment.vue'
import DetailRecommend from './childComs/DetailRecommend.vue'
import detailBottomBar from './childComs/DetailBottomBar'

import BackTop from 'components/content/backtop/BackTop.vue'
import DetailScroll from 'components/common/scroll/Scroll'

import {getDetail,getRecommend,detailItem,detailComment} from 'network/detail'
import {debounce} from 'common/utils'





export default {
    name:'detail',
    components:{
        DetailNavbar,
        DetailSwiper,
        DetailInfo,
        DetailShop,
        DetailScroll,
        DetailGoods,
        DetailParams,
        DetailComment,
        DetailRecommend,
        BackTop,
        detailBottomBar
    },
    data() {
        return {
            iid:'',
            // 参数分别对应每个组件传入的参数
            topImages:[],
            detailItem:{},
            shopInfo:{},
            goodsInfo:{},
            params:{},
            comments:{},
            recommend:[],
            isBackTop:false,
            themeTops:[],
            currentIndex:0,
        }
    },
    methods: {
        //获取详情页的数据
        getDetailData() {
            //设置一个iid是为了保存记录请求到的数据
            // this.iid = this.$route.params.iid
            this.iid = this.$route.query.iid
            //获取到的是详情页的全部数据 数据量非常大 所以要使用不同的对象分离数据方便处理
            getDetail(this.iid).then(res => {    
                console.log(res);
                const datas = res.data.result
                this.topImages = datas.itemInfo.topImages
                this.detailItem = new detailItem(datas.itemInfo,datas.columns,datas.shopInfo.services)
                this.shopInfo = datas.shopInfo
                this.goodsInfo = datas.detailInfo
                this.params= datas.itemParams
                if (datas.rate.list !== undefined) {
                    this.comments = new detailComment(datas.rate.list[0],datas.rate.list[0].user)   
                }
            })
        },
        // 获取详情页推荐数据(全都是固定数据没什么意思，应该由大数据推送可能喜欢或者相关)
        getDetailRecommend(){
            getRecommend().then(res => {
                // 不同浏览器这个位置略有不同 chrome包装了一层data edge没有
                this.recommend = res.data.data.list
            })
        },
        // 防抖
        detailRefresh(){
            const refresh = debounce(() => {
                this.$refs.scroll.refresh()
            },20)
            refresh()
        },
        // 下面三个函数为了监听图片加载完成，对页面做一次刷新（刷新可滚动高度）
        swiperImageLoad(){
            this.detailRefresh()
        },
        goodImageLoad(){
            this.detailRefresh()
        },
        RecommendImageLoad(){
            this.detailRefresh()
            //获取offsetTop值必须要dom和数据都渲染完成之后
            const getThemeTop = debounce(() => {
                this.getThemeTops()
            },200)
            getThemeTop()
        },
        backClick(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        // 监听当前滚动位置完成功能
        contentScroll(position){
            //判断何时显示指定图标
            this.isBackTop =  (-position.y) > 1000
            //监听滚动到哪个主题
            this.listenThemeTops(-position.y)
        },
        //主题和滚动到指定位置由两部分完成 一部分是点击滑动 一部分是滚轮跟随变化
        listenThemeTops(pos){
            for (let index = 0; index < this.themeTops.length; index++) {
                const themePos = this.themeTops[index]
                if (pos >= themePos && pos < this.themeTops[index+1]) {
                    if (this.currentIndex !== index) {
                        //判等=== 赋值= 
                        this.currentIndex = index
                    }
                    break
                }
            }
        },
        // 获取保存各个主题的offSetTop值
        getThemeTops(){
            //不能在created中使用 会出现组件还没被创建但函数已经执行的问题
            //不能在mounted使用 dom已经渲染但数据可能没有完全加载 获取的值都是不准确的
            this.themeTops = []
            this.themeTops.push(this.$refs.baseInfo.$el.offsetTop)
            this.themeTops.push(this.$refs.paramInfo.$el.offsetTop) 
            this.themeTops.push(this.$refs.commentInfo.$el.offsetTop) 
            this.themeTops.push(this.$refs.recommendInfo.$el.offsetTop)  
            this.themeTops.push(Number.MAX_VALUE)
            // console.log(this.themeTops);
        },
        //通过当前的高度值判断该怎么滚动
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTops[index],120)
        },
        //讲添加的购物车信息加入vuex中
        addCart(){
            // 创建对象模型
            const product = {}
            //productInfo
            product.iid = this.iid
            product.desc = this.goodsInfo.desc
            product.title = this.detailItem.title
            product.price = this.detailItem.price
            product.image = this.topImages[0]

            // 添加到vuex中
            this.$store.commit('addToCart',product)
        }
    },
    created() {
        this.getDetailData()
        this.getDetailRecommend()
    },
    mounted() {
        this.detailRefresh() 
    },
    //当图片使用懒加载的方式 在此处获取值
    // updated() {
    //     this.getThemeTops()
    // },
}
</script>
<style scoped>
    #detail{
        height: 100vh;
        position: relative;
        z-index: 1;
        background-color: #fff;
    }
    .content{
        background-color: #fff;
        /* height: calc(100%-44px); */
        position: absolute;
        top: 44px;
        bottom: 58px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
    .detail-bottom{
        position: fixed;
        width: 100%;
        bottom: 0;
        background: #fff;
    }
</style>