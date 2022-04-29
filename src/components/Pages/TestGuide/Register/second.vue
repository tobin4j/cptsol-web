<template>
    <div class="switch">
        <img :src="require('@/assets/register/arrowleft.png')" style="height:44px;width:24px" @click="onLast"/>
        <div class="step1">
            <img :src="require('@/assets/register/step1.png')" v-show="active===1"/>
            <img :src="require('@/assets/register/step2.png')" v-show="active===2"/>
            <img :src="require('@/assets/register/step3.png')" v-show="active===3"/>
            <img :src="require('@/assets/register/step4.png')" v-show="active===4"/>
            <img :src="require('@/assets/register/step5.png')" v-show="active===5"/>
            <div v-show="active===1">
                <p class="mark1">选择补考科目</p>
                <p class="mark2">选择所要补考的科目</p>
            </div>
            <div v-show="active===2">
                <p class="mark1">确认缴费</p>
                <p class="mark2">支付考试费用，完成考试报名</p>
            </div>
            <div v-show="active===3">
                <p class="mark1">确认考期</p>
                <p class="mark2">考前1个月～1周，确认考期</p>
            </div>
            <div v-show="active===4">
                <p class="mark1">打印准考证</p>
                <p class="mark2">在线打印准考证</p>
            </div>
            <div v-show="active===5">
                <p class="mark1">完成考试测试</p>
                <p class="mark2">考前测试，熟悉考试系统</p>
            </div>
        </div>
        <img :src="require('@/assets/register/arrowright.png')" style="height:44px;width:24px" @click="onNext"/>
    </div>
    <div class="steps">
        <el-steps  :space="160">
        <el-step  v-for="(item,index) in 5" :key="index" :class="{'test':index + 1 === active}"/>
        </el-steps>
    </div>
    <p class="tip" v-show="active===1">考试报名开始后，考生自行登录考务系统，选择所要补考的科目</p>
    <p class="tip" v-show="active===2">考生在选择完所要补考的科目，经确认相关信息无误后，即可完成补考费用支付，完成补考报名</p>
    <p class="tip" v-show="active===3">考生在完成补考报名后，需于考前1个月-1周内，完成考期确认</p>
    <p class="tip" v-show="active===4">确认考期后，参加当期考试的考生可在考前1周内登录【考务系统】完成准考证打印；
    同时考试系统开放，考生可在考前1周内完成考前测试</p>
    <p class="tip" v-show="active===5">考前1周内，考生下载完准考证后，需在考试系统中完成“考试测试”，主要用于检测设备摄像头、录音功能
    以及考生对相关题型线上作答的操作流程熟悉</p>
</template>

<script>

import axios from 'axios'
import { reactive, onMounted } from 'vue'

export default {
  name: 'First',
   data () {
    return {
       activeTab:0,
       title:'中心介绍',
       total: 10,
       content:'某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......',
       activeName:'famousPoint',
       active: 1,
       tabName:['首次报名','补考报名']
    }
   },
  methods: {
    onLast(){
        if(this.active >1 ) {
            this.active -=1;
        }
    },
    changeTab(val) {
        this.activeTab = val;
    },
    onNext(){
        if(this.active <5 ) {
            this.active +=1;
        }
    },
    goBack(){
      this.$refs.child.showList();
    }
   },
  setup() {
    const state = reactive({
      noticeList: [],
      dataList:[],
      isvisible: false,
      isShow: false,
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      // https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=10
      var noticeUrl="https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=10";
      var famousTeamUrl="https://api.cptsol.cn/api/open/articleList?type=6&page=1&size=10";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.noticeList = res.data.data;
        state.list = res.data.data;
        state.total = res.data.total;
      })();
      (async function () {
        const res = await axios.get(famousTeamUrl) //返回 {id:0}
        state.dataList = res.data.data;
        // state.list = res.data.data;
        state.total = res.data.total;
      })();
      })
    return state;
  },
  components: {
  }
}
</script>

<style scoped>
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
