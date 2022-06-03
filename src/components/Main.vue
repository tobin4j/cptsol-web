<template>

<div class="main">


  <div class="main-cards" style="padding-top:60px;">

    <div class="cards-item">

      <div class="flex-row">
        <span class="cards-item-title-text">中心动态</span>
        <div class="cards-item-title-tag flex-col" >
          <div class="cards-item-title-tag-new">
            new
          </div>
        </div>

      </div>
      <div class="st-x"></div>

      <div v-if="centerList.length">
        <div class="zxdt-img-con">
          <img alt="中心动态" class="common-img" :src="centerList[curCenterIdx].imgUrl" >
        </div>
        <div class="zxdt-img-text" >
          — 中心动态 MESSAGE —
        </div>
        <div class="zxdt-title">
          {{centerList[curCenterIdx].title}}
        </div>
        <div class="zxdt-summary">
          {{centerList[curCenterIdx].summary}}
        </div>
        <div class="zxdt-btn flex-row">
            <div >
              <img src="../assets/left.png"  style="width: 58px;cursor: pointer;" @click="goLeft">
            </div>
            <div style="margin: auto;" class="zxdt-circle-loop flex-row">
              <div class="zxdt-circle"  v-for="(item,idx) in centerList" :class="{'zxdt-circle-activity': idx === curCenterIdx}">
<!--                <div class=" ">{{idx}}</div>-->
              </div>
            </div>
            <div >
              <img src="../assets/right.png"  style="width: 58px;cursor: pointer;" @click="goRight">
            </div>

        </div>

      </div>

    </div>
    <div class="cards-item" style="margin-left: 55px">

      <div class="flex-row">
        <span class="cards-item-title-text">通知公告</span>
        <div class="cards-item-title-tag flex-col" >
          <div class="cards-item-title-tag-new">
            new
          </div>
        </div>

      </div>
      <div class="st-x"></div>

      <div class="tzgg-content" style="margin-top: 22px">
          <div class="tzgg-item flex-row" v-for="(item,idx) in list">
              <div style="width: 18%;">
                <div class="tzgg-date">{{item.pubdate.substring(5,11)}}</div>
                <div class="tzgg-year">{{item.pubdate.substring(0,4)}}</div>
              </div>
              <div>
                  <div class="tzgg-split"></div>
              </div>
              <div style="width: 82%">
                  <div class="tzgg-title">{{item.title}}</div>
                  <div class="tzgg-summary">{{item.summary}}</div>
              </div>
          </div>
      </div>


    </div>
  </div>
