import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:"http://123.207.32.32:8000/api/m3",
    timeout:5000
  })
  // axios的q请求拦截器
  instance.interceptors.request.use(
    config =>{
      return config
    },
    err =>{

    }
  )
  // axios的响应拦截器
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err =>{
      console.log(err)
    }
  )

   // 3.传入对象进行网络请求，发送真正的网络请求
   return instance(config)
}