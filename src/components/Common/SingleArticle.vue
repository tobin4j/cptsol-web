<template>
    <div class="app-area" >

        <div class="app-name">
            {{title}}
        </div>
        <div class="st-x" style="margin-bottom: 36px"></div>
        <div class="app-content" style="width: 1120px;" v-html="content"></div>
    </div>
</template>

<script>
import ArticleTypeConfig from './ArticleTypeConfig'
import Fetch from '../utils/Fetch'

export default {
    name: 'singleArticle',
    data () {
        return {
            content:'',
            config: null,
            title:''
        }
    },
    methods: {

    },
    mounted(){

        const componentName = this.$route.params.cm;

        this.config = ArticleTypeConfig[componentName]

        Fetch({
            url: '/open/articleDetail',
            params:{type:this.config.type}
        }).then(res => {
            this.content = res.content
        })

        this.title = this.config.name
    },
}
</script>

<style scoped>

    .app-area{
        margin-left: calc((100% - 1120px) / 2);
    }

</style>
