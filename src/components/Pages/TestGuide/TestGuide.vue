<template>
  <div class="tab">
    <el-tabs v-model="activeName"  @tab-change="handleChange" :class="['demo-tabs', { 'lastone': activeName=='CertificateClaimProcess' }]">
        <el-tab-pane class="tab-content" label="考试介绍" name="testIntro">
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试范围" name="testRangle">
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试结构" name="testStruce">
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试标准" name="testStandard">
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="真题实例" name="qExample">
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试用书" name="testBook">
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="报名流程" name="registerProcess">
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="考试流程" name="testProcess">
        </el-tab-pane>
        <el-tab-pane class="tab-content" label="证书申领流程" name="CertificateClaimProcess">
        </el-tab-pane>
        <router-view></router-view>
  </el-tabs>
 </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref} from 'vue'
export default {
  name: 'TestGuide',
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
       // activeName:'testIntro'
    }
   },
  methods: {
    handleChange(name){
      if(name === 'testIntro') {
        this.goPage('/testGuide/testIntro');
      } else if(name ==='testRangle'){
        this.goPage('/testGuide/testRangle');
      } else if(name==='testStruce'){
        this.goPage('/testGuide/testStruce');
      } else if(name === 'testStandard'){
        this.goPage('/testGuide/testStandard');
      } else if(name === 'qExample') {
        this.goPage('/testGuide/qExample');
      } else if(name === 'registerProcess') {
        this.goPage('/testGuide/registerProcess');
      }else if(name === 'testBook') {
        this.goPage('/testGuide/testBook');
      }else if(name === 'testProcess') {
        this.goPage('/testGuide/testProcess'); 
      }else {
        this.goPage('/testGuide/CertificateClaimProcess');
      }
    },
  },
  setup() {
    const router = useRouter();
     let url = router.currentRoute.value.fullPath;
     let index = url.lastIndexOf("\/");
     let str = url.substring(index + 1,url.length);
     const activeName = ref(str);
    const goPage = (path)=> {
      router.push({
        path: path
      })
    }
    return {
      activeName,
      goPage
    };
  },
  components: {
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
