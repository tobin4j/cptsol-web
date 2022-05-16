<template>
  <!-- 联系我们 -->
  <div class="tab">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleChange">
        <el-tab-pane label="联系我们" name="contactUs" class="tab-content">
        </el-tab-pane>
        <el-tab-pane label="合作申请" name="coopApply" class="tab-content">
        </el-tab-pane>
        <router-view></router-view>
  </el-tabs>
 </div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  name: 'ContactUs',
  // props:['activeTabName'],
   data () {
    return {
      //  title:'中心介绍',
      //  total: 10,
      // activeName:'contactUS'
    }
   },
   methods: {
    handleChange(name){
      this.activeName = name;
      if(name === 'coopApply') {
        this.goCoopApply();
      } else {
        this.goContactUs();
      }
    }
  },
  setup() {
    window.scrollTo(0,0);
    const router = useRouter();
    let url = router.currentRoute.value.fullPath;
    let index = url.lastIndexOf("\/");
    let str = url.substring(index + 1,url.length);
    const activeName = ref(str);
    const goCoopApply = ()=> {
      router.push({
        path: '/contact/coopApply'
      })
    }
    const goContactUs = ()=> {
      router.push({
        path: '/contact/contactUs',
      })
    }
    return {
      activeName,
      goContactUs,
      goCoopApply
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
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
    font-weight: 400;
    font-size: 14px;
}
</style>
