import { v4 as uuidv4 } from 'uuid';
//生成一个随机的字符串而且每次执行不能发生变化,游客持久存储
export const getUUID = () => { 
  //先观察本地存储是否有uuid
  let uuid_token = localStorage.getItem('UUIDTOKEN')
  if (!uuid_token) { //类似单例设计模式
    uuid_token = uuidv4()
    //存到本地
    localStorage.setItem('UUIDTOKEN',uuid_token)
  }
  //返回值要有
  return uuid_token
}