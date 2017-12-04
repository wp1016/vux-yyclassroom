<template>
  <div class="selfStudy">
    <scroller lock-y :scrollbar-x=false ref="scroller">
      <div class="yy-tabs" ref="tabs" :style="{width:tWidth+'px'}">
        <div class="yy-tabItem" v-for="(item,idx) in navList" :key="idx" :class="{active:index===idx}" @click="index=idx">{{item}}</div>
      </div>
    </scroller>
    <div :style="{height:swiperHeight+'px',position:'relative'}">
      <swiper ref="swiper" v-model="index" style="width: 100%;" :height="swiperHeight+'px'" :show-dots="false" @on-index-change="onIdxChange">
        <swiper-item v-for="(item, index) in dataList" :key="index">
          <div class="tab-swiper vux-center">
            <ul v-if="item.isPreson===1" class="stu-list">
              <li v-for="(item1,idx) in dataList[index].childList" data-id="item1.chapter_id" >
                <a href="javascript:void(0);">
                  <p class="photo" v-if="idx%2==0"><img src="http://ued.t.huijiaoyun.com/tianyu_edu_dev/touch/yy_classroom/img/temp/selftaught_ico1.gif" alt=""></p>
                  <p class="photo" v-else><img src="http://ued.t.huijiaoyun.com/tianyu_edu_dev/touch/yy_classroom/img/temp/selftaught_ico2.gif" alt=""></p>
                  <h4>{{item1.name}}</h4>
                  <p class="tips txt-gray">{{item1.studyCounts}}人已完成练习</p>
                </a>
              </li>
            </ul>
            <ul v-else class="stu-list">
              <li data-id="item.chapter_id">
                <a href="javascript:void(0);">
                  <p class="photo"><img src="http://ued.t.huijiaoyun.com/tianyu_edu_dev/touch/yy_classroom/img/temp/selftaught_ico1.gif" alt=""></p>
                  <h4>{{item.name}}</h4>
                  <p class="tips txt-gray">{{item.studyCounts}}人已完成练习</p>
                </a>
              </li>
            </ul>
          </div>
        </swiper-item>
      </swiper>
      <foot-animate></foot-animate>
    </div>
  </div>
</template>

<script>
  import {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Scroller
  } from 'vux'
  import FootAnimate from '@/components/footAnimate/footAnimate'
  export default {
    name:'selfStudy',
    components:{
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
      Scroller,
      FootAnimate
    },
    data(){
      return{
        navList:[],
        index1:0,
        index:0,
        tWidth:0,
        dataList:[],
        swiperHeight:screen.height-86,
      }
    },
    methods:{
      onIdxChange(idx){
        let tabs=this.$refs.tabs;
        let scroller=this.$refs.scroller;
        let left=0;
        let sW=screen.width;
        for(let i=0;i<idx;i++){
          let tWidth=parseFloat(getComputedStyle(tabs.children[i]).width)
          let tPadL=parseFloat(getComputedStyle(tabs.children[i]).paddingLeft)
          let tPadR=parseFloat(getComputedStyle(tabs.children[i]).paddingRight)
          left+=tWidth+tPadL+tPadR
        }
        if(left>=this.tWidth-sW){
          left=this.tWidth-sW
        }
        let position={
          left:left,
          top:0
        };
        scroller.reset(position,300)
      },
      setSwiperWidth(){
        let tabs=this.$refs.tabs;
        let tabItem=tabs.children;
        let len;
        let tWidth=0;
        this.$nextTick( ()=> {
          len=tabItem.length;
          for(let i=0;i<len;i++){
            let iWidth=parseFloat(getComputedStyle(tabItem[i]).width)
            let iPadL=parseFloat(getComputedStyle(tabItem[i]).paddingLeft)
            let iPadR=parseFloat(getComputedStyle(tabItem[i]).paddingRight)
            tWidth+=iWidth+iPadL+iPadR
          }
          this.tWidth=tWidth
        });
      }
    },
    mounted(){
      setTimeout(()=>{
        console.log(this.$refs.swiper)
        this.$http.get('src/common/data/data.json').then((res) => {
          let data=res.data;
          let acrossSwiper=data.acrossSwiper
          let dataList=data.list
          for(let i=0;i<acrossSwiper.length;i++){
            this.navList.push(acrossSwiper[i].name)
            this.dataList.push(dataList[i])
          }
          console.log(this.dataList)
          this.setSwiperWidth();
          this.$refs.scroller.reset();
        }, (err) => {
          console.log('请求失败')
        })
      },20)
    }
  }
</script>

<style lang="less" scoped>
  .selfStudy{
    background:#EAFDE2;
    .vux-tab{
      .vux-tab-item{
        white-space:nowrap;
        padding:0 10px;
        background:#f3f3f3;
      }
    }
    .yy-tabs{
      display:flex;
      width:auto;
      height:40px;
      line-height:40px;
      background:#f3f3f3;
      .yy-tabItem{
        white-space:nowrap;
        padding:0 10px;
        &.active{
          color:#3BA56B;
        }
      }
    }
    .tab-swiper{
      max-height:100%;
      box-sizing:border-box;
      padding-bottom:60px;
      overflow-x:hidden;
      &::-webkit-scrollbar{display:none;}
      &::-webkit-scrollbar-thumb{width:0px;}
    }
    .stu-list{
      padding:0 20px 20px;
      &:after{
        content:'';
        display:block;
        clear:both;
      }
      li{
        float:left;
        width:50%;
        margin-top:20px;
        text-align:center;
        a{
          display:block;
          width:100%;
          color:#353535;
          text-decoration:none;
          .photo{
            width:92px;
            height:105px;
            margin:0 auto;
            img{
              display:block;
              width:100%;
              height:auto;
            }
          }
          h4{
            font-size: 18px;
            line-height: 120%;
            height: 45px;
            width: 100px;
            margin: 0 auto;
            display: box;
            font-weight:normal;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
          }
          .tips{
            font-size:12px;
            line-height:100%;
            margin:10px 0 0 0;
            color:#959595;
          }
        }
      }
    }
  }
</style>
