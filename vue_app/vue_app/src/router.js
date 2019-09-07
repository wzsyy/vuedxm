import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
//1:引入自定义组件 Exam01.vue
import Exam01 from "./components/exam/Exam01.vue"
//2:引入自定义组件 Exam02.vue
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import Exam04 from "./components/exam/Exam04.vue"
import Exam05 from "./components/exam/Exam05.vue"
import Exam06 from "./components/exam/Exam06.vue"
import Exam07 from "./components/exam/Exam07.vue"
import Fa08 from "./components/exam/Fa08.vue"
import Fa09 from "./components/exam/Fa09.vue"
import A from "./components/exam/a.vue"
import B from "./components/exam/b.vue"

//微信消息项目
//(1)消息项目入口组件
import Home3 from "./components/message/Home.vue"
//(2)临时全局组件
import MessageList from "./components/message/common/MessageList.vue"
//学子商城
//(1)登录组件
import Login from "./components/xz/Login.vue"
//(2)商品列表 
import Product from "./components/xz/Product.vue"
//(3)购物车组件
import Cart from "./components/xz/Cart.vue"
Vue.use(Router)
export default new Router({
    routes: [
        { path: '/A', component: A },
        { path: '/B', component: B },
        { path: '/Cart', component: Cart },
        { path: '/Product', component: Product },
        { path: '/Login', component: Login },
        { path: '/MessageList', component: MessageList },
        { path: '/Home3', component: Home3 },
        { path: '/Fa09', component: Fa09 },
        { path: '/Fa08', component: Fa08 },
        { path: '/Exam07', component: Exam07 },
        { path: '/Exam06', component: Exam06 },
        { path: '/Exam05', component: Exam05 },
        { path: '/Exam04', component: Exam04 },
        { path: '/Exam03', component: Exam03 },
        { path: '/Exam01', component: Exam01 },
        { path: '/Exam02', component: Exam02 },
        { path: '/Home', component: Home },
        { path: '/', component: HelloContainer },
    ]
})