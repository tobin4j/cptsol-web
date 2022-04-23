<template>
  <div class="main-cards" style="margin-top:32px;">
      <div class="cards-item">
        <el-card shadow="always" style="margin-right:16px;"> 
          <div style="margin-bottom: 25px;">
            <img alt="logo" src="../assets/001.png" style="vertical-align:middle;">
            <span class="notice">通知公告</span>
            <span class="more">更多<img src="../assets/more.png" style="vertical-align: text-bottom;"/></span>
          </div>
          <div class="list">
            <ul>
              <li v-for="(item,index) in list" :key="index">
               <span class="msg-title"><span class="dot"></span>{{ item.message }}</span>
              <span class="date">{{item.date}}</span>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
      <div class="cards-item">
        <el-card shadow="always" style="margin-right:16px;"> 
          <div style="margin-bottom: 25px;">
            <img alt="logo" src="../assets/002.png" style="vertical-align:middle;">
            <span class="trends">中心动态</span>
            <span class="more">更多<img src="../assets/more.png" style="vertical-align: text-bottom;"/></span>
          </div>
          <div class="list">
            <ul>
              <li v-for="(item,index) in list" :key="index">
               <span class="msg-title"><span class="dot"></span>{{ item.message }}</span>
               <span class="date">{{item.date}}</span>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
  </div>
  <div class="main-cards" style="margin-top:10px;">
      <div class="cards-item" >
        <el-card shadow="always" style="margin-right:16px;"> 
          <div style="margin-bottom: 25px;">
            <img alt="logo" src="../assets/003.png"  style="vertical-align:middle;">
            <span class="jooblook">职业风采</span>
            <span class="more">更多<img src="../assets/more.png" style="vertical-align: text-bottom;"/></span>
          </div>
          <div class="list">
            <ul>
              <li v-for="(item,index) in list2" :key="index">
                <span class="msg-title"><span class="dot"></span>{{ item.message }}</span>
              <span class="date">{{item.date}}</span>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
      <div class="cards-item col">
          <el-card shadow="always" style="margin-right:16px;">
            <div style="margin-bottom: 25px;">
            <img alt="logo" src="../assets/004.png" style="vertical-align:middle;">
            <span class="application">合作申请</span>
            </div>
            <p class="content_intro">{{content}}</p>
            <div class="apply">
              <el-button style="margin: 0 auto;">立即申请</el-button>
            </div>
          </el-card>
          <el-card shadow="always" style="margin-right:16px; margin-top:16px;" class="last-one">
            <div style="margin-bottom: 25px;" >
            <img alt="logo" src="../assets/005.png" style="vertical-align:middle;">
            <span class="agency-query">机构查询</span>
            </div>
            <div style="margin-bottom: 0px;">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="机构名称">
              <el-input v-model="formInline.user" placeholder="请输入品牌/机构/培训名称"></el-input>
            </el-form-item>
            <el-button  @click="onSubmit">查询</el-button>
            </el-form>
            <p class="intro">如果与您洽谈合作的机构在本系统中查询不到，请与我们电话联系，共同维护您的合法权益</p>
            <p class="intro">联系电话：010-66666666</p>
            </div>
          </el-card>
      </div>
  </div>
  <div class="main-cards" style="margin-top:66px;">
      <div class="cards-item">
          <div>
            <img alt="logo" src="../assets/006.png" style="vertical-align:middle;padding-left:24px;">
            <span class="cooperation-show">合作展示</span>
            <span class="more">更多<img src="../assets/more.png" style="vertical-align: text-bottom;"/></span>
            <div class="pics">
             <div  v-for="(item,index) in articleList"
             @mouseenter="enters(index)"
             @mouseleave="leaver()"
             :key="index" 
             class="item">
                <img @click="go"   alt="logo" :src="item.imgUrl" style="height:100%;width:100%;" />
                <div class="category-title" v-show="isvisible && index === current">{{item.title}}</div>
             </div>
            </div>
          </div>
      </div>
  </div>
  <div class="main-cards" style="margin-top:64px;">
      <div class="cards-item">
          <div style="margin-bottom: 65px;">
            <img alt="logo" src="../assets/007.png" style="vertical-align:middle;padding-left:24px;">
            <span class="friendly-link">友情链接</span>
             <div class="pics container" style="margin-top: 25px;">
                 <div class="pic-item" v-for="item in imgList" :key="item">
                   <img alt="logo" :src="item.imgUrl" />
                </div>
             </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'Main',
  data () {
    return {
      current: 0,
      formInline: {
        user: '',
        region: ''
      },
      content:'近几年，随着中国经济快速发展，全球汉语学习热潮正在兴起，国际中文教师的缺口数量逐年增加，鉴于目前参加考试的人数逐年增加，为了满足广大参考人员的要求，国际中文教师考试委员会为了完善全球考试中心布局，现启动培训中心合作计划。',
      list: [
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......',date: '「2022-05-05」' },
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......',date: '「2022-05-05」' },
      ],
      list2: [
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......',date: '「2022-05-05」' },
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......',date: '「2022-05-05」' },
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......',date: '「2022-05-05」' },
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......' ,date: '「2022-05-05」'},
        { message: '某某公告 | 2022年第一期国际中文执业能力考试报名......',date: '「2022-05-05」' },
      ]
    }
  },
  setup() {
    const state = reactive({
      imgList: [],
      isvisible: false,
      isShow: false,
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      // banner图
      var bannerUrl="https://api.cptsol.cn/api/open/adList?type=2";
      // 合作展示即文章列表
      var joinShowUrl="https://api.cptsol.cn/api/open/articleList?type=10&page=1&size=4";
      (async function () {
        const res = await axios.get(bannerUrl) //返回 {id:0}
        state.imgList = res.data;
      })();
       (async function () {
        const res = await axios.get(joinShowUrl) //返回 {id:0}
        state.articleList = res.data.data;
      })();
    })
    return state;
  },
  methods: {
    // 方法
    onSubmit() {
      console.log('submit!');
    },
    go(){
      alert('嘿嘿，想看详情页嘛，还没加~~')
    },
    enters(index){
      this.current = index;
      this.isvisible = true;
    },
    leaver(){
      this.current = null;
      this.isvisible = false;
    }
  },
  created () {
    // 生命钩子
  },
  computed: {
    // 计算属性
  }
}
</script>

<style scoped>
  @import '@/styles/main.css';
  /* .cards-item >>>.el-card__body {
    padding: unset;
  } */
</style>
