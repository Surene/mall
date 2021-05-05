<template>
  <div class="cart-item">
      <div class="check-box">
          <cart-check-button :value="item.checked" @checkButton="checkButton"></cart-check-button>
      </div>
      <div class="item-img"><img :src="item.image" alt=""></div>
      <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">商品描述：{{item.desc}}</div>
          <div class="price-count">
              <span class="price">{{item.price}}</span>
              <span class="count">x{{item.count}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import CartCheckButton from './CartCheckButton'
export default {
    props:{
        item:{
            type:Object,
            default:{}
        }
    },
    components:{
        CartCheckButton
    },
    methods: {
        checkButton(){
            //取反
            this.item.checked = !this.item.checked
        }
    },
}
</script>

<style>
.cart-item{
    padding: 5px 5px;
    border-bottom: 1px solid rgb(97, 96, 96);
    display: flex;
}
.check-box{
    flex: 15%;
    padding-top: 45px;
    padding-right: 5px;
}
.item-img img{
    width:80px
}
.item-info{
    flex: 65%;
    padding-left: 15px;

}
.item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 5px 5px;
}
.price-count{
    padding: 15px 5px;
}
.price-count .price{
    position: relative;
    left: 0;
}
.price-count .count{
    padding-left: 100px;
}
</style>