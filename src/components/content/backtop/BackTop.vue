<template lang="">
    <div class="back-top" @click="backTop">
        <img src="~assets/img/common/top.png">
    </div>
</template>
<script>
export default {
    name:'backtop'
}
</script>
<style scoped>
    .back-top{
        position: fixed;
        right: 10px;
        bottom: 60px;
    }
    .back-top img{
        width: 43px;

    }
</style>