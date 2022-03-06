import Mock from 'mockjs'

import banner from './banner.json'
import floor from './floor.json'

//参数1为参数请求的地址,参数二为请求数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})
