<template>
  <!-- 通知公告 -->
  <SearchKey v-if="!showDetails" :title="title" @search="search"></SearchKey>
  <div class="listitem clearfix"> 
    <div v-for="(item,index) in dataList" :key="index" class="list-container" v-show="!showDetails">
      <span class="list-left">
        <span class="dot"></span>
        <a @click="goDetails(item.articleId)">{{item.title}}</a>
      </span>
      <span class="list-right">
        「{{item.createTime.substring(0,10)}}」
      </span>
    </div>
    <Details v-show="showDetails"  :content="content" :title="title" @showList="showList"></Details>
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
import Details from '@/components/Common/Details'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'JobStyle',
   data () {
    return {
       title:'',
       keyWord:'',
       pageNum: 1,
       content:'',
       showDetails: false
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
      let noticeUrl=`https://api.cptsol.cn/api/open/articleDetail?type=5&page=${this.pageNum}&size=10&id=${id}`;
      axios.get(noticeUrl).then((res)=>{
        this.content = res.data.content;
      })
    },
    showList() {
      this.showDetails = false;
    },
    getDataList() {
      let noticeUrl=`https://api.cptsol.cn/api/open/articleList?type=8&page=${this.pageNum}&size=10&title=${this.keyWord}`;
      axios.get(noticeUrl).then((res)=>{
        this.dataList = res.data.data;
      })
    }
  },
  setup() {
    const state = reactive({
      dataList: [],
      total: '',
      isvisible: false,
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/articleList?type=8&page=1&size=10";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.dataList = res.data.data;
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
