<template >
<div class="app-area flex-row sma">

    <div>
        <div class="modules-area ">

            <div class="module-title" v-for="(subItem,subIdx) in titles" :class="{'module-title-active':id === subItem.articleId}" @click="change(subItem.articleId)">
                <div style="width: 85px;">
                    {{subItem.title}}
                </div>
            </div>

        </div>
    </div>
    <div class="mut-module-content" v-html="content">

    </div>
</div>
</template>

<script>
import ArticleTypeConfig from '../Common/ArticleTypeConfig'
import ArticleService from '../Common/ArticleService'
export default {
  name: 'singleModuleArticle',
    data () {
        return {

            content:'',
            config: null,
            title:'',

            titles:[],
            id:''
        }
    },

    methods:{
      async change(id){
          this.id = id
          let article = await ArticleService.getArticle(this.id);
          this.content = article.content;
      }
    },


    async mounted(){

        const componentName = this.$route.params.cm;

        this.config = ArticleTypeConfig[componentName];

        this.title = this.config.name;

        const type = this.config.type;

        this.titles = (await ArticleService.getTitles(type,null,1,50)).data;
        if (this.titles && this.titles.length > 0){
            this.id = this.titles[0].articleId
            let firstArticle = await ArticleService.getArticle(this.id);
            this.content = firstArticle.content;

        }



    },




}
</script>

<style rel="stylesheet/scss" scoped lang="scss">

    .sma{
        .modules-area{

            margin-left: 280px;

            width: 181px;
            background: #2F318B;
            border-radius: 3px;

            text-align: left;
            align-items:initial;
        }

        .mut-module-content{
            margin-left: 50px;

            width: 1120px;
        }
        .module-title{
            /*margin-left: 48px;*/

            width: 181px;
            height: 46px;


            /*width: 85px;*/
            /*height: 20px;*/
            font-size: 14px;
            font-family: PingFang-SC-Regular, PingFang-SC;
            font-weight: 400;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        .module-title-active{
            background: #575aa7;
        }
        .module-title:hover{
            background: #575aa7;
            cursor: pointer;
        }

        .module-title:before{
            content: '';
            width: 4px;
            height: 4px;
            background: #FFFFFF;
            border-radius: 50%;
            margin-right: 7px;
        }
    }


</style>
