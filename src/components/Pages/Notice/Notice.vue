<template>
  <!-- 通知公告 -->
  <SearchKey  v-if="!showDetails" :title="title" @search="search" ></SearchKey>
  <div class="listitem clearfix"> 
    <div v-for="(item,index) in noticeList" :key="index" class="list-container" v-show="!showDetails">
      <span class="list-left">
        <span class="dot"></span>
        <a @click="goDetails(item.articleId)" class="a-details">{{item.title}}</a>
      </span>
      <span class="list-right">
        「{{item.createTime.substring(0,10)}}」
      </span>
    </div>
    <Details v-show="showDetails"  :content="content" :title="title" :showDetails="showDetails"></Details>
  </div>
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

import SearchKey from '@/components/Common/SearchKey'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import Details from '@/components/Common/Details'
export default {
  name: 'Notice',
  props:['id'],
   data () {
    return {
       title:'通知公告',
       keyWord: '', // 搜索关键字
       pageNum: 1,
       content:'',
       showDetails: false
    }
   },
   watch:{
     id:{
       immediate:true,
       deep:true,
       handler: function(val) {
        if(val){
          this.goDetails(val)
        } else {
          this.showDetails = false;
        }
       }
     }
   },
   methods: {
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
    search(key) {
      this.keyWord = key;
      this.getDataList();
    },
    goDetails(id) {
      this.showDetails = true;
      let noticeUrl=`https://api.cptsol.cn/api/open/articleDetail?type=2&page=${this.pageNum}&size=10&id=${id}`;
      axios.get(noticeUrl).then((res)=>{
        this.content = res.data.content;
      })
    },
    showList() {
      this.showDetails = false;
    },
    goDetailsLink() {
      this.showDetails = true;
    },
    getDataList() {
      let noticeUrl=`https://api.cptsol.cn/api/open/articleList?type=2&page=${this.pageNum}&size=10&title=${this.keyWord}`;
      axios.get(noticeUrl).then((res)=>{
        this.noticeList = res.data.data;
      })
    }
  },
  setup(props,context) {
    let state = reactive({
      noticeList: [],
      list:[],
      isvisible: false,
      total:'',
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      // https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=10
      var noticeUrl="https://api.cptsol.cn/api/open/articleList?type=2&page=1&size=10";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.noticeList = res.data.data;
        state.list = res.data.data;
        state.total = res.data.total;
      })();
    })
    return state;
  },
  components: {
    SearchKey,
    Details
  }
}
</script>

<style scoped>
 @import '@/styles/list.css';
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
