<template>
  <div class="header" :class="{'no-main-header':$route.path !== '/index','main-header':$route.path === '/index'}">
    <div class="header-container clearfix flex-row" >

      <div class="logo">

        <img alt="logo" src="./assets/logo_text.png" style="height:80px;width:513px "  />
      </div>
      <div class="menu">
        <ul>
          <li style="text-indent: 2em;" >
            <router-link to="/index" class="menu-text">首页</router-link>
            <div class="menu-active" style="margin-left: 34px"></div>
          </li>

          <li>
            <router-link to="/sa/zxjs" class="menu-text">中心介绍</router-link>
            <div class="menu-active" ></div>
          </li>
          <li><router-link to="/ial/zxdt" class="menu-text">中心动态</router-link><div class="menu-active" ></div></li>
          <li><router-link to="/ial/tzgg" class="menu-text">通知公告</router-link><div class="menu-active" ></div></li>
          <li><a href="https://ks.cptsol.cn" class="menu-text" target="_blank">报名考试</a></li>
<!--          <li><router-link to="/al/hyjl" class="menu-text">行业交流</router-link><div class="menu-active" ></div></li>-->
          <li><router-link to="/ial/jyxx" class="menu-text">求职招聘</router-link><div class="menu-active" ></div></li>
          <li>
            <div class="flex-row has-select">
              <div>
                <a class="menu-text"  :class="{'router-link-active':$route.path === '/ial/mjgd'
                 || $route.path === '/ial/zjtd'
                 || $route.path === '/ial/hyjl'
                 || $route.path === '/ial/zyfc'
                 || $route.path === '/ial/jxfx'
                 || $route.path === '/ial/hzzs'
                 }">
                  行业交流
                </a>
                <div class="menu-active"></div>
              </div>
              <div class="menu-jt"/>
            </div>
            <div class="menu-select" style="height: 264px">
              <div class="menu-select-item" @click="$router.push({path:'/ial/hyjl'})">行业交流</div>
              <div class="menu-select-item" @click="$router.push({path:'/ial/mjgd'})">名家观点</div>
              <div class="menu-select-item" @click="$router.push({path:'/ial/zjtd'})">专家团队</div>
              <div class="menu-select-item" @click="$router.push({path:'/ial/zyfc'})">职业风采</div>
              <div class="menu-select-item" @click="$router.push({path:'/ial/jxfx'})">教学分享</div>
              <div class="menu-select-item" @click="$router.push({path:'/ial/hzzs'})">合作展示</div>
            </div>
          </li>

<!--          <li>-->
<!--            <div class="flex-row has-select">-->
<!--              <div>-->
<!--                <a class="menu-text" :class="{'router-link-active':$route.path === '/ial/zyfc'-->
<!--                 || $route.path === '/ial/jyxx'-->
<!--                 || $route.path === '/ial/jxfx'-->
<!--                 || $route.path === '/ial/hzzs' }">-->
<!--                  职业风采-->
<!--                </a>-->
<!--                <div class="menu-active"></div>-->
<!--              </div>-->
<!--              <div class="menu-jt"/>-->
<!--            </div>-->
<!--            <div class="menu-select" style="height: 176px">-->
<!--              <div class="menu-select-item" @click="$router.push({path:'/ial/jyxx'})">就业信息</div>-->
<!--              -->
<!--            </div>-->
<!--          </li>-->

          <li>
            <div class="flex-row has-select">
              <div>
                <a class="menu-text" :class="{'router-link-active':$route.path === '/sa/ksjs'
                 || $route.path === '/sa/ksfw' 
                 || $route.path === '/sa/ksjg'
                 || $route.path === '/mma/ksbz'
                 || $route.path === '/mma/ztsl'
                 || $route.path === '/sma/ksys'
                 || $route.path === '/rp'
                 || $route.path === '/tp'
                 || $route.path === '/cap' }">
                  考试指南
                </a>
                <div class="menu-active"></div>
              </div>
              <div class="menu-jt"/>
            </div>
            <div class="menu-select" style="height: 396px">
              <div class="menu-select-item" @click="$router.push({path:'/sa/ksjs'})">考试介绍</div>
              <div class="menu-select-item" @click="$router.push({path:'/sa/ksfw'})">考试范围</div>
              <div class="menu-select-item" @click="$router.push({path:'/sa/ksjg'})">考试结构</div>
              <div class="menu-select-item" @click="$router.push({path:'/mma/ksbz'})">考试标准</div>
              <div class="menu-select-item" @click="$router.push({path:'/mma/ztsl'})">真题实例</div>
              <div class="menu-select-item" @click="$router.push({path:'/sma/ksys'})">考试用书</div>

              <div class="menu-select-item" @click="$router.push({path:'/rp'})">报名流程</div>
              <div class="menu-select-item" @click="$router.push({path:'/tp'})">考试流程</div>
              <div class="menu-select-item" @click="$router.push({path:'/cap'})">证书申请流程</div>
            </div>
          </li>



          <li>
            <div class="flex-row has-select">
              <div>
                <a class="menu-text" to="/contact">
                  联系我们
                </a>
                <div class="menu-active"></div>
              </div>
              <div src="./assets/select-jt.png" class="menu-jt"/>
            </div>
            <div class="menu-select" style="height: 88px">
              <div class="menu-select-item" @click="$router.push({path:'/sa/lxwm'})">联系我们</div>
              <div class="menu-select-item" @click="$router.push({path:'/sa/hzsq'})">合作申请</div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
  <Banner v-show="$route.path === '/index'"></Banner>
  <router-view :key="key"/>
  <Footer ></Footer>
  <el-backtop :bottom="40" :right="40">
