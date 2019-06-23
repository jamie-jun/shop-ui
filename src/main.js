import Vue from 'vue'
//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入mint-ui
// import {Header, Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from 'mint-ui';
Vue.use(MintUI);
import 'mint-ui/lib/style.css';

//导入mui相关css
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入路由模块
import router from './router'

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//设置请求跟路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
//全局设置 post 表单的形式application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

//导入时间格式化插件
import moment from 'moment'

//定义时间的全局过滤器
Vue.filter('dateFormat',function (dateStr,pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(pattern)
})

import App from './App'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
