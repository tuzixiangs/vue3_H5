import service from './request'

//请求方法封装 根据项目情况选择是否使用qs序列化数据

export const get = ({ url, data }) => {
  return service({
    url,
    method: 'get',
    params: data,
  })
}

export const post = ({ url, data }) => {
  return service({
    url,
    method: 'post',
    data: data,
  })
}

export const put = ({ url, data }) => {
  return service({
    url,
    method: 'put',
    data: data,
  })
}

export const deletes = ({ url, data }) => {
  return service({
    url,
    method: 'delete',
    data: data,
  })
}
