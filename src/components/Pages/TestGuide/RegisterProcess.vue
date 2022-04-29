<template>
  <div class="register">
      <span class="register-title">国际中文教师职业能力证书考试报名流程</span>
 </div>
 <div class="register-kind">
     <span @click="changeTab(item.index)"  v-for="(item,index) in tabName" :key="index" :class="{'test2':index === activeTab}">{{item.name}}</span>
 </div>
 <div class="switch">
     <img src="../../../assets/register/arrowleft.png" style="height:44px;width:24px" @click="onLast"/>
     <template v-if="activeTab===0">
        <div class="step1">
         <img src="../../../assets/register/001.png" v-show="activeStep===1"/>
         <img src="../../../assets/register/002.png" v-show="activeStep===2"/>
         <img src="../../../assets/register/003.png" v-show="activeStep===3"/>
         <img src="../../../assets/register/004.png" v-show="activeStep===4"/>
         <img src="../../../assets/register/005.png" v-show="activeStep===5"/>
         <img src="../../../assets/register/006.png" v-show="activeStep===6"/>
         <div v-show="activeStep===1">
             <p class="mark1">填写报名信息</p>
             <p class="mark2">提交报名相关信息至所属培训中心由工作人员后台填写</p>
         </div>
         <div v-show="activeStep===2">
             <p class="mark1">报名信息查询/修改</p>
             <p class="mark2">注册/登录中心考务系统，进行报名信息查询/修改</p>
         </div>
         <div v-show="activeStep===3">
             <p class="mark1">确认缴费</p>
             <p class="mark2">支付考试费用，完成考试报名</p>
         </div>
         <div v-show="activeStep===4">
             <p class="mark1">确认考期</p>
             <p class="mark2">考前1个月～1周，确认考期</p>
         </div>
         <div v-show="activeStep===5">
             <p class="mark1">打印准考证</p>
             <p class="mark2">在线打印准考证</p>
         </div>
          <div v-show="activeStep===6">
             <p class="mark1">完成考试测试</p>
             <p class="mark2">考前测试，熟悉考试系统</p>
         </div>
        </div>
     </template>
     <template v-else>
        <div class="step1">
         <img src="../../../assets/register/step1.png" v-show="activeStep===1"/>
         <img src="../../../assets/register/step2.png" v-show="activeStep===2"/>
         <img src="../../../assets/register/003.png" v-show="activeStep===3"/>
         <img src="../../../assets/register/005.png" v-show="activeStep===4"/>
         <img src="../../../assets/register/006.png" v-show="activeStep===5"/>
         <div v-show="activeStep===1">
             <p class="mark1">选择补考科目</p>
             <p class="mark2">先泽所要补考的科目</p>
         </div>
         <div v-show="activeStep===2">
             <p class="mark1">确认缴费</p>
             <p class="mark2">支付考试费用，完成考试报名</p>
         </div>
         <div v-show="activeStep===3">
             <p class="mark1">确认考期</p>
             <p class="mark2">考前1个月～1周，确认考期</p>
         </div>
         <div v-show="activeStep===4">
             <p class="mark1">打印准考证</p>
             <p class="mark2">在线打印准考证</p>
         </div>
         <div v-show="activeStep===5">
             <p class="mark1">完成考试测试</p>
             <p class="mark2">考前测试，熟悉考试系统</p>
         </div>
        </div>
     </template>
     <img src="../../../assets/register/arrowright.png" style="height:44px;width:24px" @click="onNext"/>
 </div>
 <div class="steps">

    <template v-if="activeTab===0">
      <el-steps  :space="160">
       <el-step  v-for="(item,index) in 6" :key="index" :class="{'test':index + 1 === activeStep}"/>
       </el-steps>
   </template>
   <template v-else>
      <el-steps  :space="160">
       <el-step  v-for="(item,index) in 5" :key="index" :class="{'test':index + 1 === activeStep}"/>
       </el-steps>
   </template>
 </div>
 <div>
   <template v-if="activeTab===0">
      <p class="tip" v-show="activeStep===1">*中心采用培训中心负责制，考试报名需由中心下属培训中心后台系统进行信息填写；
考生可联系所属培训中心工作人员，提交报名所需信息：考生姓名、性别、证件类型及证件号、学历&专业&院校、联系方式、邮箱；
由培训中心工作人员进行报名填写</p>
      <p class="tip" v-show="activeStep===2">待考生所属培训中心工作人员在报名后台将考生报名信息填完之后，考生可登录中心考务系统进行报名/信息查询/修改</p>
      <p class="tip" v-show="activeStep===3">考生完成考试信息确认及完善后，即可缴纳考试费用，待缴纳完考试费后，完成报名</p>
      <p class="tip" v-show="activeStep===4">在考前1月～1周内，已完成报名的考生需要完成“考期确认”，确认是否参加当期考试，如不参加，则延期</p>
      <p class="tip" v-show="activeStep===5">确认考期后，参加当期考试的考生可在考前1周内登录【考务系统】完成准考证打印；
