import VueRouter from 'vue-router'

import  HomeContainer from './components/tabbar/HomeContainer'
import  MemberContainer from './components/tabbar/MemberContainer'
import  SearchContainer from './components/tabbar/SearchContainer'
import  ShopcarContainer from './components/tabbar/ShopcarContainer'
import  NewsList from  './components/news/NewsList'
import  NewsInfo from './components/news/NewsInfo'
import  PhotoList from './components/photos/PhotoList'
var router = new VueRouter({
    routes: [ //配置路由规则
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:PhotoList}
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

export default router
