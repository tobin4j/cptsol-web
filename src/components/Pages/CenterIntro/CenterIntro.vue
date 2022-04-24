】<template>
  <!-- 中心介绍 -->
  中心介绍
</template>

<script>
import SearchKey from '@/components/Common/SearchKey'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'CenterDynamics',
   data () {
    return {
       title:'中心介绍',
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
