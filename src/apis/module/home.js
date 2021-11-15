import { get, post, put, deletes } from '@/utils/request.sever'

/**
 * @data 要传输的数据
 *
 **/
export const login = (data) => {
  return get({ url: `/login`, data })
}
