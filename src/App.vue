<template>
  <div id="app">
    <transition enter-active-class="animated fadeOIn" leave-active-class="animated fadeOut">
      <loading v-if="loading == 0"></loading>
    </transition>
    <div v-show="loading > 0" class="animated fadeIn">
      <transition enter-active-class="animated fadeIn" leave-active-class="animated hinge">
        <router-view></router-view>
      </transition>
      <Foot></Foot>
      <div class="scroll-top" @click="scrollTop" >
        <i class="glyphicon glyphicon-send animated fadeInUp" v-if="scrollTopShow"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Foot from '@/components/Foot'
  export default {
    name: 'app',
    components:{
      Foot
    },
    computed:mapGetters([//采用vuex进行组件传参
      'loading'
    ]),
    data () {
      return {
        scrollTopShow: false
      }
    },
    methods:{
      scrollTop(index){
        $('html,body').animate({scrollTop: '0px'}, 1000,'easeInOutCirc');
      },
      handleScroll(){
        let scrollTop;
        if( document.documentElement && document.documentElement.scrollTop ) {
          scrollTop = document.documentElement.scrollTop;
        } else if(document.body) {
          scrollTop = document.body.scrollTop;
        }
        /*scrollTopShow*/
        if( scrollTop < 500 ) this.scrollTopShow = false;
        else this.scrollTopShow = true;
      }
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll);
    },
    watch:{//监听
      $route( to, from ){//监听路由
        //console.log(from);
        //console.log(to);
      }
    },
  }
</script>

<style scoped>
  .scroll-top{
    position: fixed;
    bottom: 4%;
    right: 3%;
    color: #eea902;
    font-size: 1.7em;
    transform: rotate(-30deg);
    cursor: pointer;
    padding: 5px 0;
  }
</style>
