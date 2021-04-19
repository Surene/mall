<template lang="">
    <div class="good-item">
        <img :src="goodsItem.show.img" class="good-img" @load="imageLoad">
        <div class="good-info">
            <p class="good-title">{{goodsItem.title}}</p> 
            <span class="good-price">￥{{goodsItem.price}}</span>
            <span class="good-collect">{{goodsItem.cfav}}</span>    
        </div>
    </div>
</template>
<script>
export default {
    name:'GoodslistItem',
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imageLoad(){
            this.$eventBus.emit('itemImageLoad')
        }
    }

}
</script>
<style scoped>
    .good-item{
        padding-bottom: 40px;
        width: 48%;
        position: relative;
    }

    .good-img{
        width: 100%;
        border-start-end-radius: 5px;
    }

    .good-info{
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .good-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
        }
    .good-price{
        color:var(--color-high-text);
        margin-right: 20px;
    }
    .good-collect{
        position: relative;
    }

    .good-collect::before {
    content: '';
    
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>