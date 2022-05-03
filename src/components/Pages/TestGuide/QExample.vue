<template>
<div class="testbook clearfix">
    <!-- <div class="testbook-title" v-for="(item,index) in dataList" :key="index"> -->
    <div class="testbook-title">
       <ul class="menu">
        <li class="title" style="font-size:16px">笔试真题实例</li>
         <li class="subTitle" v-for="(item,index) in dataList" :key="index" :class="{'checked':index ===checkedIndex && titleName===1 }" @click="change(1,item.title,item.articleId)">
           {{item.title}}
         </li>
        <li class="title" style="font-size:16px">面试真题实例</li>
        <li class="subTitle" v-for="(item,index) in dataList2" :key="index" :class="{'checked':index ===checkedIndex &&titleName === 2}" @click="change(2,item.title,item.articleId)">
           {{item.title}}
         </li>
       </ul>
    </div>
    <div class="testbook-details" v-html="content">
        
    </div>
</div>
</template>

<script>
// import SearchKey from '@/components/Common/SearchKey'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
// import Details from '@/components/Common/Details'
// import RegisterProcess from './RegisterProcess.vue';
// import TestProcess from './TestProcess.vue';
// import CertificateClaimProcess from './CertificateClaimProcess.vue';
// import TestBook from './TestBook.vue';

export default {
  name: 'Notice',
   data () {
    return {
       checkedIndex:0,
       titleName:1, // 1笔试真题,2面试真题
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
       activeName:'testIntro'
    }
   },
  methods: {
    // 方法
    onSubmit() {
      console.log('submit!');
    },
    getContent(type,title) {
      let noticeUrl="";
      if(type ===1){
         noticeUrl = `https://api.cptsol.cn/api/open/articleDetail?type=15&subType=1501&title=${title}&id=${this.checkedIndex}`
      } else {
          noticeUrl = `https://api.cptsol.cn/api/open/articleDetail?type=15&subType=1502&title=${title}&id=${this.checkedIndex}`
      }
      axios.get(noticeUrl).then((res)=>{
        this.content = res.data.content;
      })
    },
    change(type,title,val){
      this.checkedIndex = val;
      this.titleName = type;
      this.getContent(type,title)
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
      dataList: [],
      dataList2:[],
      data:[],
      isvisible: false,
      isShow: false,
      content:'',
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/articleList?type=15&subType=1501&page=1&size=50";
      var noticeUrl2="https://api.cptsol.cn/api/open/articleList?type=15&subType=1502&page=1&size=50";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        if(res.data.data) {
            let data = res.data.data;
            state.dataList =  data;
            let fisrtITem = res.data.data[0];
            (async function () {
            const res = await axios.get(`https://api.cptsol.cn/api/open/articleDetail?type=15&subType=1501&title=${fisrtITem}`) //返回 {id:0}
            state.content =  res.data.content;
            })();
        }
      })();
      (async function () {
        const res = await axios.get(noticeUrl2) //返回 {id:0}
        if(res.data.data) {
            let data = res.data.data;
            state.dataList2 =  data;
        }
      })();
    })
    return state;
  },
  components: {
  }
}
</script>

<style scoped>
.testbook{
}
.testbook.clearfix:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.testbook-title{
  /* width: 135px; */
  background: #2F318B;
  border-radius: 6px;
  float: left;
}

.testbook-details{
  margin-left: 193px;
}
.menu {
  padding-top: 26px;
  padding-bottom: 32px;
}
.menu li{
    /* list-style: none; */
    width: 135px;
    font-size: 12px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: #FFFFFF;
    padding: 6px 19px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.menu li.checked {
  background: #ffffff29;
}
.menu li:not(:first-child){
  margin-top: 12px;
}
.menu li:hover{
  background: #ffffff29;
  /* opacity: 0.19; */
}
.menu li.title:before{
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  margin-right: 7px;
  vertical-align: middle;
}
.menu li.subTitle{
    list-style: none!important;
    text-indent: 10px;
}
</style>
