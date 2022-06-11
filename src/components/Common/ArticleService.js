import Fetch from '../utils/Fetch'
export default{
    getTitles(type,subType,page,size){
        return  Fetch({
            url: '/open/articleList',
            params:{type:type,subType:subType,page:page,size:size}
        })
    },
    getArticle(id){

        return  Fetch({
            url: '/open/articleDetail',
            params:{id:id}
        })

    },

    getArticleByType(type){

        return  Fetch({
            url: '/open/articleDetail',
            params:{type:type}
        })

    },
}