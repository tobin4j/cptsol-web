<template>
<!-- 合作申请 -->
 <div class="content" v-html="content"></div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'ContactUs',
//   props:['activeTabName'],
   data () {
    return {
    //    title:'中心介绍',
    //    total: 10,
    //    activeName:'contactUS'
    }
   },
//    watch:{
//      activeTabName:{
//        immediate:true,
//        deep:true,
//        handler: function(val) {
//          console.log(val,'@')
//          if(val === 0) {
//            this.activeName = 'contactUS';
//          } else {
//            this.activeName = 'coopApply';
//          }
//        }
//      }
//    },
  setup() {
    const state = reactive({
      content:'',
    })
    window.scrollTo(0,0);
    onMounted(async () => {
      var coopApplyUrl="https://api.cptsol.cn/api/open/articleDetail?type=18";
      (async function () {
        const res = await axios.get(coopApplyUrl) //返回 {id:0}
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
.content {
  text-indent: 0;
  padding-left: 20px;
}
</style>
