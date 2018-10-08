<template>
  <!--最终这个模块在router-view里面展示的-->
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <!--v-lazy:懒加载-只有当图片显示的时候才会加载图片-提升性能-->
        <img :src="image.img" />
      </van-swipe-item>
    </van-swipe>
    <van-row class="user-links">
      <van-col span="8">
        <router-link :to="{name:'news.list'}">
          <van-icon name="idcard" />
          <p>新闻资讯</p>
        </router-link>
      </van-col>
      <van-col span="8">
        <van-icon name="photo" />
        <p>图文分享</p>
      </van-col>
      <van-col span="8">
        <van-icon name="shop" />
        <p>商品展示</p>
      </van-col>
    </van-row>
    <van-row class="user-links">
      <van-col span="8">
        <van-icon name="chat" />
        <p>留言反馈</p>
      </van-col>
      <van-col span="8">
        <van-icon name="search" />
        <p>搜索资讯</p>
      </van-col>
      <van-col span="8">
        <van-icon name="phone" />
        <p>联系我们</p>
      </van-col>
    </van-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      images:{}
    }
  },
  created(){
    //钩子函数
    //发送请求
    this.$axios.get("/getlunbo").then(res=>{
      //console.log(res);
      this.images=res.data.message;
    }).catch(err=>{
      console.log(err);
    });
  }
}
</script>

<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
  .user-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
  }
  .user-links .van-icon {
    display: block;
    font-size: 24px;
  }
  .van-icon,p{
    color: #000;
  }
</style>
