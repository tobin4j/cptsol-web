<template>
  <el-carousel :interval="3000" arrow="always" class="swiper" v-if="isShow">
    <el-carousel-item v-for="item in list" :key="item">
      <a @click="clickImg(item.redirectUrl)"  target="_blank">
       <img :src="item.imgUrl" class="common-img"/>
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  components: {  },
  name:'Swiper',
  data() {
    return {   
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
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
.el-carousel--horizontal{
  /*overflow-x: visible;*/
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
</style>