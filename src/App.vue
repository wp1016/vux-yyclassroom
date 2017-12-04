<template>
  <div style="height: 100%;" class="app" >
    <view-box ref="viewBox" :body-padding-top="hasHeader" :body-padding-bottom="0">
      <x-header slot="header"
                title="slot:default"
                :left-options="{backText:''}"
                :transition="headerTransition"
                :title="title"
      style="position:absolute;width: 100%;top: 0;left: 0;background: #3ba56b;">
      </x-header>
      <transition :name="'vux-pop-'+(direction === 'forward' ? 'in' : 'out')">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox,XHeader,XButton} from 'vux'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        hasHeader:'46px'
      }
    },
    components:{
      ViewBox,
      XHeader,
    },
    computed:{
      ...mapState({
        direction: state =>{
          return state.vux.direction
        },
        title: state =>{
          return state.vux.title
        }
      }),
      headerTransition () {
        return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
      },
    },
  }
</script>

<style lang="less">
  @import "style/reset";
  @import "style/transition";
  .app {
    .vux-header .vux-header-left .left-arrow:before{
      border-width:3px 0 0 3px;
      border-radius:3px;
    }
  }
</style>
