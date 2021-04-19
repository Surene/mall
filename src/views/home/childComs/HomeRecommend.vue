<template lang="">
    <div class="recommends">
        <div v-for="item in recommends" :key="item" class="recommends-item">
            <a :href="item.link">
                <img :src="item.image">
            </a>
            <div>
                {{item.title}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommends{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding-bottom: 10px;
        border-bottom: 10px solid #eee;
    }

    .recommends-item{
        flex: 1;
        padding-top: 8px;
        padding-bottom: 12px;
    }

    .recommends-item img{
        width: 90%;
        padding-bottom: 10px;
    }

    
</style>