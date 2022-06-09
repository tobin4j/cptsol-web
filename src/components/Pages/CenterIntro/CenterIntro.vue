<template>
  <div class="app-area" >

      <div class="app-name">
          中心介绍
      </div>
      <div class="st-x" style="margin-bottom: 36px"></div>
      <div class="app-content" style="width: 1120px;" v-html="content"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  name: 'Notice',
   data () {
    return {
       title:'中心介绍',
       activeName:'centerIntro'
    }
   },
  methods: {

   },
  setup() {
    const state = reactive({
      content: []
    });
    onMounted(async () => {
      let dataUrl="https://api.cptsol.cn/api/open/articleDetail?type=1";
      (async function () {
        const res = await axios.get(dataUrl);
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

    .app-area{
        margin-left: calc((100% - 1120px) / 2);
    }

</style>
