<template>
<SearchKey v-if="!showDetails" :title="title" @search="search"></SearchKey>
<div v-show="!showDetails">
    <div class="list-container clearfix" v-for="(item,index) in dataList" :key="index" @click="goDetails(item.articleId)">
        <div class="list-left">
            <img :src="item.imgUrl"/>
        </div>
        <div class="list-right">
            <p class="list-title">{{item.title}}</p>
            <p class="list-brief">{{item.summary}}</p>
        </div>
    </div>
</div>
<Details :isShow="showDetails"  :content="content" :title="title" @showList="showList"></Details>
<div class="page-container" v-show="!showDetails">
  <el-pagination background layout="prev, pager, next" 
  :total="total" 
  @currentChange = "onCurrentChange"
  @prevClick = "prevClick"
  @nextClick = "nextClick"
  class="page"/>
  <span>共{{total}}条，10条每页</span>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import Details from '@/components/Common/Details'
import SearchKey from '@/components/Common/SearchKey'
export default {
  name: 'ContactUs',
  // props:['dataList'],
   data () {
    return {
       title:'中心介绍',
       pageNum: 1,
       intro:'某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......某某公告 | 2022年第一期国际中文执业能力考试报名',
       searchForm: {
        keyWord: '',
       },
       content:'',
       showDetails: false,
       activeName:'contactUS'
    }
   },
   methods: {
    // goBack(){
    //   this.$parent.showList();
    // },
    onCurrentChange(pageNum){
      this.pageNum = pageNum;
       this.getDataList();
    },
    prevClick(pageNum) {
      this.pageNum = pageNum;
      this.getDataList();
    },
    nextClick(pageNum) {
     this.pageNum = pageNum;
      this.getDataList();
    },
    enters(index){
      this.current = index;
      this.isvisible = true;
    },
    leaver(){
      this.current = null;
      this.isvisible = false;
    },
    search(key,type) {
      this.keyWord = key;
      if(type=='reset') {
        this.pageNum = 1;
      }
      this.getDataList();
    },
    goDetails(id) {
      this.showDetails = true;
      let noticeUrl=`https://api.cptsol.cn/api/open/articleDetail?type=10&page=${this.pageNum}&size=10&id=${id}`;
      axios.get(noticeUrl).then((res)=>{
        this.content = res.data.content;
      })
    },
    onSearch() {
    //    this.$parent.search(this.searchForm.keyWord);
      // 参数：菜单名、关键字
    },
    showList() {
      this.showDetails = false;
    },
    getDataList() {
      let noticeUrl=`https://api.cptsol.cn/api/open/articleList?type=10&page=${this.pageNum}&size=10&title=${this.keyWord}`;
      axios.get(noticeUrl).then((res)=>{
        this.dataList = res.data.data;
        this.total = res.data.total;
      })
    }
  },
  setup(props,context) {
    let state = reactive({
      dataList: [],
      list:[],
      isvisible: false,
      total:'',
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      // https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=10
      var noticeUrl="https://api.cptsol.cn/api/open/articleList?type=10&page=1&size=10";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.dataList = res.data.data;
        state.list = res.data.data;
        state.total = res.data.total;
      })();
    })
    return state;
  },
  components: {
      Details,
      SearchKey
  }
}
</script>

<style scoped>
*,p{
    margin: 0;
    padding: 0;
}
.list-container{
    /* border: 1px solid red; */
    position: relative;
    height: 170px;
    margin-top: 40px;
}
.list-container .list-left{
    width: 170px;
    height: 170px;
    position: absolute;
    left: 0;
    padding-right: 20px;
    box-shadow: 0px 1px 4px 1px rgba(211, 211, 211, 0.5);
}
.list-container .list-left img{
    border-radius: 4px;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.list-container .list-right {
    width: calc(100% - 210px);
    margin-left: 214px;
    text-indent: 0;
}
.list-right .list-brief{
    font-size: 14px;
    font-weight: 400;
    color: #454545;
    font-family: "PingFangSC-Semibold", "PingFang SC";
    line-height: 35px;
    overflow:hidden;
    text-overflow: ellipsis;
    -o-text-overflow:ellipsis;
    -webkit-line-clamp: 3;
}
.list-right .list-title{
    font-size: 18px;
    font-family: "PingFangSC-Semibold", "PingFang SC";
    font-weight: 600;
    color: #454545;
    line-height: 25px;
    margin-bottom: 22px;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow:ellipsis;
}
/* .list-container.clearfix:after{
     content: '';
     display: block;
     height: 0;
     clear: both;
     visibility: hidden;
  } */
.title {
  /* width: 1200px;
  margin: 26px auto; */
  text-indent: 40px;
  font-size: 16px;
  font-family: "PingFangSC-Semibold", "PingFang SC";
  font-weight: 600;
  color: #454545;
  line-height: 22px;
}
 .serach-form {
   margin: 0 auto;
   justify-content: end;
   height: 40px;
   margin-top: 16px;
   margin-bottom: 24px;
 }
 .serach-form >>>.el-form-item {
   margin-right: 0;
 }
 .serach-form >>>.el-form-item:nth-child(1){
   width: 508px;
   margin-right: 32px;
 }
 .serach-form >>>.el-form-item:nth-child(2){
   width:150px;
 }
 .input >>>input{
    width: 508px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #D4D9E0;
 }
 .search {
    width: 100px;
    height: 32px;
    background: #2F318B;
    border-radius: 4px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: #FFFFFF;
    line-height: 20px;
    margin-right: 24px;
 }
 /* 分页 */
 .page-container >>>button,.page-container >>>ul li{
    width: 32px;
    height: 32px;
    background: #FFFFFF;
    /* border-radius: 4px 0px 0px 4px; */
    border: 1px solid #D4D9E0;
    margin: 0!important;
    padding: 0!important;
    text-indent: 0;
 }
 .el-pagination >>> ul li.is-active {
   border: 1px solid #D4D9E0!important;
   background: #2F318B!important;
 }
</style>
