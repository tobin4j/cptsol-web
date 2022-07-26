<template>
    <div class="detail">
        <div class="detail-title">
            {{title}}
        </div>
        <div class="detail-content" >
            <div style="width: 1220px;overflow-x: auto;" v-html="content"></div>
        </div>
    </div>
</template>

<script>
import ArticleTypeConfig from '../Common/ArticleTypeConfig'
import ArticleService from '../Common/ArticleService'

export default {
    name: 'detail',
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
        window.scrollTo(0,0);

        const componentName = this.$route.params.cm;
        const id = this.$route.params.id;

        this.config = ArticleTypeConfig[componentName];

        this.title = this.config.name;

        let res = await ArticleService.getArticle(id);
        this.title = res.title;
        this.content = res.content


    },
}
</script>

<style rel="stylesheet/scss" scoped lang="scss">


    .detail{
        margin-top :200px;
        padding-bottom :200px;
        min-height: calc(100% - 400px + 68px);
        .detail-title{
            text-align: center;
            font-size: 24px;
            font-weight: 700;
        }
        .detail-content{
            margin-top: 50px;
            margin-left: calc((100% - 1220px) / 2);
            width: 1220px;
            word-break: break-all;
            word-wrap: break-word;
        }
    }

</style>
