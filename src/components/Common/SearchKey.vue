<template>
  <!-- 搜索 -->
    <el-form :inline="true" :model="formInline" class="serach-form">
    <el-form-item>
      <el-input v-model.trim="searchForm.keyWord"  class="input" placeholder="请输入关键字搜索"/>
    </el-form-item>
    <el-form-item>
    <el-button class="search"  @click="onSearch" >搜索</el-button>
    <img alt="logo" src="../../assets/refresh.png" @click="reset" style="margin-top:4px;"/>
    </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'SearchKey',
   props:{
     title: {
       type: String
     }
   },
   data () {
    return {
       searchForm: {
        keyWord: '',
       }
    }
   },
  methods: {
    // 方法
    onSearch() {
        // if(this.searchForm.keyWord) {
         this.$parent.search(this.searchForm.keyWord);
        // }
    },
    reset() {
      this.searchForm.keyWord = '';
      this.$parent.search(this.searchForm.keyWord,'reset');
    }
  },
  components: {
  }
}
</script>

<style scoped>
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

</style>
