import http from '../tools/http/http'
// 登录
export const login = (student) => http.POST('/api/student/login', student)
export const tlogin = (manager) => http.POST('/api/manager/mlogin', manager)
