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


    <div class="zyfc flex-col">

        <div class="common-text1">
            PROFESSIONAL DEMEANOR
        </div>
        <div class="common-text2">
                职业风采
        </div>
        <div class="st-x" style="margin: 12px auto"></div>

        <div class="zyfc-item flex-row" v-for="(item,idx) in jobLookList">
            <div style="min-width: 85px;max-width: 85px">
                <div class="zyfc-date">{{item.pubdate.substring(5,11)}}</div>
                <div class="zyfc-year">{{item.pubdate.substring(0,4)}}</div>
            </div>
            <div style="margin-left: 43px;min-width: 66%;max-width:66%;text-align: left">
                <div class="zyfc-title single-line-break">
                    {{item.title}}
                </div>
                <div class="zyfc-summary third-line-break" style="margin-top: 24px">
                    {{item.summary}}
                </div>
                <div class="zyfc-more" style="margin-top: 35px">
                    MORE
                    <img src="../assets/xjt.png"/>
                </div>
            </div>
            <div class="zyfc-img" style="margin-left: 56px" >
                <img :src="item.imgUrl" class="common-img" />
            </div>

        </div>

    </div>


    <div class="hzsq flex-col">
        <div class="common-text1">
            PROFESSIONAL DEMEANOR
        </div>
        <div class="common-text2">
            合作申请
        </div>
        <div class="st-x" style="margin: 12px auto"></div>

        <div class="hzsq-word">
            <img src="../assets/hzsq_word.png" style="width: 412px;height: 102px"/>
        </div>

        <div class="hzsq-content flex-row" >
            <div class="hzsq-img" >
                <!--todo合作申请图片 -->
            </div>
            <div class="hzsq-text-con" style="z-index: 1;left: -24px;position: relative">


                <div class="hzsq-text">
                    近几年，随着中国经济快速发展，全球汉语学习热潮正在兴起，国际中文教师的缺口数量逐年增加，鉴于目前参加考试的人数逐年增加，为了满足广大参考人员的要求，中国文化信息协会汉语推广工作委员会为了完善全球考试中心布局，现启动培训中心合作计划。
                </div>
                  <el-button style="margin:38px auto;" >立即申请</el-button>
            </div>

        </div>

    </div>

    <div class="jgcx flex-col">
        <div class="common-text1">
            AGENCY QUERY
        </div>
        <div class="common-text2">
            机构查询
        </div>
        <div class="st-x" style="margin: 12px auto"></div>

        <div class="jgcx-word">
            <img src="../assets/jgcx_word.png" style="width: 336px;height: 102px"/>
        </div>

        <div class="jgcx-content flex-row" >
            <div class="jgcx-img" >
                <!--todo 机构查询申请图片 -->
            </div>
            <div class="jgcx-text-con" style="z-index: 1;left: -24px;position: relative">


                <div style="width: 83%;margin: 107px auto auto 50px;">
                    <div class="flex-row" >
                        <el-input style="width: 85%" placeholder="请输入品牌/机构/培训名称"></el-input>
                        <el-button style="width: 15%"  @click="onSubmit">查询</el-button>
                    </div>
                    <p class="jgcx-text">如果与您洽谈合作的机构在本系统中查询不到，请与我们电话联系，共同维护您的合法权益</p>
                    <p class="jgcx-text">联系电话：010-66666666</p>
                </div>
            </div>

        </div>

    </div>


    <div class="hzzs flex-col">
        <div class="common-text1">
            COOPERATION SHOW
        </div>
        <div class="common-text2">
            合作展示
        </div>
        <div class="st-x" style="margin: 12px auto"></div>

        <div class="flex-row" style="width: 100%;margin:85px auto">

            <div class="hzzs-side">
                <img src="../assets/img_left.png" @click="curIv -= 1"/>
            </div>

            <div class="hzzs-content flex-row">
                <div class="hzzs-item">
                    <span v-if="articleList[curIv % 3]">
                        <img  class="common-img common-img-transition" :src="articleList[curIv % 3].imgUrl"/>
                        <div class="hzzs-item-bg">
                            <div class="hzzs-item-title single-line-break">
                            {{articleList[curIv % 3].title}}
                            </div>
                            <div class="flex-row">
                                <div class="hzzs-item-summary single-line-break">
                                    {{articleList[curIv % 3].summary}}
                                </div>
                                <img src="../assets/hzzs-jt.png" style="height: 20px;width: 23px"/>
