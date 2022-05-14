<template>
  <span class="back">返回列表</span>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, onMounted,ref } from 'vue'
import axios from 'axios'
export default {
  name: 'backlist',
   data () {
    return {
       total: 10,
       activeName:'centerIntro'
    }
   },
   methods: {
    // goBack(){
    //   this.$parent.showList();
    // }
   },
  components: {
  },
  setup() {
    const state = reactive({
      content:'',
      comp:''
    })
    const router = useRouter();
    let url = router.currentRoute.value.fullPath;
    let str1 = url.split('/')[1];
    let str2 = url.split('/')[2];
    console.log(str1,'str1')
    console.log(str2,"str2")
    const comp = ref(str1);
     onMounted(()=>{
       let params = router.currentRoute.value.params;
       let noticeUrl=`https://api.cptsol.cn/api/open/articleDetail?type=${params.type}&id=${params.id}`;
        axios.get(noticeUrl).then((res)=>{
          let content = res.data.content;
          state.content = content;
        })
     })
    return {comp,state};
  }
}
</script>

<style scoped>
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
