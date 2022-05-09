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
      //  title:'中心介绍',
      //  total: 10,
       activeName:'contactUS'
    }
   },
   methods: {
    handleChange(name){
      if(name === 'coopApply') {
        this.goCoopApply();
      } else {
        this.goContactUs();
      }
    }
  },
   watch:{
    //  activeTabName:{
    //    immediate:true,
    //    deep:true,
    //    handler: function(val) {
    //      console.log(val,'@')
    //      if(val === 0) {
    //        this.activeName = 'contactUS';
    //      } else {
    //        this.activeName = 'coopApply';
    //      }
    //    }
    //  }
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
      var noticeUrl="https://api.cptsol.cn/api/open/articleDetail?type=13";
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
.tab >>>.el-tabs.el-tabs--top.demo-tabs.lastone .el-tabs__active-bar{
  width: 100px!important;
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
    text-indent: 0;
    padding-right: 20px;
}
.center-intro{
  width: 1200px;
  height: 436px;
}
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
