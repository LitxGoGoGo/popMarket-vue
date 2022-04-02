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

//获取验证码
export const reqGetCode = (phone) => requests({url:`/api/user/passport/sendCode/${phone}`,method:'get'})

//注册
//url:/api/user/passport/register  method:post    phone code password

export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'});

//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data)=>requests({url:'/user/passport/login',data,method:'post'});

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo  method:get 
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});


//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = ()=> requests({url:'/user/passport/logout',method:'get'});