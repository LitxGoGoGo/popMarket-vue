import Vue from 'vue'
import App from './App.vue'
// 三级联动组件注册为全局组件
import TypeNav from '@/components/TypeNav'
//注册轮播图全局组件
import Carousel from '@/components/Carousel'
//注册分页条作为全局组件
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name, Pagination)
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
//引入路由
import router from '@/router'
//引入Vuex仓库
import store from '@/store';
//引入Mockjs进来执行一次
import "@/mock/mockServe"
//引入swiper样式
import 'swiper/css/swiper.css'

//关闭生产提示
Vue.config.productionTip = false

//路由方法调用测试

new Vue({
  render: h => h(App),
  //全局总线配置
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  //注册路由
  //注册路由信息,这一步让所有的组件原型对象上有$router和$route属性
  router,
  //注册仓库:组件实例的身上会多出$store
  store
}).$mount('#app')