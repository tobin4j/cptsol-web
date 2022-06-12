// 使用路由懒加载模式高效、提高首屏的渲染效率
import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {path:'/',redirect:'/index'},
    {path:'/index',component: ()=>import('../components/Main.vue')}, // 首页

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



    {path:'/notice',component:()=>import('../components/Pages/Notice/Tab.vue'),
       children: [
        {
            path: '',
            redirect: '/notice/list'
        },
        {
            path: 'list',
            component:()=>import('../components/Pages/Notice/Notice.vue')
        },
        {
           path:'details/:type/:id/:comp',
           name:'details',
           component:()=>import('../components/Common/Details.vue')
       }]
    },// 公告
    {path:'/centerDynamics',component:()=>import('../components/Pages/CenterDynamics/Tab.vue'),
       children: [
        {
            path: '',
            redirect: '/centerDynamics/list'
        },
        {
            path: 'list',
            component:()=>import('../components/Pages/CenterDynamics/CenterDynamics.vue')
        },
        {
           path:'details/:type/:id/:comp',
           name:'dynamicDetail',
           component:()=>import('../components/Common/Details.vue')
       }]
    }, //中心动态
    {path:'/industryExchanges',component:()=>import('../components/Pages/IndustryExchanges/Tab.vue'),
       children:[
        {
            path: '',
            redirect: '/industryExchanges/list'
        },
        {
            path: 'list',
            component:()=>import('../components/Pages/IndustryExchanges/IndustryExchanges.vue')
        },
        {
            path:'details/:type/:id/:comp',
            name:'industryExchangesDetail',
            component:()=>import('../components/Common/Details.vue')
        }
       ]
    }, //行业交流
     //名家观点
    {path:'/famous',component:()=>import('../components/Pages/Famous/Famous.vue'),
        children: [{
            path: '',
            redirect: '/famous/famousPoint'
        },
        {
            path: 'famousPoint',
            component:()=>import('../components/Pages/Famous/FamousPoint.vue')
        },
        {
            path: 'famousTeam',
            component:()=>import('../components/Pages/Famous/FamousTeam.vue')
        },
        {
            path:'details/:type/:id/:comp',
            name:'pointDetail',
            component:()=>import('../components/Common/Details.vue')
        },
        {
            path:'details/:type/:id/:comp',
            name:'teamDetail',
            component:()=>import('../components/Common/Details.vue')
        }
    ]
    },
    //职业风采
    {path:'/jobLook',component:()=>import('../components/Pages/JobLook/JobLook.vue'),
        children: [
            {
            path: '',
            redirect: '/jobLook/jobStyle' // 
        },
        {
            path: 'jobStyle',
            component:()=>import('../components/Pages/JobLook/JobStyle.vue'),
            children: [
                {
                    path: '',
                    redirect: '/jobLook/jobStyle/list' // 
                },
                {
                    path: 'list',
                    component:()=>import('../components/Pages/JobLook/jobStyleList.vue')
                },
                {
                   path:'details/:type/:id/:comp',
                   name:'jobStyleDetail',
                   component:()=>import('../components/Common/Details.vue')
            }]
            // jobStyleList
        },
        {
            path: 'jobInfo',
            component:()=>import('../components/Pages/JobLook/JobInfo.vue'),
            children: [
                {
                    path: '',
                    redirect: '/jobLook/jobInfo/list' // 
                },
                {
                    path: 'list',
                    component:()=>import('../components/Pages/JobLook/JobInfoList.vue')
                },
                {
                   path:'details/:type/:id/:comp',
                   name:'jobInfoDetail',
                   component:()=>import('../components/Common/Details.vue')
            }]
        },
        {
            path: 'teachShare',
            component:()=>import('../components/Pages/JobLook/TeachShare.vue'),
            children: [
                {
                    path: '',
                    redirect: '/jobLook/teachShare/list' // 
                },
                {
                    path: 'list',
                    component:()=>import('../components/Pages/JobLook/TeachShareList.vue')
                },
                {
                   path:'details/:type/:id/:comp',
                   name:'teachShareDetail',
                   component:()=>import('../components/Common/Details.vue')
            }]
        },
        {
            path: 'cooperateShow',
            component:()=>import('../components/Pages/JobLook/CooperateShow.vue'),
            children: [
                {
                    path: '',
                    redirect: '/jobLook/cooperateShow/list' // 
                },
                {
                    path: 'list',
                    component:()=>import('../components/Pages/JobLook/cooperateShowList.vue')
                },
                {
                   path:'details/:type/:id/:comp',
                   name:'coopDetails',
                   component:()=>import('../components/Common/Details.vue')
            }]
            // 
        }]
    }, 

];
const router = createRouter({
    routes,
    history:createWebHashHistory()
});
export default router