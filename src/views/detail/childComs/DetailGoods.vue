<template>
    <!-- 必须判断传入参数是否为0 -->
  <div class="detail-goods" v-if="Object.keys(goodsInfo).length !== 0">
      <div class="goods-desc">
          {{goodsInfo.desc}}
      </div>
      <div class="goods-key">
          {{goodsInfo.detailImage[0].key}}
      </div>
      <div>
          <div v-for="item in goodsInfo.detailImage[0].list" :key="item" class="goods-img">
              <img :src="item" alt="" @load="goodImageLoad">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'detailGoods',
    props:{
        goodsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        goodImageLoad(){
            this.$emit('goodImageLoad')
        }
    }
}
</script>

<style scoped>
.detail-goods{
    padding-bottom: 20px;
    border-bottom: 5px solid #eee;
    font-size: 14px;
}

.goods-desc{
    padding: 20px 10px;
}
.goods-key{
    padding: 10px;
}
.goods-img img{
    width: 100%;
}
</style>