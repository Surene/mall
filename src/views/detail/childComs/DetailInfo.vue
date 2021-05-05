<template>
  <div class="item-info">
      <div class="title"><p>{{detailItem.title}}</p></div>
      <div class="price">
          <span class="price1">{{detailItem.price}}</span>
          <span class="price2">{{detailItem.oldPrice}}</span>
          <span class="price3">{{detailItem.discountDesc}}</span>
      </div>
      <div class="columns">
          <div v-for="item in detailItem.columns" :key="item" class="item">{{item}}</div>
      </div>
      <div class="services">
          <div v-for="item in detailItem.services" :key="item" class="services-item">
              <img :src="item.icon" alt="">
              {{item.name}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'detailInfo',
    props:{
        detailItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .item-info{
        background-color: #fff;
        border-bottom: 5px solid #eee;
        padding: 10px 10px;
    }
    .title{
        padding: 5px;
        margin-left: -5px;
        font-size: 16px;
        font-weight: 400;
        color: black;
    }
    .price{
        padding: 5px 0; 
        
    }

    .price .price1{
        font-size: 24px;
        color: var(--color-high-text);
        padding-right: 5px;
    }
    .price .price2{
        text-decoration: line-through;
        padding-left: 5px;
        padding-right: 5px;
    }
    .price .price3{
        color: #eee;
        font-size: 13px;
        padding: 2px 5px;
        position: relative;
        top: -8px;
        background-color: var(--color-high-text);
        border-radius: 8px;
    }
    .columns{
        display: flex;
        padding-top: 20px;
        border-bottom: 2px solid #eee;
        padding-left: 20px;
    }
    .columns .item{
        flex: 1;
        font-size: 12px;
        padding-bottom: 4px;
        font-weight: 300;
    }

    .services{
        display: flex;
        padding-top: 20px;
        padding-bottom: 10px;
        justify-content: space-between;
        overflow: hidden;
    }

    .services .services-item{
        flex: 1;
        font-size: 12px;
        text-align: center;
    }

    .services-item img{
        width: 10px;
    }
</style>>
