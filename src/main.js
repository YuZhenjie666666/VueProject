// 入口文件
import Vue from 'vue'
// 导入路由模块
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2启用路由
Vue.use(VueRouter)
// 1.3导入自己的路由模块
import router from './router.js'


// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
// 导入bootstrap组件
import 'bootstrap/dist/css/bootstrap.css'

// 导入mui组件
import  './lib/mui/css/mui.min.css'
import  './lib/mui/css/icons-extra.css'


// 2.1导入vue-resource
import VueRource from  'vue-resource'
// 2.2安装vue-resource
Vue.use(VueRource)


// 按需导入mintui组件
import { Header,Swipe, SwipeItem,Button,Search,Cell,Field    } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Search.name, Search)
Vue.component(Cell.name, Cell)
Vue.component(Field.name, Field)


//导入App根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render : c => c(app),
    router//1.4挂在路由对象到项目中去
})