<template>
  <div class="header">
    <div class="header-container">
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
        <p>微信公众号</p>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li><a href="https://router.vuejs.org@" target="_blank" rel="noopener">首页</a></li>
        <li><a href="https://vuex.vuejs.org@" target="_blank" rel="noopener">中心介绍</a></li>
        <li><a href="https://github.com/vuejs/vue2-devtools#vue-devtools" target="_blank" rel="noopener">通知公告</a></li>
        <li><a href="https://vue-loader.vuejs.org2" target="_blank" rel="noopener">中心动态</a></li>
        <li><a href="https://github.com/vuejs/awes2ome-vue" target="_blank" rel="noopener">行业交流</a></li>
        <li><a href="https://github.com/vuejs/aweso2m2e-vue" target="_blank" rel="noopener">名家观点</a></li>
        <li><a href="https://github.com/vuejs/awes2o2me-vue" target="_blank" rel="noopener">职业风采</a></li>
        <li><a href="https://github.com/vuejs/awe2som2e-vue" target="_blank" rel="noopener">考试指南</a></li>
        <li><a href="https://github.com/vuejs/awesom2e2-vue" target="_blank" rel="noopener">考试系统</a></li>
        <li><a href="https://github.com/vuejs/awesome-2vue" target="_blank" rel="noopener">联系我们</a></li>
      </ul>
    </div>
  </div>
  <Banner></Banner>
  <div class="main">
    <Main></Main>
  </div>
  <Footer></Footer>
  <el-backtop :bottom="100">
    <div class="backtop">
      <el-icon color="#fff"><b><Top /></b></el-icon>
    </div>
  </el-backtop>
</template>

<script>
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
import {Top} from '@element-plus/icons-vue'
export default {
  name: 'App',
  components: {
    Top,
    Banner,
    Main,
    Footer
  }
}
</script>

<style scoped>
  @import '@/styles/app.css';
</style>
