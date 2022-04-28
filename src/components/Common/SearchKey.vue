<template>
  <!-- 搜索 -->
    <!-- <p class="title">{{title}}</p> -->
    <el-form :inline="true" :model="formInline" class="serach-form">
    <el-form-item>
      <el-input v-model.trim="searchForm.keyWord" placeholder="" class="input"/>
    </el-form-item>
    <el-form-item>
    <el-button class="search"  @click="onSearch" >搜索</el-button>
    <img alt="logo" src="../../assets/refresh.png" @click="reset"/>
    </el-form-item>
    </el-form>
</template>

<script>
// import Banner from '../Banner.vue'
import Main from '../Main.vue'
import { defineComponent } from 'vue';
export default {
  name: 'SearchKey',
   props:{
     title: {
       type: String
     }
   },
   data () {
    return {
      //  title: title,
       searchForm: {
        keyWord: '',
       }
    }
   },
  methods: {
    // 方法
    onSearch() {
       this.$parent.search(this.searchForm.keyWord);
      // 参数：菜单名、关键字
    },
    reset() {
      this.searchForm.keyWord = '';
      this.$parent.search(this.searchForm.keyWord);
    }
  },
  components: {
    // Banner,
    Main
  }
}
</script>

<style scoped>
.title {
  width: 1200px;
  margin: 26px auto;
  text-indent: 40px;
  font-size: 16px;
  font-family: "PingFangSC-Semibold", "PingFang SC";
  font-weight: 600;
  color: #454545;
  line-height: 22px;
}
 .serach-form {
   /* width: 1200px; */
   margin: 0 auto;
   justify-content: end;
   height: 40px;
   margin-top: 16px;
   margin-bottom: 24px;
 }
 .serach-form >>>.el-form-item {
   margin-right: 0;
 }
 .serach-form >>>.el-form-item:nth-child(1){
   width: 508px;
   margin-right: 32px;
 }
 .serach-form >>>.el-form-item:nth-child(2){
   width:150px;
 }
 .input >>>input{
    width: 508px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #D4D9E0;
 }
 .search {
    width: 100px;
    height: 32px;
    background: #2F318B;
    border-radius: 4px;
    font-family: "PingFangSC-Regular", "PingFang SC";
    font-weight: 400;
    color: #FFFFFF;
    line-height: 20px;
    margin-right: 24px;
 }
</style>
