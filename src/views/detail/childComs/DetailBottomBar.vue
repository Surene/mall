<template>
  <div class="bottom-bar">
      <div class="bottom bottom-left">
          <div>
              <i class="icon service"></i>
              <span>客服</span>
          </div>
          <div>
              <i class="icon shop"></i>
              <span>店铺</span>
          </div>
          <div>
              <i class="icon collect"></i>
              <span>收藏</span>
          </div>
      </div>
      <div class="bottom bottom-right">
          <div class="right cart" @click="addCart">加入购物车</div>
          <div class="right buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'detailBottomBar',
    methods: {
        addCart(){
            this.$emit('addCart')
        }
    },
}
</script>

<style scoped>
.bottom-bar{
    height: 58px;
    display: flex;
    text-align: center;
}
.bottom{
    flex: 1;
}
.bottom span{
    font-size: 14px;
}
.bottom-left{
    display: flex;
}
.bottom-left div{
    flex: 1;
}
.bottom-right{
    display: flex;
}
.bottom-right .right{
    flex: 1;
}
.icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
.service {
    background-position:0 -54px;
  }

.shop {
    background-position:0 -98px;
  }
.bottom-right{
    font-size: 16px;
}
.cart{
    background-color: rgb(247, 223, 9);
    padding-top: 20px;
}
.buy{
    background-color: rgb(231, 6, 6);
    padding-top: 20px;
}
</style>