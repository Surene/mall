<template>
  <div class="cart-bottom">
      <div class="check-box">
          <cart-check-button @selectClick="selectClick" ></cart-check-button>
      </div>
      <div class="total-price">
          {{totalPrice}}
      </div>
      <div class="count">
          {{count}}
      </div>
  </div>
</template>

<script>
import CartCheckButton from './CartCheckButton.vue'
export default {
  components: { CartCheckButton },
  props:{
      totalPrice:{
          type:Number,
          default:0
      },
      count:{
          type:Number,
          default:0
      }
  },
  methods: {
      selectClick(){
          
      }
  },

}
</script>

<style>

</style>