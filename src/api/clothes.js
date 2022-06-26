import http from '../tools/http/http'
// 新建款式
export const addClothes = (clothes) => http.POST('/api/clothes/addClothes', clothes)

// 获取寒衣
export const cloList = (query) => http.GET('/api/clothes/getClolist', query)

// 学生获取寒衣
export const getInfo = (query) => http.GET('/api/clothes/styles', query)