<!--  <div class="main-cards" style="margin-top:10px;">-->
<!--      <div class="cards-item" >-->
<!--        <el-card shadow="always" style="margin-right:16px;"> -->
<!--          <div style="margin-bottom: 25px;">-->
<!--            <span class="icon">-->
<!--              <img alt="logo" src="../assets/003.png">-->
<!--            </span>-->
<!--            <span class="jooblook">职业风采</span>-->
<!--            <span class="more" @click="goPage('joblook')">更多-->
<!--              <span class="more-icon">-->
<!--                <img src="../assets/more.png"/>-->
<!--              </span>-->
<!--            </span>-->
<!--          </div>-->
<!--          <div class="list">-->
<!--            <ul>-->
<!--              <li v-for="(item,index) in jobLookList" :key="index" @click="goDetails(7,item.articleId)">-->
<!--                <span class="msg-title" :title="item.title"><span class="dot"></span>{{ item.title}}</span>-->
<!--              <span class="date">「{{item.createTime.substring(0,10)}}」</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </div>-->
<!--      <div class="cards-item col">-->
<!--          <el-card shadow="always">-->
<!--            <div style="margin-bottom: 25px;">-->
<!--              <img alt="logo" src="../assets/004.png" style="vertical-align:bottom;">-->
<!--            <span class="application">合作申请</span>-->
<!--            </div>-->
<!--            <p class="content_intro">{{content}}</p>-->
<!--            <div class="apply">-->
<!--              <el-button style="margin: 0 auto;" @click="goPage('coopApply')">立即申请</el-button>-->
<!--            </div>-->
<!--          </el-card>-->
<!--          <el-card shadow="always" style="margin-top:16px;" class="last-one">-->
<!--            <div style="margin-bottom: 25px;" >-->
<!--               <span class="icon">-->
<!--                  <img alt="logo" src="../assets/005.png" style="vertical-align:middle;">-->
<!--               </span>-->
<!--            <span class="agency-query">机构查询</span>-->
<!--            </div>-->
<!--            <div style="margin-bottom: 0px;">-->
<!--            <el-form :inline="true" :model="formInline" class="demo-form-inline">-->
<!--            <el-form-item label="机构名称">-->
<!--              <el-input v-model="formInline.user" placeholder="请输入品牌/机构/培训名称"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-button  @click="onSubmit">查询</el-button>-->
<!--            </el-form>-->
<!--            <p class="intro">如果与您洽谈合作的机构在本系统中查询不到，请与我们电话联系，共同维护您的合法权益</p>-->
<!--            <p class="intro">联系电话：010-66666666</p>-->
<!--            </div>-->
<!--          </el-card>-->
<!--      </div>-->
<!--  </div>-->
<!--  <div class="main-cards" style="margin-top:66px;">-->
<!--      <div class="cards-item">-->
<!--          <div>-->
<!--            <span class="icon">-->
<!--              <img alt="logo" src="../assets/006.png" style="vertical-align:middle;padding-left:24px;">-->
<!--            </span>-->
<!--            <span class="cooperation-show" style="padding-left:32px;">合作展示</span>-->
<!--            <span class="more" @click="goPage('cooperateShow')">更多-->
<!--              <span class="more-icon">-->
<!--                <img src="../assets/more.png"/>-->
<!--              </span>-->
<!--            </span>-->
<!--            <div class="pics">-->
<!--             <div  v-for="(item,index) in articleList"-->
<!--             @mouseenter="enters(index)"-->
<!--             @mouseleave="leaver()"-->
<!--             :key="index" -->
<!--             @click="goDetails(10,item.articleId)"-->
<!--             class="item">-->
<!--                <img @click="go"   alt="logo" :src="item.imgUrl" style="height:100%;width:100%;" />-->
<!--                <div class="category-title" v-show="isvisible && index === current">{{item.title}}</div>-->
<!--             </div>-->
<!--            </div>-->
<!--          </div>-->
<!--      </div>-->
<!--  </div>-->
<!--  <div class="main-cards" style="margin-top:64px;">-->
<!--      <div class="cards-item">-->
<!--          <div style="margin-bottom: 65px;">-->
<!--            <span>-->
<!--              <img alt="logo" src="../assets/007.png" style="vertical-align:middle;padding-left:24px;">-->
<!--            </span>-->
<!--            <span class="friendly-link">友情链接</span>-->
<!--             <div class="pics container" style="margin-top: 25px;">-->
<!--                 <div class="pic-item" v-for="item in imgList" :key="item">-->
<!--                   <a :href="item.redirectUrl" target="_blank">-->
<!--                     <img alt="logo" :src="item.imgUrl" />-->
<!--                   </a>-->
<!--                </div>-->
<!--             </div>-->
<!--          </div>-->
<!--      </div>-->
<!--  </div>-->
</div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

