<template>
  <div class="tab">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="中心介绍" name="centerIntro" class="tab-content">
      <div class="content" v-html="content"></div>
    </el-tab-pane>
  </el-tabs>
 </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'Notice',
   data () {
    return {
       title:'中心介绍',
       activeName:'centerIntro'
    }
   },
  methods: {
   },
  setup() {
    const state = reactive({
      content: []
    })
    onMounted(async () => {
      var dataUrl="https://api.cptsol.cn/api/open/articleDetail?type=1";
      (async function () {
        const res = await axios.get(dataUrl);
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
/* .intro-content {
    width: 1200px;
    margin: 0 auto;
} */
.tab >>>.el-tabs__header {
    margin: 0;
}
.tab >>>.el-tabs__active-bar {
    left: 20px;
    height: 3px;
    width: 65px!important;
    background-color: #2F318B;
}
.tab >>>.el-tabs__item.is-active {
    font-size: 16px;
    font-family: "PingFangSC-Semibold", "PingFang SC";
    font-weight: 600;
    color: #454545;
}
.tab >>>.el-tabs__nav-wrap::after {
      position: static !important;
}
.tab-content {
    padding-left: 20px; 
    margin-top: 32px;
    text-indent: 0;
    padding-right: 20px;
}
.tab-content .content {
  text-indent: 0;
  padding-left: 20px;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  font-weight: 400;
  font-size: 14px;
}
/* .center-intro{
  width: 1200px;
  height: 436px;
} */
.center-intro img {
  height: 100%;
  width: 100%;
  object-fit: fill;
  border-radius: 6px;
  border: 1px solid #979797;
}
 .intro-content{
  margin-top: 24px;
  margin-bottom: 92px;
}
.intro-content p {
    font-size: 16px;
    font-family: "PingFangSC-Semibold", "PingFang SC";
    font-weight: 600;
    color: #454545;
    line-height: 22px;
    padding-left: 20px;
    text-indent: 0;
    text-align: justify;
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

</style>
