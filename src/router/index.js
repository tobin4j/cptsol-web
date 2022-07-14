// 使用路由懒加载模式高效、提高首屏的渲染效率
import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {path:'/',redirect:'/index'},
    {
        path:'/index',
        component: ()=>import('../components/Main.vue'),
        meta: {
            keepAlive: true
        }}, // 首页

    {
        path: '/sa/:cm',
        component:()=>import('../components/Pages/SingleArticle.vue'),
        name: 'singleArticle',
    },
    {
        path: '/mma/:cm',
        component:()=>import('../components/Pages/MultiModuleArticle.vue'),
        name: 'multiModuleArticle',
    },
    {
        path: '/sma/:cm',
        component:()=>import('../components/Pages/SingleModuleArticle.vue'),
        name: 'singleModuleArticle',
    },
    {
        path: '/detail/:cm/:id',
        component:()=>import('../components/Pages/ArticleDetail.vue'),
        name: 'detail',
    },

    {
        path: '/rp',
        component:()=>import('../components/Pages/TestGuide/RegisterProcess.vue')
    },
    {
        path: '/tp',
        component:()=>import('../components/Pages/TestGuide/TestProcess.vue')
    },
    {
        path:'/cap',
        component:()=>import('../components/Pages/TestGuide/CertificateClaimProcess.vue')
    },

    {
        path: '/al/:cm',
        component:()=>import('../components/Pages/ArticleList.vue'),
        name: 'articleList',
    },
    {
        path: '/ial/:cm',
        component:()=>import('../components/Pages/ImgArticleList.vue'),
        name: 'imgArticleList',
    },


];
const router = createRouter({
    routes,
    history:createWebHashHistory()
});
export default router