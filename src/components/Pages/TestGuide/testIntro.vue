<template>
 <div v-html="introContent" class="tab-content"></div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'ContactUs',
  props:['activeTabName'],
   data () {
    return {
    }
   },
  setup() {
    window.scrollTo(0,0);
    const state = reactive({
      introContent: [],
      isvisible: false,
      isShow: false,
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/articleDetail?type=11";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.introContent =  res.data.content;
      })();
    })
    return state;
  },
  components: {
  }
}
</script>

<style scoped>

</style>
