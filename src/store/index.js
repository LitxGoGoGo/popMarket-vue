import Vue from 'vue';
import Vuex from 'vuex';
//使用插件Vuex
Vue.use(Vuex);
//导入模块化仓库
import home from './home';
import search from './search';
import detail from './detail'
import shopcar from './shopcar'
import user from './user'
//对外暴露Store类的一个属性
export default new Vuex.Store({
  modules:{
    home,
    search,
    detail,
    shopcar,
    user
  }
})