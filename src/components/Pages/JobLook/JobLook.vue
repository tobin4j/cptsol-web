<template>
  <!-- 中心介绍 -->
  <!-- <p class="tab">{{title}}</p> -->
  <div class="tab">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="职业风采" name="jobLook" class="tab-content">
          <JobStyle ></JobStyle>
        </el-tab-pane>
        <el-tab-pane label="就业信息" name="jobMsg" class="tab-content">
          <JobInfo></JobInfo>
        </el-tab-pane>
        <el-tab-pane label="教学分享" name="teachShare" class="tab-content">
          <TeachShare></TeachShare>
        </el-tab-pane>
        <el-tab-pane label="合作展示" name="cooperateShow" class="tab-content">
          <CooperateShow></CooperateShow>
        </el-tab-pane>
  </el-tabs>
 </div>
</template>

<script>
import SearchKey from '@/components/Common/SearchKey'
import JobStyle from './JobStyle.vue'
import JobInfo from './JobInfo.vue'
import TeachShare from './TeachShare.vue'
import CooperateShow from './CooperateShow.vue'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'Notice',
  props:['activeTabName'],
   data () {
    return {
       title:'中心介绍',
       total: 10,
       content:'某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......',
       activeName:'jobLook'
    }
   },
   watch:{
     activeTabName:{
       immediate:true,
       deep:true,
       handler: function(val) {
         if(val === 3) {
           this.activeName = 'cooperateShow';
         }
       }
     }
   },
  setup() {
    const state = reactive({
      noticeList: [],
      isvisible: false,
      isShow: false,
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/adList?type=2";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.noticeList = res.data;
      })();
    })
    return state;
  },
  components: {
    SearchKey,
    TeachShare,
    CooperateShow,
    JobInfo,
    JobStyle 
  }
}
</script>

<style scoped>
.tab {
  width: 1200px;
  margin: 0 auto;
  margin: 15px auto;
  text-indent: 20px;
  font-size: 16px;
  font-family: "PingFangSC-Semibold", "PingFang SC";
  font-weight: 600;
  color: #454545;
  line-height: 22px;
}
/* .intro-content {
    width: 1200px;
    margin: 0 auto;
} */
.tab >>>.el-tabs__header {
    margin: 0;
}
.tab >>>.el-tabs__active-bar {
    left: 20px;
    height: 3px;
    width: 65px!important;
    background-color: #2F318B;
}
.tab >>>.el-tabs__item.is-active {
    font-size: 16px;
    font-family: "PingFangSC-Semibold", "PingFang SC";
    font-weight: 600;
    color: #454545;
}
.tab >>>.el-tabs__nav-wrap::after {
      position: static !important;
}
.tab-content {
    padding-left: 20px; 
    margin-top: 32px;
}
.center-intro{
  width: 1200px;
  height: 436px;
}
.center-intro img {
  height: 100%;
  width: 100%;
  object-fit: fill;
  border-radius: 6px;
  border: 1px solid #979797;
}
 .intro-content{
  margin-top: 24px;
  margin-bottom: 92px;
}
.intro-content p {
    font-size: 16px;
    font-family: "PingFangSC-Semibold", "PingFang SC";
    font-weight: 600;
    color: #454545;
    line-height: 22px;
    padding-left: 20px;
    text-indent: 0;
    text-align: justify;
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

</style>
