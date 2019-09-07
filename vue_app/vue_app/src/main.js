import Vue from 'vue'
import App from './App.vue'
import router from './router'
//删除 line 5~ line 16
//1:引入第三方组件库 mint-ui
//1.1 完成引入所有组件
import MintUI from "mint-ui"
//1.2 单引入mint-ui样式文件
import "mint-ui/lib/style.css"
//1.3 将mint-ui 注册vue
Vue.use(MintUI)
    //1.4:引入图标字体文件 
import "./font/iconfont.css"
//main.js 配置axios
//1.5:引入axios库
import axios from "axios"
//1.6:配置请求时保存session信息 
axios.defaults.withCredentials = true
    //1.7:配置请求基础路径
axios.defaults.baseURL = "http://127.0.0.1:8080/"
    //注意:地址栏请输必须!!!!!!!!!
    //http://127.0.0.1:8080/!!!!
    //如果地址  http://localhost 报错
    //1.8:注册
Vue.prototype.axios = axios;
//功能：使用Vuex保存共享数据
//1.9：引入第三方的模块
import Vuex from "vuex"
//1.10：注册实例（先注册后创建存储对象）
Vue.use(Vuex)
    //1.11：创建存储对象
var store = new Vuex.Store({
        state: { //集中管理数据的方法
            age: 23,
            list: [1, 2, 3, 5, 6]
        },
        getters: { //集中获取数据函数
            getAge(state) { //特殊：所有的函数都有参数
                return state.age;
            },
            getlist(state) { //特殊：所有的函数都有参数
                return state.list;
            }
        },
        mutations: {
            clear(state) {
                state.age = 0
            },
            updateage(state) {
                state.age = "80"
            },
        },
        actions: { //集中保存异步修改数据函数
            modifyAge: (context) => { //异步调用clear
                //异步调用mutations中定义函数
                //完成异步修改数据功能
                setTimeout(() => {
                    context.commit("clear")
                }, 2000)

            }
        }
    })
    //1.12：将存储对象添加到vue实例作为属性
new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')