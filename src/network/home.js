// 封装首页的所有请求
// 首页直接面向home.js开发，home.js为首页提供所有想要数据的函数

import {request} from './request'
// 获取首页多数据
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
// 获取首页商品信息
// 参数type:数据的类别“流行”，“精选”，“新款”
// 参数page:获取哪个页面的data
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}