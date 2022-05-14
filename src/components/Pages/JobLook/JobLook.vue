<template>
  <div class="tab">
    <el-tabs v-model="activeName" @tab-change="handleChange">
        <el-tab-pane label="职业风采" name="jobStyle" class="tab-content">
        </el-tab-pane>
        <el-tab-pane label="就业信息" name="jobInfo" class="tab-content">
        </el-tab-pane>
        <el-tab-pane label="教学分享" name="teachShare" class="tab-content">
        </el-tab-pane>
        <el-tab-pane label="合作展示" name="cooperateShow" class="tab-content">
        </el-tab-pane>
        <router-view></router-view>
  </el-tabs>
 </div>
</template>

<script>
import { ref, toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'JobLook',
   data () {
    return {
    }
   },
   methods: {
    handleChange(name){
      this.activeName = name;
      if(name === 'jobStyle') {
        this.goPage('/jobLook/jobStyle');
      } else if(name ==='jobInfo'){
        this.goPage('/jobLook/jobInfo');
      } else if(name==='teachShare'){
        this.goPage('/jobLook/teachShare')
      } else {
        this.goPage('/jobLook/cooperateShow')
      }
    }
   },
  setup() {
    window.scrollTo(0,0);
    const router = useRouter();
    let url = router.currentRoute.value.fullPath;
    let str = url.split('/')[2];
    const activeName = ref(str);
    const goPage = (path)=> {
      router.push({
        path: path
      })
    }
    return {
      activeName,
      goPage
    };
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
/* .tab-content {
    padding-left: 20px; 
    margin-top: 32px;
    padding-right: 20px;
}
.center-intro{
  width: 1200px;
  height: 436px;
} */
/* .center-intro img {
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
} */

</style>
