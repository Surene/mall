<template>
    <div class="tabbar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="{active: activeStyle}"><slot name="item-text"></slot></div>   
    </div>
</template>
<script>
export default {
    name:'TabbarItem',
    props:{
        path:{
            type:String,
            default:'/home'
        },
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive?{"color":this.activeColor}:{}
        }

    },
    methods: {
        itemClick(){
            //this.isActive = !this.isActive
            this.$router.replace(this.path)
        }
    },
}
</script>
<style>
    .tabbar-item{
    flex: 1;
    text-align: center;
    color: rebeccapurple;
    height: 49px;
  }
    .tabbar-item img{
        width: 24px;
        height: 24px;
        font-size: 16px;
    }
</style>