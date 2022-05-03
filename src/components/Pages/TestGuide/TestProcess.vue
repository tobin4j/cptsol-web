.vue<template>
  <div class="register">
      <span class="register-title">国际中文教师职业能力证书考试流程</span>
 </div>
 <div class="register-kind">
     <span @click="changeTab(item.index)"  v-for="(item,index) in tabName" :key="index" :class="{'test2':index === activeTab}">{{item.name}}</span>
 </div>
 <div class="switch">
     <span class="arrowIconleft" @click="onLast">
         <img src="../../../assets/register/arrowleft.png" style="height:44px;width:24px"/>
     </span>
     <template v-if="activeTab===0">
        <div class="step1">
         <img src="../../../assets/register/013.png" v-show="activeStep===1"/>
         <img src="../../../assets/register/008.png" v-show="activeStep===2"/>
         <img src="../../../assets/register/014.png" v-show="activeStep===3"/>
         <img src="../../../assets/register/015.png" v-show="activeStep===4"/>
         <img src="../../../assets/register/016.png" v-show="activeStep===5"/>
         <img src="../../../assets/register/017.png" v-show="activeStep===6"/>
         <div v-show="activeStep===1">
             <p class="mark1">考试准备</p>
             <p class="mark2">考试相关准备</p>
         </div>
         <div v-show="activeStep===2">
             <p class="mark1">进入考试系统</p>
             <p class="mark2">登录考试系统客户端</p>
         </div>
         <div v-show="activeStep===3">
             <p class="mark1">听取考场规则</p>
             <p class="mark2">由考场主监考官宣读考场规则，考生注意听取</p>
         </div>
         <div v-show="activeStep===4">
             <p class="mark1">开始考试</p>
             <p class="mark2">考试开始时间到，考生进入考试</p>
         </div>
         <div v-show="activeStep===5">
             <p class="mark1">结束考试</p>
             <p class="mark2">考试时间到，考试结束</p>
         </div>
          <div v-show="activeStep===6">
             <p class="mark1">退出系统</p>
             <p class="mark2">退出考试系统，考试完毕</p>
         </div>
        </div>
     </template>
     <template v-else>
        <div class="step1">
         <img src="../../../assets/register/013.png" v-show="activeStep===1"/>
         <img src="../../../assets/register/008.png" v-show="activeStep===2"/>
         <img src="../../../assets/register/014.png" v-show="activeStep===3"/>
         <img src="../../../assets/register/005.png" v-show="activeStep===4"/>
         <img src="../../../assets/register/018.png" v-show="activeStep===5"/>
         <img src="../../../assets/register/019.png" v-show="activeStep===6"/>
         <img src="../../../assets/register/016.png" v-show="activeStep===7"/>
         <img src="../../../assets/register/017.png" v-show="activeStep===8"/>
         <div v-show="activeStep===1">
             <p class="mark1">考试准备</p>
             <p class="mark2">考试相关准备</p>
         </div>
         <div v-show="activeStep===2">
             <p class="mark1">进入考试系统</p>
             <!-- <p class="mark2">支付考试费用，完成考试报名</p> -->
         </div>
         <div v-show="activeStep===3">
             <p class="mark1">听取考场规则</p>
             <p class="mark2">由考场主监考官宣读考场规则，考生注意听取</p>
         </div>
         <div v-show="activeStep===4">
             <p class="mark1">开始考试</p>
             <p class="mark2">考试开始时间到，考生进入考试</p>
         </div>
         <div v-show="activeStep===5">
             <p class="mark1">获取面试考题</p>
             <p class="mark2">获取考题，准备面试设计</p>
         </div>
          <div v-show="activeStep===6">
             <p class="mark1">组织线上录考</p>
             <p class="mark2">根据面试设计，组织录考</p>
         </div>
         <div v-show="activeStep===7">
             <p class="mark1">结束考试</p>
             <p class="mark2">考试时间到，考试结束</p>
         </div>
          <div v-show="activeStep===8">
             <p class="mark1">退出系统</p>
             <p class="mark2">退出考试系统，考试完毕</p>
         </div>
        </div>
     </template>
      <span class="arrowIconright" @click="onNext" >
        <img src="../../../assets/register/arrowright.png" style="height:44px;width:24px" />
      </span>
 </div>
 <div class="steps">

    <template v-if="activeTab===0">
      <el-steps  :space="160">
       <el-step  v-for="(item,index) in 6" :key="index" :class="{'test':index + 1 === activeStep}"/>
       </el-steps>
   </template>
   <template v-else>
      <el-steps  :space="160">
       <el-step  v-for="(item,index) in 8" :key="index" :class="{'test':index + 1 === activeStep}"/>
       </el-steps>
   </template>
 </div>
 <div>
   <template v-if="activeTab===0">
      <p class="tip" v-show="activeStep===1">考生须在考前测试阶段下载【考试客户端】，完成相关测试后，在正式考试过程中，准备好相关身份证件、准考证等待进入考试系统及监考人员的身份核验</p>
      <p class="tip" v-show="activeStep===2">考生须在考前30min~5min内，凭准考证号、身份证号登录考试系统客户端；检测“摄像头”是否被调取出现异常情况，及时向监考人员汇报</p>
      <p class="tip" v-show="activeStep===3">考前5min内，由考试主监考官宣读考场规则，考生需注意听取</p>
      <p class="tip" v-show="activeStep===4">考试开始时间到，考生可进入作答</p>
      <p class="tip" v-show="activeStep===5">考试时间进行到最后30min、10min、5min时，监考人员提醒考生，考试时间剩1分钟，全体考生提交试卷/时间到系统强制交卷</p>
      <p class="tip" v-show="activeStep===6">交卷后，考生退出考试系统，考试完毕</p>
   </template>
   <template v-else>
    <p class="tip" v-show="activeStep===1">考生须在考前测试阶段下载【考试客户端】，完成相关测试后，在正式考试过程中，准备好相关身份证件、准考证等待进入考试系统及监考人员的身份核验</p>
      <p class="tip" v-show="activeStep===2">考生须在考前30min~5min内，凭准考证号、身份证号登录考试系统客户端；检测“摄像头”是否被调取出现异常情况，及时向监考人员汇报</p>
      <p class="tip" v-show="activeStep===3">考前5min内，由考试主监考官宣读考场规则，考生需注意听取</p>
      <p class="tip" v-show="activeStep===4">考试开始时间到，考生可进入作答，获取面试考题</p>
      <p class="tip" v-show="activeStep===5">考试开始后，考试获取面试考题，根据考题要求，进行相应的设计</p>
      <p class="tip" v-show="activeStep===6">面试设计完毕后，考生可进行线上录考，录考完毕后提交，进行下一步考题的设计</p>
      <p class="tip" v-show="activeStep===7">考试时间进行到最后30min、10min、5min时，监考人员提醒考生，考试时间剩1分钟，全体考生提交试卷/时间到系统强制交卷</p>
      <p class="tip" v-show="activeStep===8">交卷后，考生退出考试系统，考试完毕</p>
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
       tabName:[{name:'笔试考试',index:0},{name:'面试考试',index:1}]
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
            if(this.activeStep <8 ) {
                this.activeStep +=1;
            }
        }

    },
    goBack(){
      this.$refs.child.showList();
    }
   },
  components: {
  }
}
</script>

<style scoped>
@import '@/styles/testguide.css';
.register-kind span.test2 {
    display: inline-block;
    padding-bottom: 12px;
    border-bottom:3px solid  #2F318B;
    border-bottom-left-radius: 3px;  /* 左下角 */
    border-bottom-right-radius: 3px; /* 右下角 */
}
.steps >>>.el-step:last-child {
    flex-basis:0px!important;
}
.steps >>>.el-step .el-step__line{
    border: none;
    border-bottom: 1px dashed #2F318B;
    background-color: unset;
    top: 18px;
    left: 37px;
}

.test >>>.el-step__icon{
    background-color: #2F318B;
    color: #fff!important;
    font-size: 16px;
    width: 39px;
    height: 39px;
    line-height: 39px;
    text-align: center;
}
>>>.el-step__icon.is-text{
    width: 39px;
    height: 39px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2F318B;
    line-height: 22px;
    border: 1px dashed #2F318B;
}
</style>
