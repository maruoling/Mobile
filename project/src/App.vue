<!--全局的、公共的样式-->
<template>
  <div>
    <van-nav-bar title="马马的世界" class="top" :fixed="true" :z-index="9999">
      <van-icon name="search" slot="right" />
    </van-nav-bar>

    <router-view class="rv"></router-view>
    <van-tabbar v-model="active" :fixed="true" @change="changeFoot(active)">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>会员</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods:{
    changeFoot:function (active) {
    //console.log(active);
    switch (active){
      case 0:
        //跳转路由
        this.$router.push({
          name:'home'
        });
        break;
      case 1:
        this.$router.push({
          name:'vip'
        });
        break;
      case 2:
        this.$router.push({
          name:'shopping'
        });
        break;
      case 3:
        this.$router.push({
          name:'my'
        });
        break;
    }
  }
  }
}
</script>

<style>
  .top{
    border-bottom: 1px solid #ccc;
  }
  .rv{
    margin-top: 47px;
    margin-bottom: 50px;
  }
</style>
