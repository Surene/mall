<template>
  <div class="shop-info">
    <div class="shop-title">
        <img :src="shopInfo.shopLogo" alt="">
        <span class="shop-name">{{shopInfo.name}}</span>
    </div>
    <div class="detail-info">
        <div class="detail-info-item detail-info-item1">
            <div class="item sells">
                <div class="sell-number">{{sellsFilter(shopInfo.cSells)}}</div> 
                <div class="sell-text">总销量</div>
            </div>
            <div class="item goods">
                <div class="goods-number">{{shopInfo.cGoods}}</div>
                <div class="goods-text">全部宝贝</div>
            </div>
        </div>
        <div class="detail-info-item detail-info-item2"> 
            <div v-for="item in shopInfo.score" :key="item" class="score">
                <div class="score-item score-item-text"><span>{{item.name}}</span></div>
                <div class="score-item score-item-number" :class="{numberbetter:item.isBetter}"><span>{{item.score}}</span></div>
                <div class="score-item score-item-isbetter" :class="{scorebetter:item.isBetter}"><span>{{isBetter(item.isBetter)}}</span></div>
            </div>
        </div>
    </div>
    <div class="shop-bottom">
        <div class="bottom">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'detailShop',
    props:{
        shopInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        sellsFilter(value) {
            if (value < 10000) {
                return value
            }
            if(value >= 10000){
                return (value/10000).toFixed(1) + '万'
            }
        },
        isBetter(isTrue){
            if(isTrue){
                return '高'
            }else{
                return '低'
            }
        }
    },
}
</script>

<style scoped>
    .shop-info{
        padding-top: 20px;
        padding-left: 10px;
        padding-bottom: 15px;
        border-bottom: 5px solid #eee;
    }
    .shop-title{
        padding-bottom: 25px;
    }
    .shop-title img{
        width: 50px;
        border-radius: 50%;
    }
    .shop-info .shop-name{
        text-align: center;
        font-size: 18px;
        padding-left: 8px;
        position: relative;
        top: -20px;
    }
    .detail-info{
        display: flex;
        text-align: center;
    }
    .detail-info .detail-info-item{
        flex: 1;
        
    }
    .detail-info-item1{
        border-right: 2px solid #eee;
        display: flex;
        
    }
    .detail-info-item2{
        padding-left: 20px;
        position: relative;
        top: -20px;
        text-align: center;
    }
    .detail-info-item1 .item{
        flex: 1;
        
        text-align: center;
        
    }
    .sell-number{
        font-size: 20px;
        padding-bottom: 5px;
    }
    .sell-text{
        font-size: 14px;
    }
    .goods-number{
        font-size: 20px;
        padding-bottom: 5px;
    }
    .goods-text{
        font-size: 14px;
    }
    .score{
        display: flex;
        padding-top: 10px;
    }
    .score .score-item{
        flex: 2 1 2;
        font-size: 14px;
        
    }
    .score .score-item-number{
        margin-left: 20px;
        color: #5ea732;
    }
    .score .score-item-isbetter{
        position: relative;
        left: 20px;
        color: #fff;
        background-color:#5ea732;
    }
    .numberbetter span{
        color: red;
    }
    .scorebetter span{
        color: #fff;
        background-color: red;
    }
    .shop-bottom{
        text-align: center;
        padding-top: 12px;
    }
    .bottom{
        display: inline-block;
        font-size: 16px;
        background-color: #f2f5f8;
        width: 150px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 10px;
    }
</style>