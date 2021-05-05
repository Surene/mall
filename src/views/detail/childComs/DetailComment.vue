<template>
  <div class="comment" v-if="Object.keys(comments).length !== 0">
      <div class="user-comment">
          <div class="comment-user">用户评价</div>
          <div class="comment-more">更多 &gt;</div>
      </div>
      <div class="user-info">
          <img :src="comments.avatar" alt=""> <span>{{comments.username}}</span>
      </div>
      <div class="comments-content">
          {{comments.content}}
      </div>
      <div class="comments-info">
          <span>{{showDate(comments.created)}}</span>
          <span class="style">{{comments.style}}</span>
      </div>
      <div v-if="comments.images" class="comments-images">
          <div v-for="item in comments.images" :key="item" class="comments-image">
              <img :src="item" alt="">
          </div>
      </div>
  </div>
  <div v-else class="none">
      <div class="none-comment">该商品暂无评价</div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'

export default {
    name:'detailComment',
    props:{
        comments:{
            type:Object
        }
    },
    methods: {
        showDate(value){
            let date = new Date(value * 1000)
            return formatDate(date,'yyyy-MM-dd')
        }
    },
    
}
</script>

<style scoped>
    .comment{
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 5px solid #eee;
    }
    .user-comment{
        height: 42px;
        padding-bottom: 20px;
        border-bottom: 3px solid rgb(238, 241, 241);
    }
    .comment-user{
        float: left;
        margin-left: 20px;
        font-size: 17px;
    }
    .comment-more{
        float: right;
        margin-right: 20px;
        font-size: 14px;
    }
    .user-info{
        padding: 15px 15px;
    }
    .user-info img{
        width: 50px;
        border-radius: 50%;
    }
    .user-info span{
        font-size: 14px;
        padding-left: 15px;
        position: relative;
        top: -20px;
    }
    .comments-content{
        padding: 0px 15px;
        font-size: 14px;
    }
    .comments-info{
        padding:15px 15px;
        font-size: 12px;
        color: rgb(202, 201, 201);
    }
    .comments-info .style{
        padding-left: 15px;
    }
    .comments-images{
        padding: 0px 15px;
    }
    .comments-image{
        display: inline-block;
        padding: 0px 5px;
    }
    .comments-image img{
        
        width: 80px;
        height: 80px;
        overflow: hidden;
    }
    .none-comment{
        text-align: center;
        padding-top: 50px;
    }
    .none{
        height: 120px;
        border-bottom: 5px solid #eee;
    }
</style>