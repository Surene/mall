<template>
    <div id="category">
        <category-nav-bar></category-nav-bar>
        <div class="category-content">
            <category-tab-menu :menu-list="categories" @showSubContent="showSubContent" ></category-tab-menu>
            <scroll :probe-type="3" class="category-scroll" ref="scroll" @contentScroll="contentScroll">
                <category-sub-content :sub-category="subCategory" @subCategoryImgLoad="subCategoryImgLoad"></category-sub-content>
                <category-tab-control :titles="['综合','新品','销量']" @tabClick="tabClick"></category-tab-control>
                <category-sub-detail :category-detail="categoryDetail"></category-sub-detail>
            </scroll>
            <back-top @click.enter="backClick" v-show="isShowBackTop"></back-top>
        </div>
        
    </div>
</template>
<script>
import CategoryNavBar from './childComs/CategoryNavBar.vue'
import CategoryTabMenu from './childComs/CategoryTabMenu.vue'
import CategorySubContent from './childComs/CategorySubContent'
import categorySubDetail from './childComs/CategorySubDetail'

import CategoryTabControl from 'components/content/tabcontrol/TabControl.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backtop/BackTop.vue'

import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
import {debounce} from 'common/utils'


export default {
    name:'category',
    components: {
        CategoryNavBar,
        CategoryTabMenu,
        Scroll,
        CategorySubContent,
        CategoryTabControl,
        categorySubDetail,
        BackTop,
    },
    data() {
        return {
            categories:[],
            subContent:{},
            currentIndex:-1,
            currentType:'pop',
            isShowBackTop:false

        }
    },
    methods: {
        //getCategory,getSubcategory,getCategoryDetail 获取数据
        getCategory(){
            getCategory().then(res => {
                // console.log(res);
                //获取左侧数据
                this.categories = res.data.data.category.list
                //初始化右侧数据
                for (let index = 0; index < this.categories.length; index++) {
                    //数据模型
                    this.subContent[index] = {
                        //子分类数据
                        subCategories:{},
                        //子详情数据
                        subCategoryiesDetail:{
                            'pop':[],
                            'new':[],
                            'sell':[]
                        }
                    }
                }
                //第一个子类数据不用点击也需要请求
                this.getSubcategory(0)
            })  
        },
        getSubcategory(index){
            this.currentIndex = index
            const maitKey = this.categories[index].maitKey
            getSubcategory(maitKey).then(res => {
                // console.log(res);
                //获取当前分类的subCategories
                this.subContent[index].subCategories = res.data.data.list
                this.getCategoryDetail('pop')
                this.getCategoryDetail('new')
                this.getCategoryDetail('sell')
            })
        },
        getCategoryDetail(type){
            const miniWallkey = this.categories[this.currentIndex].miniWallkey
            getCategoryDetail(miniWallkey,type).then(res => {
                // console.log(res.data);
                //subCategoryiesDetail.type 是一个新属性 subCategoryiesDetail[type]是已有属性
                this.subContent[this.currentIndex].subCategoryiesDetail[type] = res.data
            })
        },
        //根据点击的分类获取不同的数据
        showSubContent(index){
            this.getSubcategory(index)
        },
        //监听分类图片加载完成
        subCategoryImgLoad(){
            const refresh = debounce(() => {
                this.$refs.scroll && this.$refs.scroll.refresh()
            },50)
            refresh()
        },
        //根据选项卡切换数据
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
        },
        //置顶
        backClick(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
        contentScroll(position){
            //监听何时显示指定图标
            this.isShowBackTop = (-position.y) > 1000
        }


    },
    computed:{
        subCategory(){
            if (this.currentIndex === -1) return {}
            if (this.subContent) {
                return this.subContent[this.currentIndex].subCategories    
            }
            
        },
        categoryDetail(){
            if (this.currentIndex === -1) return {}
            if (this.subContent) {
                return this.subContent[this.currentIndex].subCategoryiesDetail[this.currentType]
            }
        }
    },
    created() {
        this.getCategory()
    },
    mounted () {
        //时间总线接受图片加载完成事件并刷新
        this.$eventBus.on('itemImageLoad',() => {
            this.$refs.scroll.refresh()
        })
    },
    activated() {
        this.$refs.scroll.refresh()
    },

}
</script>
<style scoped>
#category{
    height: 100vh;
}
    .category-content{
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
        overflow: hidden;

        display: flex;
    }
    .category-scroll{
        
        height: 100%;
        flex: 1;
    }
</style>