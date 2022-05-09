<template>
<!-- 联系我们 -->
 <div class="content" v-html="content"></div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'ContactUs',
   data () {
    return {
    }
   },
  setup() {
    const state = reactive({
      content:''
    })
    window.scrollTo(0,0);
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/articleDetail?type=17";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.content = res.data.content;
      })();
    })
    return state;
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
.tab >>>.el-tabs__header {
    margin: 0;
}
.tab >>>.el-tabs__active-bar {
    left: 20px;
    height: 3px;
    width: 65px!important;
    background-color: #2F318B;
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
    padding-right: 20px;
}
.content {
  text-indent: 0;
  padding-left: 20px;
}
</style>
