import http from '../tools/http/http'

export const getBatch = () => http.GET('/api/manager/getBatch')
export const appExport = () => http.EXPORT('/api/applicationform/export')

export const getCurBatch = () => http.GET('/api/batch/getBatch')

export const prolongBatch = (batch) => http.POST('/api/batch/updateBatch', batch)
// 申请总览
export const applyStatistics = () => http.GET('/api/applicationform/applyStatistics')
// 款式总览
export const cloStatistics = () => http.GET('/api/clothes/cloStatistics')
