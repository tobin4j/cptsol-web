<template>
<!--  <div class="register">-->
<!--      <span class="register-title">国际中文教师职业能力证书申领流程</span>-->
<!-- </div>-->
    <div class="register-kind" style="margin-top: 180px;text-align: center; padding-left: 70px;">
        <span  class="tabchencked">证书申请流程</span>
    </div>
 <div class="switch" style="margin-top: 180px">
     <span class="arrowIconleft" @click="onLast">
         <img src="../../../assets/register/arrowleft.png" style="height:44px;width:24px"/>
     </span>
     <div class="step1">
        <img src="../../../assets/register/007.png" v-show="activeStep===1"/>
        <img src="../../../assets/register/008.png" v-show="activeStep===2"/>
        <img src="../../../assets/register/009.png" v-show="activeStep===3"/>
        <img src="../../../assets/register/010.png" v-show="activeStep===4"/>
        <img src="../../../assets/register/011.png" v-show="activeStep===5"/>
        <img src="../../../assets/register/012.png" v-show="activeStep===6"/>
        <div v-show="activeStep===1">
            <p class="mark1">确认考试通过</p>
            <p class="mark2">考试通过，申领证书</p>
        </div>
        <div v-show="activeStep===2">
            <p class="mark1">登录考务系统</p>
            <p class="mark2">登录系统，进行申报流程</p>
        </div>
        <div v-show="activeStep===3">
            <p class="mark1">申报信息填写</p>
            <p class="mark2">完成申领材料</p>
        </div>
        <div v-show="activeStep===4">
            <p class="mark1">申报资料审核</p>
            <p class="mark2">审核相关资料</p>
        </div>
        <div v-show="activeStep===5">
            <p class="mark1">收件地址填写</p>
            <p class="mark2">填写证书邮寄地址</p>
        </div>
        <div v-show="activeStep===6">
            <p class="mark1">证书邮寄</p>
            <p class="mark2">收到证书，申领完毕</p>
        </div>
     </div>
     <span @click="onNext" class="arrowright"  style="    position: absolute;
    right: 100px;">
     <img src="../../../assets/register/arrowright.png" style="height:44px;width:24px;" />
     </span>
 </div>
 <div class="steps">
    <el-steps  :space="160">
    <el-step  v-for="(item,index) in 6" :key="index" :class="{'test':index + 1 === activeStep}"/>
    </el-steps>
 </div>
 <div class="tips">
     <p class="tip" v-show="activeStep===1">考生通过系统查询，确认考试笔试及面试均已通过，符合申领证书条件，可进行证书申领</p>
<p class="tip" v-show="activeStep===2">登录中心考务系统，进行证书申领</p>
<p class="tip" v-show="activeStep===3">进入申领流程后，考生需上传毕业证书照片、身份证正反面照片以及其他证明，作为证书申领申报凭证</p>
<p class="tip" v-show="activeStep===4">待考生进行完相关申领资料后，由中心工作人员进行审核，审核确认无误后，方可进行下一步</p>
<p class="tip" v-show="activeStep===5">证书申领材料审核通过后，考生可登录考务系统，进行收件地址填写</p>
<p class="tip" v-show="activeStep===6">考生在填写完证书申领地址后，中心将统一安排证书邮寄；考生可实时注意快递信息；收到证书</p>
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
       tabName:[{name:'首次报名',index:0},{name:'补考报名',index:1}]
    }
   },
  methods: {
    onLast(){
        if(this.activeStep >1 ) {
            this.activeStep -=1;
        }
    },
    onNext(){
        if(this.activeStep <6 ) {
            this.activeStep +=1;
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
.register-kind span.tabchencked {


    display: inline-block;
    padding-bottom: 12px;
    text-indent: 0;
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
    width: 100%;
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
>>>.el-step__icon .el-step__icon-inner{
    text-indent: 0;
}
</style>
