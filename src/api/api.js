import http from '../tools/http/http'

export const getBatch = () => http.GET('/api/manager/getBatch')
export const appExport = () => http.EXPORT('/api/applicationform/export')
