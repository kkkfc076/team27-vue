import http from '../tools/http/http'
// 新建款式
export const addClothes = (clothes) => http.POST('/api/clothes/addClothes', clothes)

// 获取寒衣
export const cloList = (query) => http.GET('/api/clothes/getClolist', query)

// 学生获取寒衣
export const getStyle = (query) => http.GET('/api/clothes/styles', query)

// 删除单件款式
export const deleteClothes = (clothes) => http.POST('/api/clothes/deleteClothes', clothes)

// 编辑款式
export const clothesUpdate = (clothes) => http.POST('/api/clothes/update', clothes)
// 获取寒衣尺码
export const getSize = (clothes) => http.GET('/api/clothes/styleStatistics', clothes)
