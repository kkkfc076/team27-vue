import http from '../tools/http/http'
// 分页查询所有管理员
export const manList = (query) => http.GET('/api/manager/getManlist', query)
