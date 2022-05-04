<template>
  <div class="tab">
    <el-tabs v-model="activeName"  @tab-change="handleClick" :class="['demo-tabs', { 'lastone': activeName=='CertificateClaimProcess' }]">
        <!-- <el-tab-pane :label="item.label" :name="item.name" class="tab-content" v-for="(item,index) in tabs" :key="index">
          <template v-if="activeName ==='testIntro' 
            || activeName ==='testRangle'
            || activeName ==='testStruce'" > 
            <div v-html="introContent" class="tab-content"></div>
          </template>
          <template v-else-if="activeName ==='registerProcess' 
            || activeName ==='testProcess'
            || activeName ==='CertificateClaimProcess'">
            <RegisterProcess v-if="activeName==='registerProcess'"></RegisterProcess>
            <TestProcess v-if="activeName==='testProcess'"></TestProcess>
            <CertificateClaimProcess v-if="activeName==='CertificateClaimProcess'"></CertificateClaimProcess>
          </template>
          <template v-else>
            <TestBook v-if="activeName==='testBook'"></TestBook>
            <QExample v-if="activeName==='qExample'"></QExample>
            <TestStandard v-if="activeName==='testStandard'"></TestStandard>
          </template>
        </el-tab-pane> -->
        <el-tab-pane class="tab-content" label="考试介绍" name="testIntro">
          <div v-html="introContent" class="tab-content" v-show="activeName ==='testIntro'"></div>
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试范围" name="testRangle">
           <div v-html="introContent" class="tab-content" v-show="activeName ==='testRangle'"></div>
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试结构" name="testStruce">
          <div v-html="introContent" class="tab-content" v-show="activeName ==='testStruce'"></div>
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试标准" name="testStandard">
          <TestStandard v-if="activeName==='testStandard'"></TestStandard>
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="真题实例" name="qExample">
          <QExample v-if="activeName==='qExample'"></QExample>
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试用书" name="testBook">
          <TestBook v-if="activeName==='testBook'"></TestBook>
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="报名流程" name="registerProcess">
          <RegisterProcess v-if="activeName==='registerProcess'"></RegisterProcess>
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试流程" name="testProcess">
          <TestProcess v-if="activeName==='testProcess'"></TestProcess>
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="证书申领流程" name="CertificateClaimProcess">
          <CertificateClaimProcess v-if="activeName==='CertificateClaimProcess'"></CertificateClaimProcess>
        </el-tab-pane>
  </el-tabs>
 </div>
</template>

<script>
import SearchKey from '@/components/Common/SearchKey'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import Details from '@/components/Common/Details'
import RegisterProcess from './RegisterProcess.vue';
import TestProcess from './TestProcess.vue';
import CertificateClaimProcess from './CertificateClaimProcess.vue';
import TestBook from './TestBook.vue';
import QExample from './QExample.vue';
import TestStandard from './TestStandard.vue';
export default {
  name: 'Notice',
   data () {
    return {
       label:'国际中文教师职业能力证书考试报名流程',
       tabs: [{label:'考试介绍',name:'testIntro'},
       {label: '考试范围',name:'testRangle'},
       {label: '考试结构',name:'testStruce'},
       {label: '考试标准',name:'testStandard'},
       {label: '真题实例',name:'qExample'},
       {label: '考试用书',name:'testBook'},
       {label: '报名流程',name:'registerProcess'},
       {label: '考试流程',name:'testProcess'},
       {label: '证书申领流程',name:'CertificateClaimProcess'}],
       title:'中心介绍',
       total: 10,
       content:'某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......',
       activeName:'testIntro'
    }
   },
  methods: {
    // 方法
    onSubmit() {
      console.log('submit!');
    },
    getContent(typeVal) {
      let noticeUrl=`https://api.cptsol.cn/api/open/articleDetail?type=${typeVal}`;
      axios.get(noticeUrl).then((res)=>{
        this.introContent = res.data.content;
      })
    },
    handleClick(name){
      let typeVal = 11;
      this.activeName = name;
      if(name==='testIntro') {
        typeVal = 11;
        this.getContent(typeVal);
      }
      if(name === "testRangle") {
        typeVal = 12;
        this.getContent(typeVal);
      }
      if(name === 'testStruce') {
        typeVal = 13;
        this.getContent(typeVal);
      } 
      if(name === 'testStandard') {
        typeVal = 14;
      } 
      if(name === 'qExample') {
        typeVal = 15;
      } 
      if(name === "testBook") {
        typeVal = 16
        this.getContent(typeVal);
      } 
      if(name === 'registerProcess') {
        this.label = '国际中文教师职业能力证书考试报名流程';
      } 
      if(name === 'testProcess') {
        this.label = '国际中文教师职业能力证书考试流程';
      } 
      if(name === "CertificateClaimProcess") {
        this.label = '国际中文教师职业能力证书申领流程'
      } 
    }
  },
  setup() {
    const state = reactive({
      introContent: [],
      isvisible: false,
      isShow: false,
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/articleDetail?type=11";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.introContent =  res.data.content;
      })();
    })
    return state;
  },
  components: {
    Details,
    SearchKey,
    RegisterProcess,
    TestProcess,
    CertificateClaimProcess,
    TestBook,
    QExample,
    TestStandard
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
.tab >>>.el-tabs.el-tabs--top.demo-tabs.lastone .el-tabs__active-bar{
  width: 100px!important;
}
.tab >>>.el-tabs__item{
    font-size: 16px!important;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: #454545;
    line-height: 22px;
}
.tab >>>.el-tabs__item.is-active {
    font-weight: 600;
}
.tab >>>.el-tabs__nav-wrap::after {
      position: static !important;
}
.tab-content {
    padding-left: 20px; 
    margin-top: 32px;
    text-indent: 0;
    padding-right: 20px;
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
