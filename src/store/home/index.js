//引入请求函数
import { reqCategoryList, reqGetBannerList ,reqGetFloorList } from '@/api';
//home模块的仓库
const state = {
  //构建state中的默认初始值,服务器返回的数据类型和初始值相同为最佳
  categoryList: [],
  //轮播图数据
  bannerList: [],
  //楼层列表数据
  floorList:[]
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  FLOORLIST(state ,floorList){
    state.floorList = floorList
  }
}
const actions = {
  async getCategoryList({ commit }) {
    let res = await reqCategoryList()
    if (res.code === 200) {
      commit('CATEGORYLIST', res.data)
    }
  },
  //获取轮播图的数据
  async getBannerList({ commit }) {
    let res = await reqGetBannerList()
    if (res.code === 200) {
      commit('BANNERLIST', res.data)
    }
  },
  //获取楼层floor列表数据
  async getGetFloorList({ commit }){
    let res = await reqGetFloorList()
    if (res.code === 200) {
      commit('FLOORLIST', res.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
