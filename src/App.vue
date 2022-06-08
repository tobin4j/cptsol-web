<template>
  <div class="header" :class="{'no-main-header':$route.path !== '/index','main-header':$route.path === '/index'}">
    <div class="header-container clearfix" >

      <div class="logo">
        <div class="logo-container">
          <img alt="logo" src="./assets/logo_new.png" style="height:79px;width:79px " v-if="$route.path === '/index'" />
          <img alt="logo" src="./assets/logo.png" style="height:79px;width:79px " v-else />
        </div>
        <div class="name">
          <p class="name_zh">国际中文教师发展研究网</p>
          <p class="name_en">中国文化信息协会汉语推广工作委员会</p>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li style="text-indent: 2em;" >
            <router-link to="/index">首页</router-link>
            <div class="menu-active" style="margin-left: 34px"></div>
          </li>
          <li>
            <router-link to="/centerIntro">中心介绍</router-link>
            <div class="menu-active" ></div>
          </li>
          <li><router-link to="/notice">通知公告</router-link><div class="menu-active" ></div></li>
          <li><router-link to="/centerDynamics">中心动态</router-link><div class="menu-active" ></div></li>
          <li><router-link to="/industryExchanges">行业交流</router-link><div class="menu-active" ></div></li>

          <li>
            <div class="flex-row">
              <div>
                <router-link to="/famous">
                  名家观点
                </router-link>
                <div class="menu-active"></div>
              </div>
              <div class="menu-jt"/>
            </div>
          </li>

          <li>
            <div class="flex-row">
              <div>
                <router-link to="/joblook">
                  职业风采
                </router-link>
                <div class="menu-active"></div>
              </div>
              <div class="menu-jt"/>
            </div>
          </li>

          <li>
            <div class="flex-row">
              <div>
                <router-link to="/testGuide">
                  考试指南
                </router-link>
                <div class="menu-active"></div>
              </div>
              <div class="menu-jt"/>
            </div>
          </li>

          <li><a href="https://ks.cptsol.cn"  @click="goLink"  target="_blank">考试系统</a></li>

          <li>
            <div class="flex-row">
              <div>
                <router-link to="/contact">
                  联系我们
                </router-link>
                <div class="menu-active"></div>
              </div>
              <div src="./assets/select-jt.png" class="menu-jt"/>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
  <Banner v-show="$route.path === '/index'"></Banner>
  <router-view  />
  <Footer ></Footer>
<!--  <el-backtop :bottom="100">-->
<!--    <div class="backtop">-->
<!--      <el-icon color="#fff"><b><Top /></b></el-icon>-->
<!--    </div>-->
<!--  </el-backtop>-->
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
      coopId:'' // 合作展示
    }
  },
  // setup(){
  //   const router = useRouter();
  // },
  methods: {
    lookDetails(name,id,activeName,type){
      this.compName = name;
      this.isFromHome = true;
      if(name=='Notice') {
        this.noticeId = id;
      }
      if(name=='CenterDynamics'){
        this.centerDynamicsId = id;
      }
      if(name =='JobLook' && type == 'coopShow'){
        this.coopId = id;
        this.jobLookId = null;
      } else {
        this.jobLookId = id;
        this.coopId = null;
      }
      if(activeName){
        this.activeTabName = activeName;
      }
    },
    goLink() {
      this.menu = "TestSys"
    },
    changeMenu(name,activeIndex){
      this.compName = name;
      this.activeTabName = activeIndex;
      if(name =='Notice'){
        this.noticeId = null;
      }
      if(name=='CenterDynamics'){
        this.centerDynamicsId = null;
      }
      if(name=='JobLook'){
        this.jobLookId = null;
        this.coopId = null;
      }
    }
   },
  components: {
    Top,
    Banner,
    // Main,
    // Home,// 首页
    //CenterIntro, // 中心介绍
    // CenterDynamics,
    // Famous,
    // JobLook,
    // TestGuide,
    // IndustryExchanges,
    // TestSys,
    // Notice,
    // ContactUs,
    Footer
  }
}
</script>

<style scoped>
  @import '@/styles/app.css';
  >>>.router-link-active+.menu-active{
    display:block;
  }

  .menu-active{
    width: 29px;
    border-radius: 2px;
    border: 2px solid #fff;
    margin: 10px auto auto 20px;
    display: none;
  }
  .no-main-header .menu-active{
    border: 2px solid #333333;
  }

  /*@media screen and (min-width: 0px) and (max-width: 1770px){*/

  /*  .menu{*/
  /*    display: none;*/
  /*  }*/
  /*}*/
</style>
