import VueRouter from 'vue-router'
// 导入路由对应的组件
import homeContainer from './components/tabbar/HomeContainer.vue'
import memberContain from './components/tabbar/MemberContainer.vue'
import searchContain from './components/tabbar/SearchContainer.vue'
import shopCarContain from './components/tabbar/ShopCarContainer.vue'
import newsList from './components/news/Newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import login from './components/login/login.vue'
import classInfo from './components/class/classInfo.vue'
import evaluate from './components/profile/evaluate.vue'
import infodetail from './components/profile/infodetail.vue'
import basicinfo from './components/profile/basicinfo.vue'
import connectionus from './components/connection/ConnectionUs.vue'
import liuyan from './components/liuyan/liuyan.vue'
import teacher from './components/goodteacher/GoodTeacher.vue'
import classEvalute from './components/class/ClassEvaluate.vue'
import managerliuyan from './components/managerliuyan/ManagerLiuyan.vue'
import managerliuyandetail from './components/managerliuyan/ManagerLiuyanDetail.vue'
import classfankui from './components/classfaikui/ClassFankui.vue'
import schoolnews from './components/school/schoolnews.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    // 这是配置路由规则
    {path:'/a',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/member',component:memberContain},
    {path:'/shopcar',component:shopCarContain},
    {path:'/search',component:searchContain},
    {path:'/home/newslist',component:newsList},
    {path:'/home/newsinfo/:id',component:newsinfo},
    {path:'/search/classinfo',component:classInfo},
    {path:'/member/evaluate',component:evaluate},
    {path:'/member/infodetail',component:infodetail},
    {path:'/member/basicinfo',component:basicinfo},
    {path:'/home/connectionus',component:connectionus},
    {path:'/home/liuyan',component:liuyan},
    {path:'/home/goodteacher',component:teacher},
    {path:'/home/classevalute',component:classEvalute},
    {path:'/home/managerliuyan',component:managerliuyan},
    {path:'/home/managerliuyan/managerliuyandetail',component:managerliuyandetail},
    {path:'/home/classfankui',component:classfankui},
    {path:'/home/schoolnews/detail',component:schoolnews},
    {path:'/',component:login}
  ],
  linkActiveClass:'mui-active'

})

// 把路由对象暴露出去
export default router