<template>
  <!--最终这个模块在router-view里面展示的-->
  <div>
    <van-nav-bar
      title="新闻列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-list>
        <van-row v-for="(item,index) in list" :key="index" :title="index">
          <router-link :to="{name:'news.detail',query:{id:item.id}}">
          <van-col span="4" offset="1"><img :src="item.img_url" width="50" height="50" /></van-col>
          <van-col span="18" class="newstitle">{{item.title}}</van-col>
          <van-col span="7" class="newsview"><span><van-icon name="password-view" /></span>   {{item.click}}</van-col>
          <van-col span="11" class="newstime"><span><van-icon name="clock" /></span>   {{item.add_time|mmtime("YYYY年MM月DD日")}}</van-col>
          </router-link>
        </van-row>
    </van-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
    }
  },
  methods: {
    onClickLeft: function () {
      //操作历史纪录
      this.$router.go(-1);
    }
  },
    created(){
      this.$axios.get("/getnewsList").then(res=>{
        console.log(res);
        this.list=res.data.message;
      }).catch(err=>{
        console.log(err);
      });
    }
}
</script>
<!--scoped:加了之后这一段样式就只会在这一个组件里面去作用-->
<style scoped>
  /*van框架的组件标签都会自动添加一个同名的class*/
  .van-icon{
   size:12px;
  }
  .van-row{
    border-bottom: 1px solid #98a2af;
    margin:5px 0;
  }
  .van-row span{
    font-size: 12px;
  }
  img{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .newstitle{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin:10px 7px;
    font-size: 14px;
    color: #3C3C3C;
  }
  .newsview,.newstime{
    font-size: 12px;
    color: #7f7f7f;
    margin-left:7px;
  }
</style>
