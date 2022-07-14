<template>

<div class="main">


    <div class="main-cards" style="padding-top:50px;">

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
            <div class="zxdt-title" @click="goDetail('zxdt',centerList[curCenterIdx])">
              {{centerList[curCenterIdx].title}}
            </div>
            <div class="zxdt-summary third-line-break" style="-webkit-line-clamp:2">
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

      <div class="tzgg-content" style="margin-top: 15px;background-color: #fcfcfc">
          <div class="tzgg-item flex-row" v-for="(item,idx) in list" @click="goDetail('tzgg',item)">
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
        <div class="st-x" style="margin: 15px auto 25px auto"></div>

        <div class="zyfc-item flex-row" v-for="(item,idx) in jobLookList" @click="goDetail('zyfc',item)">
            <div style="min-width: 85px;max-width: 85px">
                <div class="zyfc-date">{{item.pubdate.substring(5,11)}}</div>
                <div class="zyfc-year">{{item.pubdate.substring(0,4)}}</div>
            </div>
            <div style="margin-left: 43px;min-width: 66%;max-width:66%;text-align: left">
                <div class="zyfc-title single-line-break">
                    {{item.title}}
                </div>
                <div class="zyfc-summary third-line-break" style="margin-top: 25px">
                    {{item.summary}}
                </div>
                <div class="zyfc-more" style="margin-top: 65px">
                    MORE
                    <img src="../assets/xjt.png"/>
                </div>
            </div>
            <div class="zyfc-img" style="margin-left: 56px" >
                <img :src="item.imgUrl" class="common-img" style="height: 250px;width: 400px;"/>
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
        <div class="st-x" style="margin: 15px auto"></div>

<!--        <div class="jgcx-word">-->
<!--            <img src="../assets/jgcx_word.png" style="width: 336px;height: 102px"/>-->
<!--        </div>-->

        <div class="jgcx-content flex-row" >
            <div class="jgcx-img" >
                <!--todo 机构查询申请图片 -->
            </div>
            <div class="jgcx-text-con" style="z-index: 1;left: -24px;position: relative">


                <div style="width: 730px;margin: 127px 82px auto;">
                    <div class="flex-row" >
                        <el-input style="width: 630px" placeholder="请输入机构品牌/公司名称"></el-input>
                        <el-button style="width: 100px"  @click="">查询</el-button>
                    </div>
                    <p class="jgcx-text">如果与您洽谈合作的机构在本系统中查询不到，请与我们电话联系，共同维护您的合法权益</p>
                    <p class="jgcx-text">联系电话：010-69730714</p>
                </div>
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
        <div class="st-x" style="margin: 15px auto"></div>

        <!--        <div class="hzsq-word">-->
        <!--            <img src="../assets/hzsq_word.png" style="width: 412px;height: 102px"/>-->
        <!--        </div>-->

        <div class="hzsq-content flex-row" >
            <div class="hzsq-img" >
                <!--todo合作申请图片 -->
            </div>
            <div class="hzsq-text-con" style="z-index: 1;left: -24px;position: relative">


                <div class="hzsq-text" style="margin: 105px 77px auto;">
                    近几年，随着中国经济快速发展，全球汉语学习热潮已然兴起，国际中文教师的缺口数量也逐年增加；同时，为响应国家职业教育大会号召发展国际中文教育事业，中国文化信息协会汉语推广工作委员会着眼于全球化布局，为实现这一宏伟目标，现启动培训中心合作计划。
                </div>
                <el-button type="primary" style="margin:25px auto;" >立即申请</el-button>
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
        <div class="st-x" style="margin: 15px auto"></div>

        <div class="flex-row" style="width: 100%;margin:35px auto 25px auto">

            <div class="hzzs-side">
                <img src="../assets/img_left.png" @click="curIv -= 1"/>

