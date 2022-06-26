import http from '../tools/http/http'
// 分页查询所有管理员
export const manList = (query) => http.GET('/api/manager/getManlist', query)
// 批量授权
export const setPermissions = (query) => http.POST('/api/manager/setPermission', query)
