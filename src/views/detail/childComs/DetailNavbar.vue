<template>
  <nav-bar class="nav">
      <template v-slot:left-nav>
          <div class="left" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
           </div>
      </template>
      <template v-slot:center-nav>
          <div class="center">
            <div v-for="(item,index) in navData" :key="item" class="nav-item" 
            @click="itemClick(index)"
            :class="{active: index === currentIndex}">{{item}}</div>
          </div>
      </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:'detailNavbar',
    components:{
        NavBar
    },
    props:{
        currentIndex:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            navData:['商品','参数','评论','推荐'],
        }
    },
    methods:{
        itemClick(index){
            // this.currentIndex = index
            this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .nav{
        font-size: 14px;
        border-bottom: 1px solid rgb(184, 182, 182);
    }
    .center{
        display: flex;
    }

    .nav-item{
        flex: 1;
        
    }
    .left img{
        color: #000;
        margin-top: 12px;
        margin-left: 15px;
    }
    .active{
        color:var(--color-high-text)
    }
</style>