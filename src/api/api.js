import http from '../tools/http/http'

export const getBatch = () => http.GET('/api/manager/getBatch')
