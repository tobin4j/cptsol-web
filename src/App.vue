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
            <router-link to="/index" class="menu-text">首页</router-link>
            <div class="menu-active" style="margin-left: 34px"></div>
          </li>

          <li>
            <router-link to="/singleArticle/zxjs" class="menu-text">中心介绍</router-link>
            <div class="menu-active" ></div>
          </li>

          <li><router-link to="/notice" class="menu-text">通知公告</router-link><div class="menu-active" ></div></li>
          <li><router-link to="/centerDynamics" class="menu-text">中心动态</router-link><div class="menu-active" ></div></li>
          <li><router-link to="/industryExchanges" class="menu-text">行业交流</router-link><div class="menu-active" ></div></li>

          <li>
            <div class="flex-row has-select">
              <div>
                <a class="menu-text">
                  名家观点
                </a>
                <div class="menu-active"></div>
              </div>
              <div class="menu-jt"/>
            </div>
            <div class="menu-select" style="height: 88px">
              <div class="menu-select-item">名家观点</div>
              <div class="menu-select-item">名家团队</div>
            </div>
          </li>

          <li>
            <div class="flex-row has-select">
              <div>
                <a to="/joblook" class="menu-text">
                  职业风采
                </a>
                <div class="menu-active"></div>
              </div>
              <div class="menu-jt"/>
            </div>
            <div class="menu-select" style="height: 176px">
              <div class="menu-select-item">职业风采</div>
              <div class="menu-select-item">就业信息</div>
              <div class="menu-select-item">教学分享</div>
              <div class="menu-select-item">合作展示</div>
            </div>
          </li>

          <li>
            <div class="flex-row has-select">
              <div>
                <a to="/testGuide" class="menu-text" :class="{'router-link-active':ksznActive}">
                  考试指南
                </a>
                <div class="menu-active"></div>
              </div>
              <div class="menu-jt"/>
            </div>
            <div class="menu-select" style="height: 396px">
              <div class="menu-select-item" @click="$router.push({path:'/singleArticle/ksjs'});ksznActive=true">考试介绍</div>
              <div class="menu-select-item">考试范围</div>
              <div class="menu-select-item">考试结构</div>
              <div class="menu-select-item">考试标准</div>
              <div class="menu-select-item">真题实例</div>
              <div class="menu-select-item">考试用书</div>
              <div class="menu-select-item">报名流程</div>
              <div class="menu-select-item">考试流程</div>
              <div class="menu-select-item">证书申请流程</div>
            </div>
          </li>

          <li><a href="https://ks.cptsol.cn" class="menu-text"    target="_blank">考试系统</a></li>

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
              <div class="menu-select-item">联系我们</div>
              <div class="menu-select-item">合作申请</div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
  <Banner v-show="$route.path === '/index'"></Banner>
  <router-view :key="key"/>
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
      coopId:'' ,// 合作展示
    }
  },
  computed:{
    key() {
      // 只要保证 key 唯一性就可以了，保证不同页面的 key 不相同
      return this.$route.fullPath
    }
  },
  methods: {

  },
  components: {
    Top,
    Banner,
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


  /*@media screen and (min-width: 0px) and (max-width: 1770px){*/

  /*  .menu{*/
  /*    display: none;*/
  /*  }*/
  /*}*/
</style>
