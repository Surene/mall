<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'Tabbar'
}
</script>
<style>
  #tabbar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #fff;
    box-shadow: 0 -1px 1px rgb(100,100,100,.1);
  }
</style>