<template>
  <div class="header">
    <div class="header-container clearfix">
      <div class="logo">
        <div class="logo-container">
          <img alt="logo" src="./assets/logo.png" style="height:100%;width:100%;">
        </div>
        <div class="name">
          <p class="name_zh">国际中文教师发展研究中心（CPTSOL）</p>
          <p class="name_en">The International Chinese Teacher Development Research Center</p>
        </div>
      </div>
      <div class="code">
        <img alt="微信公众号" src="./assets/WxCode.png" style="height:110px;width:110px;">
        <p style="text-align:center;">微信公众号</p>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li style="text-indent: 40px;text-align:justify;"><a href="#"  @click.prevent="changeComp('Main')" :class="{'active':compName==='Main'}">首页</a></li>
        <li><a href="#"  @click.prevent="changeComp('CenterIntro')" :class="{'active':compName==='CenterIntro'}">中心介绍</a></li>
        <li><a href="#"  @click.prevent="changeComp('Notice')" :class="{'active':compName==='Notice'}">通知公告</a></li>
        <li><a href="#"  @click.prevent="changeComp('CenterDynamics')" :class="{'active':compName==='CenterDynamics'}">中心动态</a></li>
        <li><a href="#"  @click.prevent="changeComp('IndustryExchanges')" :class="{'active':compName==='IndustryExchanges'}">行业交流</a></li>
        <li><a href="#"  @click.prevent="changeComp('Famous')" :class="{'active':compName==='Famous'}">名家观点</a></li>
        <li><a href="#"  @click.prevent="changeComp('JobLook')" :class="{'active':compName==='JobLook'}">职业风采</a></li>
        <li><a href="#"  @click.prevent="changeComp('TestGuide')" :class="{'active':compName==='TestGuide'}">考试指南</a></li>
        <li><a href="https://ks.cptsol.cn"  @click="goLink" :class="{'active':menu==='TestSys'}">考试系统</a></li>
        <li><a href="#"  @click.prevent="changeComp('ContactUs')" :class="{'active':compName==='ContactUs'}">联系我们</a></li>
      </ul>
    </div>
  </div>
  <!-- <Home></Home> -->
  <component :is="compName" :showList="showList"  @changeComp="changeComp" :activeTabName="activeTabName" :articleId="articleId"></component>
  <Footer></Footer>
  <el-backtop :bottom="100">
    <div class="backtop">
      <el-icon color="#fff"><b><Top /></b></el-icon>
    </div>
  </el-backtop>
</template>

<script>
// import Banner from './components/Banner.vue'
import Footer from './components/Common/Footer.vue'
import Main from './components/Main.vue'
// import Home from './components/Pages/Home.vue' // 首页
import CenterIntro from './components/Pages/CenterIntro/CenterIntro.vue' // 中心介绍
import Notice from './components/Pages/Notice/Tab.vue' // 通知公告
import CenterDynamics from './components/Pages/CenterDynamics/Tab.vue' // 中心动态
import IndustryExchanges from './components/Pages/IndustryExchanges/Tab.vue' // 行业交流
import Famous from './components/Pages/Famous/Famous.vue' // 名家观点
import JobLook from './components/Pages/JobLook/JobLook.vue' // 职业风采
import TestGuide from './components/Pages/TestGuide/TestGuide.vue' // 考试指南
import TestSys from './components/Pages/TestSys/TestSys.vue' // 考试系统
import ContactUs from './components/Pages/ContactUs/ContactUs.vue' //  联系我们
import {Top} from '@element-plus/icons-vue'

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
      articleId:''
    }
  },
  methods: {
    changeComp(name) {
      this.compName = name;
      this.menu = "";
      this.activeTabName = 0;
    },
    lookDetails(name,id){
      this.compName = name;
      this.isFromHome = true;
      this.articleId = id;
    },
    goLink() {
      this.menu = "TestSys"
    },
    changeMenu(name,activeIndex){
      this.compName = name;
      this.activeTabName = activeIndex;
    }
   },
  components: {
    Top,
    // Banner,
    Main,
    // Home,// 首页
    CenterIntro, // 中心介绍
    CenterDynamics,
    Famous,
    JobLook,
    TestGuide,
    IndustryExchanges,
    TestSys,
    Notice,
    ContactUs,
    Footer
  }
}
</script>

<style scoped>
  @import '@/styles/app.css';
</style>
