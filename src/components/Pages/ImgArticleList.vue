<template>
    <div class="app-area ial" >

        <div class="flex-row">
            <div>
                <div class="app-name">
                    {{title}}
                </div>
                <div class="st-x"></div>
            </div>
            <div class="article-search flex-row">
                <el-input
                        placeholder="输入搜索内容"
                        v-model="searchKey">
                    <template #suffix>
                        <el-icon @click="search(1)" style="cursor: pointer" class="el-input__icon" ><search style="width: 30px;height: 30px"/></el-icon>
                    </template>
                </el-input>
                <img alt="logo" src="../../assets/refresh.png"  style="width: 20px;height: 20px;margin-top:15px;margin-left: 10px;cursor: pointer" @click="reset"/>
            </div>
        </div>


        <div class="article-list">

            <div class="article-item flex-row" v-for="(item,idx) in list" @click="goDetail(item)">
                <div  :class="{'item-left':config.hasPubdate,'item-all':!config.hasPubdate}">
                    <div class="flex-row">
                        <div class="article-img">
                            <img :src="item.imgUrl" class="common-img" style="width: 280px;height: 175px;">
                        </div>
                        <div  class="article-main">
                            <div class="article-title single-line-break">
                                {{item.title}}
                            </div>
                            <div class="article-summary third-line-break" style="margin-top: 5px">
                                {{item.summary}}
                            </div>
                            <div class="more" style="position: absolute;bottom: 0;right: 0" >
                                MORE
                                <img src="../../assets/xjt.png"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="item-right" v-if="config.hasPubdate">
                    <div class="item-date">{{item.pubdate ? item.pubdate.substring(5,11) : item.createTime.substring(5,11)}}</div>
                    <div class="item-year">{{item.pubdate ? item.pubdate.substring(0,4) : item.createTime.substring(0,4)}}</div>
                </div>
            </div>

        </div>

        <div class="article-page flex-row">
            <el-pagination background layout="prev, pager, next"
                           :total="total"
                           :page-size="pageSize"
                           @currentChange = "search"
                           @prevClick = "search"
                           @nextClick = "search"/>
<!--            <span>共{{total}}条，10条每页</span>-->
        </div>
    </div>
</template>

<script>
import ArticleTypeConfig from '../Common/ArticleTypeConfig'
import ArticleService from '../Common/ArticleService'
import {  Search } from '@element-plus/icons-vue'
export default {
    name: 'articleList',
    data () {
        return {
            config: null,
            title:'',

            list:[],

            searchKey:'',


            page:1,
            pageSize:20,

            total:0
        }
    },
    methods: {

        goDetail(item){
          this.$router.push({
              path : '/detail/'+this.config.cm+'/'+item.articleId
          })

        },

        async search(page){
            this.page = page;

            let res = await ArticleService.getTitles(this.config.type,null,this.page,this.pageSize,this.searchKey);

            this.list = res.data
            this.total = res.total
        },
        reset(){

            this.searchKey = '';
            this.search(1);

        }

    },
    async mounted(){
        window.scrollTo(0,0);
        const componentName = this.$route.params.cm;

        this.config = ArticleTypeConfig[componentName];

        this.title = this.config.name;

        this.search(1)


    },
    components: {
        Search
    }
}
</script>

<style rel="stylesheet/scss" scoped lang="scss">
    .ial{
        .app_content{
            width: calc(100% - 200px);
        }
        .article-list{
            margin-top: 50px;
            .article-item{
                text-align: left;
                margin-top: 25px;
                height: 175px;
                cursor: pointer;
                .item-right{
                    /*width: 85px;*/
                    margin-left: 50px;
                }
                .item-left{
                    width: calc(100% - 120px);
                }
                item-all{
                    width: 890px !important;
                }
                .article-img{
                    width: 280px;
                    height: 175px;
                    margin-right: 50px;
                }
                .article-main{
                    width: calc(100% - 330px);
                    position: relative;
                }

                .article-title{
                    width: 803px;
                    height: 26px;
                    font-size: 20px;
                    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
                    font-weight: bold;
                    color: #333333;
                    line-height: 26px;
                }
                .article-summary{
                    width: 100%;
                    height: 108px;
                    font-size: 16px;
                    font-family: MicrosoftYaHei;
                    color: #666666;
                    line-height: 36px;
                }
                .more{
                    align-content: flex-end;
                    height: 21px;
                    font-size: 16px;
                    font-family: MicrosoftYaHei;
                    color: #999999;
                    line-height: 21px;
                    cursor: pointer;
                    display: flex;
                    img{
                        width: 10px;
                        height: 9px;
                        margin: 6px auto 6px 8px;
                    }
                }
                .article-title:hover{
                    color: #2F318B;
                }
                .article-summary:hover{
                    color: #2F318B;
                }
                .more:hover{
                    color: #2F318B;
                }
                .item-date{
                    text-align: center;
                    margin-top: 26px;
                    /*height: 37px;*/
                    font-size: 20px;
                    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
                    /*font-weight: bold;*/
                    color: #333333;
                    line-height: 37px;
                }
                .item-year{
                    text-align: center;
                    /*height: 26px;*/
                    font-size: 28px;
                    font-family: MicrosoftYaHei;
                    color: #333333;
                    line-height: 26px;

                    margin-top: 10px;
                }

            }
            .article-item:first-child{
                margin-top: 0;
            }

        }


        .article-search{
            margin-top: 11px;
            margin-left:auto;
            .el-input{
                width:400px;
                height: 50px;

            }
            >>>.el-input__wrapper{
                padding-left: 10px !important;
                padding-right: 10px !important;
            }
            .el-icon{
                width:20px !important;
                height:20px !important;
            }
        }
        .article-page{
            margin-top: 50px;
            /*width: 100%;*/
            margin-left: auto;

            span{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 16px;

                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #4A4A4A;
                line-height: 20px;
            }
            .el-pagination{
                margin-left: auto;
                ::v-deep .btn-prev .el-icon{
                    width: 20px;
                    height: 20px;
                    svg{
                        width: 20px;
                        height: 20px;
                    }
                }
                ::v-deep .btn-next .el-icon{
                    width: 20px;
                    height: 20px;
                    svg{
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            ::v-deep .el-pagination .el-pager .is-active{
                background: #2F318B !important;
                border-radius: 2px;
            }


        }
    }
    .app-area{
        margin-left: calc((100% - 1220px) / 2);
        margin-right: calc((100% - 1220px) / 2);
        /*min-height: calc(100% - 400px + 68px);*/
    }


</style>
