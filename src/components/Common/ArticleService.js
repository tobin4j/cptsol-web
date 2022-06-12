import Fetch from '../utils/Fetch'
export default{
    getTitles(type,subType,page,size,title = null){
        return  Fetch({
            url: '/open/articleList',
            params:{type:type,subType:subType,page:page,size:size,title:title}
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