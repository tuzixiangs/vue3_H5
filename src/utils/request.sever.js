import service from './request'

export const get = (url, data) => {
  return service({
    url,
    method: 'get',
    params: data
  })
}

export const post = (url, data) => {
  return service({
    url,
    method: 'post',
    data: data
  })
}

export const put = (url, data) => {
  return service({
    url,
    method: 'put',
    data: data
  })
}

export const deletes = (url, data) => {
  return service({
    url,
    method: 'delete',
    data: data
  })
}
