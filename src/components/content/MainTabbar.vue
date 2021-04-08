<template>
    <div>
        <tab-bar>
            <tabbar-item path='/home'>
                <template  v-slot:item-icon>
                    <img src="assets/img/tabbar/home.svg" alt="home">
                </template>
                 <template  v-slot:item-icon-active>
                    <img src="assets/img/tabbar/home_active.svg" alt="home">
                </template>
                <template v-slot:item-text>
                    <div>首页</div>
                </template> 
            </tabbar-item>
            <tabbar-item path='/catagory'>
                <template  v-slot:item-icon>
                    <img src="assets/img/tabbar/catagory.svg" alt="catagory">
                </template>
                 <template  v-slot:item-icon-active>
                    <img src="assets/img/tabbar/catagory_active.svg" alt="catagory_active">
                </template>
                <template v-slot:item-text>
                    <div>分类</div>
                </template>
            </tabbar-item>
            <tabbar-item path='/cart'>
                <template  v-slot:item-icon>
                    <img src="assets/img/tabbar/cart.svg" alt="cart">
                </template>
                 <template  v-slot:item-icon-active>
                    <img src="assets/img/tabbar/cart_active.svg" alt="cart_active">
                </template>
                <template v-slot:item-text>
                    <div>购物车</div>
                </template>
            </tabbar-item>
            <tabbar-item path='/profile'>
                <template  v-slot:item-icon>
                    <img src="assets/img/tabbar/profile.svg" alt="profile">
                </template>
                 <template  v-slot:item-icon-active>
                    <img src="assets/img/tabbar/profile_active.svg" alt="profile_active">
                </template>
                <template v-slot:item-text>
                    <div>我的</div>
                </template>
            </tabbar-item>
            
        </tab-bar>
    </div>
</template>
<script>

import Tabbar from '../common/tabbar/tabbar'
import TabbarItem from '../common/tabbar/tabbarItem'
export default {
    name:'MainTabbar',
    components:{
        Tabbar,
        TabbarItem
    }
}
</script>
<style>

</style>