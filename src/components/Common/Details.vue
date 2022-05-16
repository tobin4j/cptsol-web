<template>
  <BackList v-show="showDetails" @click="goBack"></BackList>
  <div class="tab">
      <div class="content" v-html="content"></div>
 </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, onMounted } from 'vue'
import BackList from './backlist.vue'
import axios from 'axios'
import router from '@/router'
export default {
  name: 'Notice',
  
   data () {
    return {
       total: 10,
       activeName:'centerIntro',
       showDetails: true
    }
   },
   methods: {
    goBack(){
      let path = '';
      if(this.menu == 3) {
        path = '/notice'
      }
      if(this.menu == 4) {
        path = '/centerDynamics'
      }
      if(this.menu == 5) {
        path = '/industryExchanges'
      }
      if(this.menu == 61) {
        path = '/famous/famousPoint'
      }
      if(this.menu == 62) {
        path = '/famous/famousTeam'
      }
      if(this.menu == 71) {
        path = '/jobLook/jobStyle'
      }
      if(this.menu == 72) {
        path = '/jobLook/jobInfo'
      }
      if(this.menu == 73) {
        path = '/jobLook/teachShare'
      }
      if(this.menu == 74) {
        path = '/jobLook/cooperateShow'
      }
      router.push({
        path:path
      })
    },
   },
  components: {
    BackList
  },
  setup() {
    window.scrollTo(0,0);
    const state = reactive({
      content:'',
      menu:''
    })
     const router = useRouter();
     onMounted(()=>{
       let params = router.currentRoute.value.params;
       state.menu = params.comp;
       let noticeUrl=`https://api.cptsol.cn/api/open/articleDetail?type=${params.type}&id=${params.id}`;
        axios.get(noticeUrl).then((res)=>{
          let content = res.data.content;
          state.content = content;
        })
     })
    return state;
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
  /* position: relative; */
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
.content {
  text-indent: 0;
  padding-left: 40px;
  text-align: justify;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
    font-weight: 400;
    font-size: 14px;
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
.back {
  position: absolute;
  right: 0;
  top: 0!important;
  font-size: 16px;
  font-family: "PingFangSC-Semibold", "PingFang SC";
  font-weight: 600;
  color: #2F318B;
  line-height: 22px;
  cursor: pointer;
}
</style>
