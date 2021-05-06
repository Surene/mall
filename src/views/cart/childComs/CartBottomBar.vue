<template>
  <div class="cart-bottom">
      <div class="check-box">
          <cart-check-button @checkButton="selectAllClick" :value="isChecked"></cart-check-button>
      </div>
      <div class="total-price">
          总价：{{price}}
      </div>
      <div class="count">
        去结算({{count}})
      </div>
  </div>
</template>

<script>
import CartCheckButton from './CartCheckButton.vue'
export default {
  components: { CartCheckButton },
  props:{
      price:{
          //type:Number,
          //[Vue warn]: Invalid prop: type check failed for prop "price". Expected Number
          type:String,
          default:0
      },
      count:{
          type:Number,
          default:0
      }
  },
  data() {
      return {
          isChecked:true
      }
  },
  methods: {
      //点击实现全选和全不选
      selectAllClick(){
        this.$store.commit('selectAllClick')
      }
  },
  updated() {
      //监听是否全选
      this.isChecked = this.$store.getters.isSelectAll
  },

}
</script>

<style scoped>
    .cart-bottom{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 49px;
        width: 100%;
        background-color: #eee;
        height: 38px;
        display: flex;
        color: rgb(37, 36, 36);
        border-top: 1px solid rgb(43, 38, 38);
    }
    .check-box{
        flex: 1;
        padding-top: 10px;        
        padding-left: 10px;
        
    }
    .total-price{
        padding-top: 10px;
        flex: 1.5;
    }
    .count{
        flex:1;
        
        padding-top: 10px;
        position: relative;
        left: 25px;
        right: 0;
        background-color: rgb(250, 170, 181);
        padding-left: 10px;
        margin-right: 25px;
    }
    
</style>