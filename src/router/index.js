//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter)
//引入路由配置信息
import routes from './routes'

//先备份vue-router里面的原生push方法
let originPush = VueRouter.prototype.push;

//重写push|replace
//第一个参数,告诉原来的push方法,往哪里跳转(传递的参数)
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve, reject) {
    //call和apply的区别
    //相同点,都可以调用函数一次,都可以纂改函数的上下文一次
    //不同点,call传递参数用逗号隔开,apply方式立即执行并且传递数组
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
//配置路由
export default new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置,y代表滚动条最上方
    return {x:0,y:0}
  }
})