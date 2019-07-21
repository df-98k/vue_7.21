// 入口文件
import Vue from 'vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入缩略图

import VuePreview from 'vue-preview'

Vue.use(VuePreview)

// 下载时间插件 coment 
// 定义全局过滤器
import moment from 'moment'
Vue.filter('dateNew',function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){

return moment(dataStr).format(pattern)

})


// 设置请求的根路径
Vue.http.options.root = "http://www.liulongbin.top:3005";


// 导入 mui 的样式文件
import './lib/mui/css/mui.min.css'

import  './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
// 需要什么组件就在{input}里面加,用bootrapt就不需要这么写
import { Header,Swipe, SwipeItem, Button,Lazyload } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);

// 导入 App 根组件
import app from './App.vue'

let vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
})