import http from '../tools/http/http'

export const getBatch = () => http.GET('/api/manager/getBatch')
export const appExport = () => http.EXPORT('/api/applicationform/export')


export const getCurBatch = () => http.GET('/api/batch/getBatch')

export const prolongBatch =(batch)=> http.POST('/api/batch/updateBatch',batch)
