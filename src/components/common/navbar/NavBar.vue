vue <template lang="">
    <div class="nav-bar">
        <div class="left-nav"><slot name="left-nav"></slot></div>
        <div class="center-nav"><slot name="center-nav"></slot></div>
        <div class="right-nav"><slot name="right-nav"></slot></div>
    </div>
</template>
<script>
export default {
    name:'navbar'
}
</script>
<style>
    .nav-bar{
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0,1px,1px,rgba(100, 100, 100, 0.1);
    }

    .left-nav,.right-nav{
        width: 60px;
    }

    .center-nav{
        flex: 1;
    }
    
</style>