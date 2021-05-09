<template>
    <scroll class="contents" ref="menuscroll">
        <div class="menu-list">
            <div class="menu-list-item" v-for="(item,index) in menuList" :key="item" :class="{active: index === currentIndex}" @click="itemClick(index)">
                {{item.title}}
            </div>
        </div>
   </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'


export default {
    components: {
         Scroll 
    },    
    name:'categoryTabMenu',
    props:{
        menuList:{
            type:Array,
            default:[]
        }
    },
    data() {
        return {
            currentIndex:0
        }
    },
    methods: {
        itemClick(index){
            this.currentIndex = index
            this.$emit('showSubContent',index)
        },
        
    },
    updated() {
        this.$refs.menuscroll.refresh()
    },
    
}
</script>

<style scoped>
    .contents{
        width: 100px;
        height: 100%;
        background-color: #eee;
        box-sizing: border-box;
    }
    .menu-list{
        text-align: center;
        font-size: 14px;
    }
    .menu-list-item{
        height: 45px;
        line-height: 45px;
    }
    .menu-list-item.active{
        background-color: #fff;
        color: rgb(252, 93, 93);
        border-left: 3px solid rgb(252, 93, 93);
        font-weight: 600;
    }
</style>