import { useRouter } from 'vue-router'
export default {

  name: 'Main',
  data () {
    return {

      curCenterIdx:0,

      current: 0,
      formInline: {
        user: '',
        region: ''
      },
     content:'近几年，随着中国经济快速发展，全球汉语学习热潮正在兴起，国际中文教师的缺口数量逐年增加，鉴于目前参加考试的人数逐年增加，为了满足广大参考人员的要求，国际中文教师考试委员会为了完善全球考试中心布局，现启动培训中心合作计划。',
    }
  },
  setup() {
    const state = reactive({
      imgList: [],
      jobLookList:[],
      isvisible: false,
      isShow: false,
      centerList:[], // 中心动态
      list:[],// 通知公告
      articleList:[] // 合作展示、文章列表
    });
    const router = useRouter();
    const lookMore = (path)=> {
      router.push({
        path: path
      })
    };
    const lookDetails = (type,id)=> {
      let name = '';
      let comp = '';
      if(type == 10 ){ // 合作展示详情
        name = 'coopDetails';
        comp = 74
      }  
      if(type == 2) { // 公告详情
        name = 'details'
        comp = 3
      } 
      if(type == 3) { // 中心动态详情
        name = 'dynamicDetail'
        comp = 4
      } 
      if(type == 7) { // 职业风采详情
        name = 'jobStyleDetail'
        comp = 71
      } 
      router.push({
      name: name,
      params: {
        type: type,
        id:id,
        comp:comp
      }
    })  
    };
    onMounted(async () => {
      // banner图
      const bannerUrl="https://api.cptsol.cn/api/open/adList?type=2";
      // 合作展示即文章列表
      const joinShowUrl="https://api.cptsol.cn/api/open/articleList?type=10&page=1&size=4";
      //通知公告
      const noticeUrl="https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=5";
      //中心动态
      const centerUrl = "https://api.cptsol.cn/api/open/articleList?type=3&page=1&size=5";

      const jobLookUrl="https://api.cptsol.cn/api/open/articleList?type=7&page=1&size=10";
      state.lookMore = lookMore;
      state.lookDetails = lookDetails;
      (async function () {
        const res = await axios.get(bannerUrl) //返回 {id:0}
        state.imgList = res.data;
      })();
      (async function () {
        const res = await axios.get(joinShowUrl) //返回 {id:0}
        state.articleList = res.data.data;
      })();
      (async function () {
        const res = await axios.get(noticeUrl) //通知公告
        state.list = res.data.data;
      })();
      (async function () {
        const res = await axios.get(centerUrl) //中心动态
        state.centerList = res.data.data;
      })();
      (async function () {
        const res = await axios.get(jobLookUrl) //职业风采
        state.jobLookList = res.data.data;
      })();
    })
    return state
  },
  methods: {
    // 方法
    onSubmit() {
      console.log('submit!');
    },
    goLeft(){
      if (!this.centerList || !this.centerList.length || this.centerList.length === 1) {
        return;
      }
      if (this.curCenterIdx === 0) {
        this.curCenterIdx = this.centerList.length - 1;
        return;
      }
      this.curCenterIdx -=  1;
    },
    goRight(){
      if (!this.centerList || !this.centerList.length || this.centerList.length === 1) {
        return;
      }
      if (this.curCenterIdx === this.centerList.length - 1) {
        this.curCenterIdx = 0;
        return;
      }
      this.curCenterIdx +=  1;
    },
    enters(index){
      this.current = index;
      this.isvisible = true;
    },
    leaver(){
      this.current = null;
      this.isvisible = false;
    },
    goPage(compName){
      if(compName === 'coopApply') {
        this.lookMore('/contact/coopApply')
      }
      if(compName === 'notice') { 
        this.lookMore('/notice')
      }
      if(compName === 'centerDynamics') {
        this.lookMore('/centerDynamics')
      }
      if(compName==='joblook') {
        this.lookMore('/jobLook/jobStyle')
      }
      if(compName === 'cooperateShow') {
        this.lookMore('/jobLook/cooperateShow')
      }
      //this.$parent.changeMenu(compName,activeTab)
    },
    goDetails(name,type,id){
     this.lookDetails(name,type,id);
    }
  },
  created () {
    // 生命钩子
    axios.get("https://api.cptsol.cn/api/st/cd")
  },
  computed: {
    // 计算属性
  }
  
}
</script>

<style scoped>
  @import '@/styles/main.css';
  .icon{
    display: inline-block;
    height: 20px;
    width: 20px;
  }
  .icon img {
    vertical-align: middle;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
</style>
