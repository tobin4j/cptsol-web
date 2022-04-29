<template>
<div class="testbook clearfix">
    <!-- <div class="testbook-title" v-for="(item,index) in dataList" :key="index"> -->
    <div class="testbook-title">
       <ul class="menu">
         <li v-for="(item,index) in dataList" :key="index" :class="{'checked':index ===checkedIndex}" @click="change(item.title,index)">
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
    getContent(title) {
      let noticeUrl=`https://api.cptsol.cn/api/open/articleDetail?type=16&title=${title}`;
      axios.get(noticeUrl).then((res)=>{
        this.content = res.data.content;
      })
    },
    change(title,val){
      this.checkedIndex = val;
      this.getContent(title)
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
      isvisible: false,
      isShow: false,
      content:'',
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/articleList?type=16&page=1&size=20";
      // let noticeUrl2=`https://api.cptsol.cn/api/open/articleDetail?type=16&title=`;
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.dataList =  res.data.data;
        if(state.dataList.length>0){
          let fisrtITem = res.data.data[0];
          (async function () {
          const res = await axios.get(`https://api.cptsol.cn/api/open/articleDetail?type=16&title=${fisrtITem}`) //返回 {id:0}
          state.content =  res.data.content;
          })();
        }
      })();

    })
    return state;
  },
  components: {
    // Details,
    // SearchKey,
    // RegisterProcess,
    // TestProcess,
    // CertificateClaimProcess,
    // TestBook
    
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
  background: #2F318B;
  border-radius: 6px;
  float: left;
}

.testbook-details{
  margin-left: 183px;
}
.menu {
  padding-top: 26px;
  padding-bottom: 32px;
}
.menu li{
    /* list-style: none; */
    width: 135px;
    font-size: 14px;
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
.menu li:before{
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  margin-right: 7px;
  vertical-align: middle;
}
</style>
