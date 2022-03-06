import { reqGetSearchInfo } from '@/api/index'

//search模块的仓库
const state = {
  searchList:{}
}
const mutations = {
  GETSEARCHLIST(state,searchList){
    state.searchList = searchList
  }
}
const actions = {
  async getSearchList({ commit }, params) {
    //params是由用户派发action的时候,第二个参数传来的
    let res = await reqGetSearchInfo(params)
    if (res.code === 200) {
      commit("GETSEARCHLIST",res.data)
    }
  }
}
//计算属性
//为了简化数据而生 getters
const getters = {
  goodList(state){
    return state.searchList.goodsList || {}
  },
  trademarkList(state){
    return state.searchList.trademarkList
  },
  attrsList(state){
    return state.searchList.attrsList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}