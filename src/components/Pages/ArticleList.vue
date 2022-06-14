<template>
    <div class="app-area al" >

        <div class="flex-row">
            <div>
                <div class="app-name">
                    {{title}}
                </div>
                <div class="st-x" style="margin-bottom: 36px"></div>
            </div>
            <div class="article-search flex-row">
                <el-input
                        placeholder="输入搜索内容"
                        v-model="searchKey">
                    <template #suffix>
                        <el-icon @click="search(1)" style="cursor: pointer" class="el-input__icon" ><search style="width: 30px;height: 30px"/></el-icon>
                    </template>
                </el-input>
                <img alt="logo" src="../../assets/refresh.png"  style="width: 21px;height: 21px;margin-top:12px;margin-left: 27px;cursor: pointer" @click="reset"/>
            </div>
        </div>


        <div class="article-list">

            <div class="article-item flex-row" v-for="(item,idx) in list" @click="goDetail(item)">
                <div class="item-left">
                    <div class="article-title single-line-break">
                        {{item.title}}
                    </div>
                    <div class="article-summary third-line-break">
                        {{item.summary}}
                    </div>
                    <div class="more" style="margin-top: 35px">
                        MORE
                        <img src="../../assets/xjt.png"/>
                    </div>
                </div>
                <div class="item-right">
                    <div class="item-date">{{item.pubdate.substring(5,11)}}</div>
                    <div class="item-year">{{item.pubdate.substring(0,4)}}年</div>
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
            <span>共{{total}}条，10条每页</span>
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
    .al{
        .app_content{
            width: calc(100% - 200px);
        }
        .article-list{
            margin-top: 50px;
            .article-item{
                text-align: left;
                margin-top: 20px;
                cursor: pointer;
                .item-right{
                    width: 85px;
                    margin-left: 52px;
                }
                .item-left{
                    width: calc(100% - 134px);
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
                .item-date{
                    text-align: center;

                    height: 37px;
                    font-size: 28px;
                    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
                    font-weight: bold;
                    color: #666666;
                    line-height: 37px;
                }
                .item-year{
                    text-align: center;
                    height: 26px;
                    font-size: 20px;
                    font-family: MicrosoftYaHei;
                    color: #999999;
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
                width:374px;
                height: 47px;
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
            }
            ::v-deep .el-pagination .el-pager .is-active{
                background: #2F318B !important;
                border-radius: 2px;
            }


        }
    }
    .app-area{
        margin-left: 100px;
        margin-right: 100px;
        /*min-height: calc(100% - 400px + 68px);*/
    }


</style>
