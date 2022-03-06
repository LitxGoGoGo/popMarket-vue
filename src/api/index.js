//当前模块:对API进行统一管理
import requests from './request'
import mockRequests from './mockAjax'
//三级联动接口
//'/api/product/getBaseCategoryList' get 无参数
//发送请求:返回的结果是一个Promise对象
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

//获取banner
export const reqGetBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')

//获取搜索数据,需要传递参数,回调在写的时候括号要加东西
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})

export const reqGoodsInfo = (skuId) => requests({url:`/item/${ skuId }`,method:'get'})

//更新购物车
export const reqAddOrUpdateShopCar = (skuId,skNum) => requests({url:`/cart/addToCart/${skuId}/${skNum}`,method:'post'})

//获取购物车信息
export const reqGetCarList = () =>  requests({url:'/cart/cartList',method:'get'})