// 入口文件
import Vue from 'vue'
// 导入路由模块
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2启用路由
Vue.use(VueRouter)
// 1.3导入自己的路由模块
import router from './router.js'


// 导入mui组件
import  './lib/mui/css/mui.min.css'
import  './lib/mui/css/icons-extra.css'


// 按需导入mintui组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)


//导入App根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render : c => c(app),
    router//1.4挂在路由对象到项目中去
})