import axios from 'axios'
import { BASE_URL } from './config'

const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  // easy-mock服务挂了，暂时不使用了
  baseURL: BASE_URL,
  timeout: 1000 * 30,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded'
    // 'Content-Type': 'application/json'
  }
})

service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = localStorage.getItem('token') ?? ''

    return config
  },
  error => {
    console.log(error)
    return Promise.reject()
  }
)
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.code == 401) {
        localStorage.removeItem('token')
        ElMessage.error('登录已过期,请关闭窗口重新进入')
      }
      return response.data
    } else {
      Promise.reject()
    }
  },
  error => {
    console.log(error)
    return Promise.reject()
  }
)

export default service
