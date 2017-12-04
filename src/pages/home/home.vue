<template>
  <div>
    <x-button text="自学提升" link="/selfStudy/自学提升"></x-button>
    <x-button text="作业记录" link="/homeworkRecord/作业记录"></x-button>
  </div>
</template>
<script>
  import {XButton} from 'vux'
  import {mapState} from 'vuex'
  export default {
    name:'home',
    data(){
      return{
        title:'home'
      }
    },
    components:{
      XButton
    }
  }
</script>
<style lang="less" scoped>

</style>
