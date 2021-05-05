<template>
<!-- 动态绑定属性 属性值要'' -->
  <div class="icon-selector" :class="{'select':value}" @click="selectClick">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    props:{
        value:{
            type:Boolean,
            default:true
        }
    },
    data() {
        return {
            isChecked:this.value
        }
    },
    methods: {
        selectClick(){
            this.$emit('checkButton',this.isChecked)
        }
    },
}
</script>

<style>
    .icon-selector{
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #bbb;
        cursor: pointer;
    }
    .select{
        background-color: var(--color-tint);
        border-color: red;
    }
</style>