<!--    <div>-->
<!--      <img src="./assets/back.png" style="width: 50px;height: 50px"/>-->
      <div class="backtop"></div>
<!--    </div>-->
  </el-backtop>
</template>

<script>
import Footer from './components/Common/Footer.vue'
import {Top} from '@element-plus/icons-vue'
import Banner from './components/Banner.vue'
export default {
  name: 'App',
    data () {
    return {
      compName: 'Main', // 默认展示首页
      title: '',
      menu:'',
      showList: false,
      activeTabName:0,
      isFromHome: false,
      NoticeId:'',
      centerDynamicsId:'',
      jobLookId:'',// 职业风采
      coopId:'' ,// 合作展示
    }
  },
  computed:{
    key() {
      return this.$route.fullPath
    }
  },
  methods: {

  },
  mounted(){
    // console.log(1111)
    // window.scrollTo(0,0);
  },
  components: {
    Top,
    Banner,
    Footer
  }
}
</script>

<style scoped>
  @import '@/styles/app1.0.css';


  .backtop{
    display: block;
    position: fixed;
    right: 40px;
    z-index: 98;
    width: 50px;
    height: 50px;
    transition: ease all 0.3s;
    background: #FFF;
    border-radius: 50%;
    border: 1px solid #2F318B;
    padding: 0px;
  }
  .backtop:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    top: calc(50% - 3px);
    left: calc(50% - 6px);
    transform: rotate(-135deg);
    border-bottom: 1px solid #2F318B;
    border-right: 1px solid #2F318B;
  }
  .backtop:hover {
    background: #2F318B;
  }
  .backtop:hover:after {
    border-bottom: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
  }

  >>>.router-link-active+.menu-active{
    display:block;
  }
  /*>>>.router-link-active*/

  .menu-active{
    width: 29px;
    border-radius: 2px;
    border: 2px solid #fff;
    margin: 10px auto auto 20px;
    display: none;
  }
  /*.no-main-header .menu-active{*/
  /*  border: 2px solid #333333;*/
  /*}*/

  .menu-select{
    position: absolute;
    width: 177px;
    background: #FFFFFF;
    border-top: 5px solid #2F318B;
    margin-left: -45px;
    padding-top: 15px;
    padding-bottom: 10px;
    display: none;

    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.6s ease;
  }
  .menu-select-item{
    width: 177px !important;
    height: 44px !important;
    font-size: 18px !important;
    font-family: MicrosoftYaHei !important;
    color: #2F318B !important;
    text-align: center !important;
    line-height:44px !important;

  }
  .menu-select-item:hover{
    background: #EDEDED;
    cursor: pointer;
  }
  .menu-select-item a{
    width: 177px !important;
    height: 44px !important;
    font-size: 18px !important;
    font-family: MicrosoftYaHei !important;
    color: #2F318B !important;
    text-align: center !important;
    line-height:44px !important;
    text-decoration: none;
  }

  .has-select{
    padding-bottom: 15px;
  }
  .has-select:hover+.menu-select{
    display: block;
    opacity: 1;
    height: 100%;
  }
  .menu-select:hover{
    display: block;
    opacity: 1;
    height: 100%;
  }

  /*@media screen and (min-width: 0px) and (max-width: 800px){*/

  /*  .menu{*/
  /*    display: none;*/
  /*  }*/
  /*}*/

  @media all and (orientation : portrait){

    .logo img{
      /*display: none;*/
      height:66px !important;
      width:387px !important;
    }
    .menu{
      padding-top: 13px;
      /*margin-left: 0 !important;*/
    }
    .app-area+.footer{
      margin-top: 100%;
    }
    .logo{
      margin-left: 35px;
    }

  }




</style>
