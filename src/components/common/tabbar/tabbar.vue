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

    background-color: rgb(rgb(136, 128, 128), rgb(169, 175, 169), rgb(128, 128, 136));
    box-shadow: 0 -2px 1px rgb(100,100,100,0.1);
  }
</style>