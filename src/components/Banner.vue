<template>

    <el-carousel :interval="5000" arrow="always" class="swiper" v-if="isShow">
      <el-carousel-item v-for="item in list" :key="item">
        <a @click="clickImg(item.redirectUrl)"  target="_blank">
          <img :src="item.imgUrl" class="common-img"/>
        </a>
      </el-carousel-item>
    </el-carousel>
    <div v-else  class="no-data">

    </div>



</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  components: {  },
  name:'Swiper',
  data() {
    return {   
    }
  },
  computed: {

  },
  methods: {

    clickImg(url){
      if (url) {
        window.open(url)
      }
    }


  },
  setup() {
    const state = reactive({
      list: [],
      isShow: false
    })
    onMounted(async () => {
      var api="https://api.cptsol.cn/api/open/adList?type=1";
      (async function () {
        const res = await axios.get(api)
        state.list = res.data
        state.isShow = false
        state.isShow = true
      })();
    })
    return state;
    },
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.swiper{
  z-index: 1;
}
.swiper img{
  cursor: pointer;
}
>>>.el-carousel__container {
  height: 100vh;
  max-height: 1000px;
}
.no-data {
  height: 100vh;
  max-height: 1000px;
  background-color: white;
  /*  background-image: url("https://cdn2.cptsol.cn/default-20220726170600.png");*/
}
>>>.el-carousel__button {
  height: 15px !important;
  width: 15px !important;
  border-radius: 50% !important;
}
>>>.el-carousel__indicator--horizontal {
  padding: var(--el-carousel-indicator-padding-vertical) 8px;
}
>>>.el-carousel__container .el-carousel__arrow {
  width: 50px;
  height: 50px;

}
>>>.el-carousel__container .el-icon {
  width: 20px;
  height: 20px;

}
>>>.el-carousel__container .el-icon svg{
  width: 20px;
  height: 20px;

}
>>>.el-carousel__arrow--right{
  right: 50px;
}
>>>.el-carousel__arrow--left{
  left: 50px;
}
</style>