import axios from 'axios'
import { BASE_URL } from 'common/config'

const service = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 30,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'application/json'
  },
})

service.interceptors.request.use(
  (config) => {
    // 添加token
    config.headers['Authorization'] = localStorage.getItem('token') ?? ''

    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  },
)
service.interceptors.response.use(
  (response) => {
    // 根据项目实际需求修改
    if (response.status === 200) {
      return response.data
    } else {
      Promise.reject()
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  },
)

export default service
