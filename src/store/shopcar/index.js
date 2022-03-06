import { reqGetCarList } from '@/api/index'

const state = {
  carList: []
}
const mutations = {
  GETCARLIST(state, carList) {
    state.carList = carList
  }
}
const actions = {
  async getCarlist({ commit }) { //获取购物车数据
    let result = await reqGetCarList() //result已经有了
    if (result.code == 200) {
      commit('GETCARLIST', result.data)
    }
  }
}
const getters = {
  cartList(state) {
    //这里有个逻辑,可能没有从数据库拿到数据,拿到的undefined,所以不能一开始在这里找后面的东西
    return state.carList[0] || {}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
