// 入口文件
import Vue from 'vue'

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
    render : c => c(app)
})