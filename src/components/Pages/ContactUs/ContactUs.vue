<template>
  <!-- 联系我们 -->
  <div class="tab">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="联系我们" name="contactUS" class="tab-content">
        <div class="content" v-html="content"></div>
        </el-tab-pane>
        <el-tab-pane label="合作申请" name="coopApply" class="tab-content">
          <div class="content" v-html="coopApplyDetails"></div>
        </el-tab-pane>
  </el-tabs>
 </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'ContactUs',
  props:['activeTabName'],
   data () {
    return {
       title:'中心介绍',
       total: 10,
       activeName:'contactUS'
    }
   },
   watch:{
     activeTabName:{
       immediate:true,
       deep:true,
       handler: function(val) {
         console.log(val,'@')
         if(val === 0) {
           this.activeName = 'contactUS';
         } else {
           this.activeName = 'coopApply';
         }
       }
     }
   },
  setup() {
    const state = reactive({
      noticeList: [],
      isvisible: false,
      isShow: false,
      content:'',
      coopApplyDetails:'',//合作申请
      articleList:[] // 合作展示、文章列表
    })
    onMounted(async () => {
      var noticeUrl="https://api.cptsol.cn/api/open/articleDetail?type=17";
      (async function () {
        const res = await axios.get(noticeUrl) //返回 {id:0}
        state.content = res.data.content;
      })();
      var coopApplyUrl="https://api.cptsol.cn/api/open/articleDetail?type=18";
      (async function () {
        const res = await axios.get(coopApplyUrl) //返回 {id:0}
        state.coopApplyDetails = res.data.content;
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
