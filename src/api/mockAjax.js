// 对axios进行二次封装
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'; //start:进度条开始; done:进度条结束;
//引入进度条样式
import "nprogress/nprogress.css"

const requests = axios.create({
  // 基础路径,可以手动省略写/mock
  baseURL:'/mock',
  //代表请求超时的事件
  timeout:5000,
})
//请求拦截器,在发送请求之前可以做一些事情
requests.interceptors.request.use((config) => {
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