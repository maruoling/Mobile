<template>
  <!--最终这个模块在router-view里面展示的-->
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="有赞微商城" name="1">
        提供多样店铺模板，快速搭建网上商城
      </van-collapse-item>
      <van-collapse-item title="有赞零售" name="2">
        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
      </van-collapse-item>
      <van-collapse-item title="有赞美业" name="3">
        线上拓客，随时预约，贴心顺手的开单收银
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  }
}
</script>

<style scoped>

</style>
