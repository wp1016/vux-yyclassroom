<template>
  <div class="homeworkRecord" >
    <scroller lock-x height="-46" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="100">
      <div>
        <div class="task-list">
          <div class="list-container">
            <div v-for="(item,index) in homeworkList" :key="index" class="list-box">
              <time><i class="time-ico"></i> {{item.taskTime}}</time>
              <ul class="clearfix">
                <li v-for="(item1,idx) in item.taskList" :key="idx">
                  <a href="#">
                    <div class="baseinfo">
                      <h4 class="catalog"><strong>{{item1.taskCatalog}}</strong></h4><p class="case">{{item1.taskCase}}</p>
                    </div>
                    <div class="rect g_animat_hezi g_animat_justify g_animat_orient">
                      <p class="photo" v-if="idx%3==0"><img src="../../common/images/temp/task_ico1.gif" alt=""></p>
                      <p class="photo" v-if="idx%3==1"><img src="../../common/images/temp/task_ico2.gif" alt=""></p>
                      <p class="photo" v-if="idx%3==2"><img src="../../common/images/temp/task_ico3.gif" alt=""></p>
                      <h4 class="name">{{item1.taskName}}</h4>
                      <p class="lasttime">截止时间：{{item1.lastTime}}</p>
                    </div>
                    <p class="state green" v-if="item1.taskClass=='green'">{{item1.taskState}}</p>
                    <p class="state red" v-if="item1.taskClass=='red'">{{item1.taskState}}</p>
                    <p class="state gray" v-if="item1.taskClass=='gray'">{{item1.taskState}}</p>
                    <p class="state yellow" v-if="item1.taskClass=='yellow'">{{item1.taskState}}</p>
                    <p class="state blue" v-if="item1.taskClass=='blue'">{{item1.taskState}}</p>
                  </a>
                </li>
              </ul>
            </div>
            <load-more tip="正在加载中。。。"></load-more>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import {
    Scroller,
    LoadMore
  } from 'vux';
  export default {
    name:'homeworkRecord',
    components:{
      Scroller,
      LoadMore
    },
    data(){
      return{
        onFetching:false,
        bottomCount:20,
        homeworkList:[],
      }
    },
    methods:{
      onScrollBottom(){
        if(this.onFetching){

        }else{
          this.onFetching = true;
          setTimeout(()=>{
            this.$http.get('src/common/data/homework.json').then((res)=>{
          for(let i=0;i<res.data.listdata.length;i++){
            this.homeworkList.push(res.data.listdata[i])
          }
          })
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset();
        })
          this.onFetching = false;
          },2000)
        }
      }
    },
    mounted(){
      setTimeout(()=>{
        this.$http.get('src/common/data/homework.json').then((res)=>{
      this.homeworkList=res.data.listdata
      })
        this.$nextTick(() => {
          this.$refs.scrollerBottom.reset({top: 0})
        })
      },20)
    }
  }
</script>

<style lang="less" scoped>
.homeworkRecord{
  background: #EAFDE2;
  p{margin: 0;}
  .task-list{
    padding: 0 20px 20px;
  }
  .list-box{
    time{
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #aeb1ad;
      display: block;
      &:before{
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 22.5px;
        height: 11.5px;
      }
    }
    &:nth-child(2n){
      time{
        &:before{
          background: url(../../common/images/ico/fish_ico2.jpg) no-repeat left top;
          background-size: 100% 100%;
          animation:fishtimeR 3s linear infinite;
          -webkit-animation:fishtimeR 3s linear infinite;
          margin-right: 6px;
        }
      }
    }
    &:nth-child(2n+1){
      time{
        &:before{
          background: url(../../common/images/ico/fish_ico1.jpg) no-repeat left top;
          background-size: 100% 100%;
          animation:fishtimeL 3s linear infinite;
          -webkit-animation:fishtimeL 3s linear infinite;
          margin-right:16px;
        }
      }
    }
    li{
      margin-top:20px;
      &:first-child{
        margin-top: 10px;
      }
      a{
        text-decoration: none;
        display:block;
        height: 150px;
        position: relative;
        background: #fff;
        padding:56px 50px 10px 10px;
        border-radius: 20px;
      }
    }
    .baseinfo{
      position: absolute;
      top:14px;
      left: -7px;
      h4{
        float:left;
        height: 32px;
        font-size: 17px;
        color: #fff;
        line-height: 32px;
        display: inline-block;
        strong{
          background: #61CD92;
          height: 32px;
          display: inline-block;
          padding:0 20px;
          vertical-align: top;
          font-weight: normal;
        }
        &:before{
          content: '';
          display: inline-block;
          width: 6.5px;
          height:40px;
          background: url(../../common/images/ico/catalog_l_bg.png) no-repeat left top;
          background-size: 100% 100%;
          vertical-align: top;
        }
        &:after{
          content: '';
          display: inline-block;
          width: 6.5px;
          height:32px;
          background: url(../../common/images/ico/catalog_r_bg.png) no-repeat right top;
          background-size: 100% 100%;
          vertical-align: top;
        }
      }
      .case{
        float:left;
        margin-left:15px;
        margin-top:6px;
        display: inline-block;
        padding:0 12px;
        font-size: 12px;
        line-height: 20px;
        height: 20px;
        vertical-align: middle;
        background: #d1d1d1;
        border-radius: 5px;
        color: #faf9f9;
      }
    }
    .state{
      position: absolute;
      top: 0px;
      right: 0px;
      line-height:1.2em;
      height: 100%;
      width: 1.975rem;
      border-radius: 0 20px 20px 0;
      color: #fff;
      font-size: 15px;
      text-align: center;
      padding:44px 10px 0 10px;
      &.yellow{
        background: #ffcf4a
      }
      &.blue{
        background: #75def0
      }
      &.green{
        background:#3ba56b;
        padding:36px 10px 0 10px;
      }
      &.red{
        background:#F1786B;
      }
      &.gray{
        background:#B7B7B7;
      }
    }
    .rect{
      position: relative;
      height: 100%;
      padding-left:90px;
    }
    .photo{
      position: absolute;
      top: 4px;
      width: 82px;
      height: 73px;
      left: 0;
      img{
        display: block;
        width: 100%;
        height: auto;
      }
    }
    .form{
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #b0b0b0;
    }
    .name{
      padding-top:9px;
      font-size: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #222;
      font-weight: normal;
    }
    .lasttime{
      font-size: 12px;
      color: #a3a3a3;
      padding-bottom:11px;
    }
  }
  .g_animat_orient{
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
  }
  .g_animat_justify{
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    box-pack: justify;
  }
  .g_animat_hezi{
    display: -webkit-box;
    display: -moz-box;
    display: box;
  }
}
@keyframes fishtimeL{
  0%,100%{transform: translateX(0);}
  50%{transform: translateX(10px);}
}

@-webkit-keyframes fishtimeL{
  0%,100%{-webkit-transform: translateX(0);}
  50%{-webkit-transform: translateX(10px);}
}


@keyframes fishtimeR{
  0%,100%{transform: translateX(0);}
  50%{transform: translateX(-10px);}
}

@-webkit-keyframes fishtimeR{
  0%,100%{-webkit-transform: translateX(0);}
  50%{-webkit-transform: translateX(-10px);}
}
</style>
