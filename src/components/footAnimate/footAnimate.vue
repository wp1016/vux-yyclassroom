<template>
  <div class="site-footanimate">
    <p class="foot-l footico"><img src="../../common/images/foot_animatebg_l.png" alt=""></p>
    <p class="foot-r footico"><img src="../../common/images/foot_animatebg_r.png" alt=""></p>
    <p class="tortoise footico"><img src="../../common/images/tortoise.png" alt=""></p>
    <p class="fish footico"><img src="../../common/images/fish.png" alt=""></p>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="less" scoped>
  .site-footanimate{ height: 80px; position: absolute; left: 0; bottom: 0; right: 0; overflow: hidden; z-index:10006;padding-top: 40px;background:linear-gradient(to top, rgba(234,253,226,.8), rgba(234,253,226,0));background:-webkit-linear-gradient(to top, rgba(256,256,256,.8), rgba(256,256,256,0));}
  .site-footanimate .footico{ position: absolute; }
  .site-footanimate .footico img{ width: 100%; height: auto; display: block;}
  .site-footanimate .foot-l{position:absolute; width: 100px; bottom:0; left:0; z-index: 1;margin:0;}
  .site-footanimate .foot-r{position:absolute; width: 200px; bottom:0; right:0; z-index: 1;margin:0;}
  .site-footanimate .tortoise{ z-index: 0; width: 72px; bottom:1.2rem; left:-20%; -moz-animation:tortoise 25s linear infinite;-o-animation:tortoise 25s linear infinite; animation:tortoise 25s linear infinite; -webkit-animation:tortoise 25s linear infinite;}
  .site-footanimate .fish{ z-index: 2; width: 33px; top:0; margin-top: 10px; left:120%; -moz-animation:fish 15s linear infinite;-o-animation:fish 15s linear infinite; animation:fish 15s linear infinite; -webkit-animation:fish 15s linear infinite;}

  @-webkit-keyframes fish{
    0%{ left:120%; opacity: 1;}
    98%{ opacity: 1; }
    99%{ left:-20%; opacity: 0}
    99.1%{left:120%; opacity: 0; }
    100%{ left:120%; opacity: 1;}
  }


  @keyframes fish{
    0%{ left:120%; opacity: 1;}
    98%{ opacity: 1; }
    99%{ left:-20%; opacity: 0}
    99.1%{left:120%; opacity: 0; }
    100%{ left:120%; opacity: 1;}
  }

  @-webkit-keyframes tortoise{
    0%{ left:-20%; opacity: 1;}
    98%{ opacity: 1; }
    99%{ left:120%; opacity: 0}
    99.1%{left:-20%; opacity: 0; }
    100%{ left:-20%; opacity: 1;}
  }


  @keyframes tortoise{
    0%{ left:-20%; opacity: 1;}
    98%{ opacity: 1; }
    99%{ left:120%; opacity: 0}
    99.1%{left:-20%; opacity: 0; }
    100%{ left:-20%; opacity: 1;}
  }


  @-webkit-keyframes moveL{
    0%,100% {margin-left: 0;}
    50% { margin-left:20px;}
  }
  @keyframes moveL{
    0%,100% {margin-left: 0;}
    50% {margin-left:20px;}
  }

  @-webkit-keyframes moveR{
    0%,100% {margin-right: 0;}
    50% { margin-right:20px;}
  }
  @keyframes moveR{
    0%,100% {margin-right: 0;}
    50% {margin-right:20px;}
  }
</style>