<!--                <button type="button" class="hzzs-side-btn">-->
<!--                    <i class="el-icon">-->
<!--                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path fill="currentColor" d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"></path>-->
<!--                        </svg>-->
<!--                    </i>-->
<!--                </button>-->

            </div>

            <div class="hzzs-content flex-row">
                <div class="hzzs-item">
                    <span v-if="articleList[curIv % articleSize]">
                        <img  class="common-img common-img-transition" :src="articleList[curIv % articleSize].imgUrl"/>
                        <div class="hzzs-item-bg">
                            <div class="hzzs-item-title single-line-break">
                            {{articleList[curIv % articleSize].title}}
                            </div>
                            <div class="flex-row">
                                <div class="hzzs-item-summary single-line-break">
                                    {{articleList[curIv % articleSize].summary}}
                                </div>
                                <img src="../assets/hzzs-jt.png" style="height: 20px;width: 23px"/>
<!--                                <div class="arrow-right" style="margin-left: auto;"></div>-->
                            </div>
                        </div>
                    </span>
                </div>
                <div class="hzzs-item">
                    <span v-if="articleList[(curIv + 1) % articleSize]">
                        <img class="common-img" :src="articleList[(curIv + 1) % articleSize].imgUrl"/>
                        <div class="hzzs-item-bg">
                            <div class="hzzs-item-title single-line-break">
                            {{articleList[(curIv + 1) % articleSize].title}}
                            </div>
                            <div class="flex-row">
                                <div class="hzzs-item-summary single-line-break">
                                    {{articleList[(curIv + 1) % articleSize].summary}}
                                </div>
                                <img src="../assets/hzzs-jt.png" style="height: 20px;width: 23px"/>
<!--                                <div class="arrow-right" style="margin-left: auto;"></div>-->
                            </div>
                        </div>
                    </span>
                </div>
                <div class="hzzs-item" style="margin-right: 20px">
                    <span v-if="articleList[(curIv + 2) % articleSize]">
                        <img class="common-img" :src="articleList[(curIv + 2) % articleSize].imgUrl"/>
                        <div class="hzzs-item-bg">
                            <div class="hzzs-item-title single-line-break">
                            {{articleList[(curIv + 2) % articleSize].title}}
                            </div>
                            <div class="flex-row">
                                <div class="hzzs-item-summary single-line-break">
                                    {{articleList[(curIv + 2) % articleSize].summary}}
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


            <el-button style="margin:0 auto;" type="primary" >MORE</el-button>



    </div>

    <div class="yqlj flex-col">
        <div class="common-text1">
            FRIENDLY LINK
        </div>
        <div class="common-text2">
            友情链接
        </div>
        <div class="st-x" style="margin: 15px auto"></div>

        <div class="flex-row" style="margin:35px auto 0 auto">

            <div class="yqlj-item" v-for="(item,idx) in imgList.slice(0,4)">

                <a :href="item.redirectUrl"  target="_blank">
                    <img :src="item.imgUrl" class="common-img"/>
                </a>

            </div>
        </div>

        <div class="flex-row" style="margin:25px auto 0 auto">

            <div class="yqlj-item" v-for="(item,idx) in imgList.slice(4,8)">

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
      articleList:[], // 合作展示、文章列表
        articleSize:0
    });
    onMounted(async () => {

      // 友链
      const bannerUrl="https://api.cptsol.cn/api/open/adList?type=2";
      // 合作展示即文章列表
      const joinShowUrl="https://api.cptsol.cn/api/open/articleList?type=10&page=1&size=99";
      //通知公告
      const noticeUrl="https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=5";
      //中心动态
      const centerUrl = "https://api.cptsol.cn/api/open/articleList?type=3&page=1&size=5";
      //职业风采
      const jobLookUrl="https://api.cptsol.cn/api/open/articleList?type=7&page=1&size=5";
      (async function () {
        const res = await axios.get(bannerUrl) //返回 {id:0}
        state.imgList = res.data;
      })();
      (async function () {
        const res = await axios.get(joinShowUrl) //返回 {id:0}
        state.articleList = res.data.data;
        state.articleSize = state.articleList.length;

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
      goDetail(cm,item){
          this.$router.push({
              path : '/detail/'+cm+'/'+item.articleId
          })

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
