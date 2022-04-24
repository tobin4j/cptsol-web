<template>
  <!-- 通知公告 -->
  <SearchKey :title="title"></SearchKey>
  <div class="listitem clearfix"> 
    <div v-for="(item,index) in 10" :key="index" class="list-container">
      <span class="list-left">
        <span class="dot"></span>某某公告 | 2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业能力考试报名2022年第一期国际中文执业......
      </span>
      <span class="list-right">
        「2022-05-05」
      </span>
    </div>
  </div>
  <div class="page-container">
    <el-pagination background layout="prev, pager, next" :total="1000" class="page"/>
    <span style="padding-left:8px;">共{{total}}条，10条每页</span>
  </div>
</template>

<script>
import SearchKey from '@/components/Common/SearchKey'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'CenterDynamics',
   data () {
    return {
       title:'中心动态',
       total: 10,
    }
   },
  setup() {
    const state = reactive({
      noticeList: [],
      isvisible: false,
      isShow: false,
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/adList?type=2";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.noticeList = res.data;
      })();
    })
    return state;
  },
  components: {
    SearchKey
  }
}
</script>

<style scoped>

</style>
