import {reqGoodsInfo,reqAddOrUpdateShopCar} from '@/api'
//封装游客临时身份的模块uuid
import {getUUID} from '@/utils/uuid_token'
const state = {
  goodInfo:{},
  //游客临时身份存在仓库中
  uuid_token:getUUID()
}
const mutations = {
  GETGOODSINFO(state,goodInfo){
    state.goodInfo = goodInfo
  }
}
const actions = {
  async getGoodInfo({commit},skuid){
    let res = await reqGoodsInfo(skuid)
    if (res.code == 200) {
      commit('GETGOODSINFO',res.data)
    }
  },
  async addOrUpdateShopCar({commit},{skuId,skuNum}){ //async函数返回值是promise
    //加入购物车返回的结果
    let result = await reqAddOrUpdateShopCar(skuId,skuNum)
    if (result.code == 200) {
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {
  categoryView(state){
    return state.goodInfo.categoryView || {} //为了不让返回一个undefinde,让他至少是一个空对象
  },
  skuInfo(state){
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}