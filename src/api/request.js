// 对axios进行二次封装
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'; //start:进度条开始; done:进度条结束;
//引入进度条样式
import "nprogress/nprogress.css"
//引入store里面的数据
import store from '@/store'
const requests = axios.create({
  // 基础路径,可以手动省略写/api
  baseURL:'/api',
  //代表请求超时的事件
  timeout:5000,
})
//请求拦截器,在发送请求之前可以做一些事情
requests.interceptors.request.use((config) => {
  // 拿到用户的uuid加到请求头
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  //config是配置对象,其中请求头的属性很重要
  //进度条开始
  nprogress.start();
  return config
})
//响应拦截器
requests.interceptors.response.use((res) => {
  //进度条结束
  nprogress.done();
  return res.data
},(error) => {
  //响应失败的回调函数
  return Promis.reject(new Error('faile'))
});

export default requests;