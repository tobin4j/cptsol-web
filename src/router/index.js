// 使用路由懒加载模式高效、提高首屏的渲染效率
import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {path:'/',redirect:'/index'},
    {path:'/index',component: ()=>import('../components/Main.vue')}, // 首页
    {path:'/centerIntro',component:()=>import('../components/Pages/CenterIntro/CenterIntro.vue')},// 中介介绍
    {path:'/notice',component:()=>import('../components/Pages/Notice/Tab.vue')},// 公告
    {path:'/centerDynamics',component:()=>import('../components/Pages/CenterDynamics/Tab.vue')}, //中心动态
    {path:'/industryExchanges',component:()=>import('../components/Pages/IndustryExchanges/Tab.vue')}, //行业交流
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
        }]
    },
    //职业风采
    {path:'/jobLook',component:()=>import('../components/Pages/JobLook/JobLook.vue'),
        children: [{
            path: '',
            redirect: '/jobLook/jobStyle' // 
        },
        {
            path: 'jobStyle',
            component:()=>import('../components/Pages/JobLook/JobStyle.vue')
        },
        {
            path: 'JobInfo',
            component:()=>import('../components/Pages/JobLook/JobInfo.vue')
        },
        {
            path: 'teachShare',
            component:()=>import('../components/Pages/JobLook/TeachShare.vue')
        },
        {
            path: 'cooperateShow',
            component:()=>import('../components/Pages/JobLook/CooperateShow.vue')
        }]
    }, 
    //考试指南
    {path:'/testGuide',component:()=>import('../components/Pages/TestGuide/TestGuide.vue'),
        children: [{
            path: '',
            redirect: '/testGuide/testIntro' 
        },
        {
            path: 'testIntro',// 考试介绍
            component:()=>import('../components/Pages/TestGuide/testIntro.vue')
        },
        {
            path: 'testRangle',
            component:()=>import('../components/Pages/TestGuide/testRangle.vue')
        },
        {
            path: 'testStruce',
            component:()=>import('../components/Pages/TestGuide/testStruce.vue')
        },
        {
            path: 'TestStandard',
            component:()=>import('../components/Pages/TestGuide/TestStandard.vue')
        },
        {
            path: 'QExample',
            component:()=>import('../components/Pages/TestGuide/QExample.vue')
        },
        {
            path: 'TestBook',
            component:()=>import('../components/Pages/TestGuide/TestBook.vue')
        },
        {
            path: 'registerProcess',
            component:()=>import('../components/Pages/TestGuide/RegisterProcess.vue')
        },
        {
            path: 'testProcess',
            component:()=>import('../components/Pages/TestGuide/TestProcess.vue')
        },
        {
            path:'certificateClaimProcess',
            component:()=>import('../components/Pages/TestGuide/CertificateClaimProcess.vue')
        },]
    },
    //考试系统
    {path:'/testSys',component:()=>import('../components/Pages/TestSys/TestSys.vue')}, 
    {
        path:'/contact',
        component:()=>import('../components/Pages/ContactUs/ContactUs.vue'),
        children: [{
            path: '',
            redirect: '/contact/contactUs'
        },
        {
            path: 'contactUs',
            component:()=>import('../components/Pages/ContactUs/contact.vue')
        },
        {
            path: 'coopApply',
            component:()=>import('../components/Pages/ContactUs/coopApply.vue')
        }]

    }, //联系我们
    {path:'/intro/details/:type/:id',name:'details',component:()=>import('../components/Common/Details.vue')}// 详情
]
const router = createRouter({
    routes,
    history:createWebHashHistory()
})
export default router