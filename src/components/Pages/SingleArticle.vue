<template>
    <div class="app-area" >

        <div class="app-name">
            {{title}}
        </div>
        <div class="st-x" style="margin-bottom: 36px"></div>
        <div class="app-content" style="width: 1220px;" v-html="content"></div>
    </div>
</template>

<script>
import ArticleTypeConfig from '../Common/ArticleTypeConfig'
import ArticleService from '../Common/ArticleService'

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
    async mounted(){

        const componentName = this.$route.params.cm;

        this.config = ArticleTypeConfig[componentName];

        this.title = this.config.name;

        let res = await ArticleService.getArticleByType(this.config.type);

        this.content = res.content


    },
}
</script>

<style scoped>

    .app-area{
        margin-left: calc((100% - 1220px) / 2);
    }

</style>