<!--                                <div class="arrow-right" style="margin-left: auto;"></div>-->
                            </div>
                        </div>
                    </span>
                </div>
                <div class="hzzs-item">
                    <span v-if="articleList[(curIv + 1) % 3]">
                        <img class="common-img" :src="articleList[(curIv + 1) % 3].imgUrl"/>
                        <div class="hzzs-item-bg">
                            <div class="hzzs-item-title single-line-break">
                            {{articleList[(curIv + 1) % 3].title}}
                            </div>
                            <div class="flex-row">
                                <div class="hzzs-item-summary single-line-break">
                                    {{articleList[(curIv + 1) % 3].summary}}
                                </div>
                                <img src="../assets/hzzs-jt.png" style="height: 20px;width: 23px"/>
<!--                                <div class="arrow-right" style="margin-left: auto;"></div>-->
                            </div>
                        </div>
                    </span>
                </div>
                <div class="hzzs-item" style="margin-right: 20px">
                    <span v-if="articleList[(curIv + 2) % 3]">
                        <img class="common-img" :src="articleList[(curIv + 2) % 3].imgUrl"/>
                        <div class="hzzs-item-bg">
                            <div class="hzzs-item-title single-line-break">
                            {{articleList[(curIv + 2) % 3].title}}
                            </div>
                            <div class="flex-row">
                                <div class="hzzs-item-summary single-line-break">
                                    {{articleList[(curIv + 2) % 3].summary}}
                                </div>
                                <img src="../assets/hzzs-jt.png" style="height: 20px;width: 23px"/>
<!--                                <div class="arrow-right" style="margin-left: auto;"></div>-->
                            </div>
                        </div>
                    </span>
                </div>
            </div>

            <div class="hzzs-side" style="margin-left: auto;">
                <img src="../assets/img_right.png" @click="curIv += 1"/>
            </div>




        </div>


            <el-button style="margin:0 auto;" >MORE</el-button>



    </div>

    <div class="yqlj flex-col">
        <div class="common-text1">
            FRIENDLY LINK
        </div>
        <div class="common-text2">
            友情链接
        </div>
        <div class="st-x" style="margin: 12px auto"></div>

        <div class="flex-row" style="width: 77%;margin:36px auto">

            <div class="yqlj-item" v-for="(item,idx) in imgList">


                <a :href="item.redirectUrl"  target="_blank">
                    <img :src="item.imgUrl" class="common-img"/>
                </a>

            </div>

        </div>



    </div>


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
        //合作展示偏移量
      curIv:0,

      current: 0,

        timer:null
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
      // 友链
      const bannerUrl="https://api.cptsol.cn/api/open/adList?type=2";
      // 合作展示即文章列表
      const joinShowUrl="https://api.cptsol.cn/api/open/articleList?type=10&page=1&size=4";
      //通知公告
      const noticeUrl="https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=5";
      //中心动态
      const centerUrl = "https://api.cptsol.cn/api/open/articleList?type=3&page=1&size=5";
      //职业风采
      const jobLookUrl="https://api.cptsol.cn/api/open/articleList?type=7&page=1&size=3";
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

    });
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
      this.timer = setInterval(() => {
          this.curIv += 1;
      }, 3000);

  },
  computed: {
    // 计算属性
  },

    beforeDestroy(){
      if (this.timer){
          clearInterval(this.timer)
          this.timer = null
      }
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
