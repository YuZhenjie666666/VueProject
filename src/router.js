import VueRouter from 'vue-router'
// 导入路由对应的组件
import homeContainer from './components/tabbar/HomeContainer.vue'
import memberContain from './components/tabbar/MemberContainer.vue'
import searchContain from './components/tabbar/SearchContainer.vue'
import shopCarContain from './components/tabbar/ShopCarContainer.vue'
import newsList from './components/news/Newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    // 这是配置路由规则
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/member',component:memberContain},
    {path:'/shopcar',component:searchContain},
    {path:'/search',component:shopCarContain},
    {path:'/home/newslist',component:newsList},
    {path:'/home/newsinfo/:id',component:newsinfo}
  ],
  linkActiveClass:'mui-active'

})

// 把路由对象暴露出去
export default router