同时考试系统开放，考生可在考前1周内完成考前测试</p>
      <p class="tip" v-show="activeStep===6">考前1周内，考生下载完准考证后，需在考试系统中完成“考试测试”，主要用于检测设备摄像头、录音功能
以及考生对相关题型线上作答的操作流程熟悉</p>
   </template>
   <template v-else>
           <p class="tip" v-show="activeStep===1">考试报名开始后，考生自行登录考务系统，选择所要补考的科目</p>
      <p class="tip" v-show="activeStep===2">考生在选择完所要补考的科目，经确认相关信息无误后，即可完成补考费用支付，完成补考报名</p>
      <p class="tip" v-show="activeStep===3">考生在完成补考报名后，需于考前1个月-1周内，完成考期确认</p>
      <p class="tip" v-show="activeStep===4">确认考期后，参加当期考试的考生可在考前1周内登录【考务系统】完成准考证打印；
同时考试系统开放，考生可在考前1周内完成考前测试</p>
      <p class="tip" v-show="activeStep===5">考前1周内，考生下载完准考证后，需在考试系统中完成“考试测试”，主要用于检测设备摄像头、录音功能
以及考生对相关题型线上作答的操作流程熟悉</p>
   </template>
 </div>
</template>

<script>

import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'Notice',
   data () {
    return {
       title:'中心介绍',
       total: 10,
       content:'某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......',
       activeName:'famousPoint',
       activeStep: 1,
       activeTab: 0,
       tabName:[{name:'首次报名',index:0},{name:'补考报名',index:1}]
    }
   },
  methods: {
    onLast(){
        if(this.activeStep >1 ) {
            this.activeStep -=1;
        }
    },
    changeTab(val){
      this.activeTab = val
      this.activeStep = 1;
    },
    onNext(){

        if(this.activeTab === 0) {
        if(this.activeStep <6 ) {
            this.activeStep +=1;
        }
        } else {
        if(this.activeStep <5 ) {
            this.activeStep +=1;
        }
        }
    },
    goBack(){
      this.$refs.child.showList();
    }
   },
  // setup() {
  //   const state = reactive({
  //     noticeList: [],
  //     dataList:[],
  //     isvisible: false,
  //     isShow: false,
  //     articleList:[] // 合作展示、文章列表
  //   })
  //   onMounted(async () => {
  //     // https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=10
  //     var noticeUrl="https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=10";
  //     var famousTeamUrl="https://api.cptsol.cn/api/open/articleList?type=6&page=1&size=10";
  //     (async function () {
  //       const res = await axios.get(noticeUrl) //返回 {id:0}
  //       state.noticeList = res.data.data;
  //       state.list = res.data.data;
  //       state.total = res.data.total;
  //     })();
  //     (async function () {
  //       const res = await axios.get(famousTeamUrl) //返回 {id:0}
  //       state.dataList = res.data.data;
  //       // state.list = res.data.data;
  //       state.total = res.data.total;
  //     })();
  //     })
  //   return state;
  // },
  components: {
  }
}
</script>

<style scoped>
.register{
    background: #2F318B;
    height: 182px;
    line-height: 182px;
    text-align: center;
}
.register-title{
    font-size: 50px;
    font-family: "PingFangSC-Semibold", "PingFang SC";
    font-weight: 600;
    color: #FFFFFF;
}
.register-kind{
    margin: 0 auto;
    width: 300px;
    text-align: center;
    margin-top: 80px;
}
.register-kind span:first-child{
    margin-right: 79px;
}
.register-kind span.test2 {
    display: inline-block;
    padding-bottom: 12px;
    border-bottom:3px solid  #2F318B;
    border-bottom-left-radius: 3px;  /* 左下角 */
    border-bottom-right-radius: 3px; /* 右下角 */
}
.switch {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 162px;
    flex: 1;
}
.switch .step1{
    margin: 0 361px;
    text-align: center;
}
.switch .step1 .mark1 {
    font-size: 28px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: #2E2E2E;
    line-height: 40px;
    margin-top: 14px;
}
.switch .step1 .mark2 {
    font-size: 16px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: #2E2E2E;
    line-height: 22px;
    margin-top: 18px;
}
.switch .step1 img {
    height: 110px;
    width: 110px;
}
.steps {
    width: 800px;
    margin: 0 auto;
    margin-top: 116px;
    padding-left: 120px;
}
.steps >>>.el-step .el-step__line{
    border: none;
    border-bottom: 1px dashed #2F318B;
    background-color: unset;
    top: 18px;
    left: 2px;
}
.tip{
    text-align: center;
    font-size: 14px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: #2E2E2E;
    line-height: 20px;
    margin-bottom: 120px;
    margin-top: 58px;
}
.test >>>.el-step__icon{
    background-color: #2F318B;
    color: #fff;
    font-size: 16px;
    width: 39px;
    height: 39px;
    line-height: 39px;
    text-align: center;
}
>>>.el-step__icon.is-text{
    width: 39px;
    height: 39px;
}
</style>
