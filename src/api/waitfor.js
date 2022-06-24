import http from '../../src/tools/http/http'
export const waitForList = (query) => http.GET('/api/managerApplication/pageList', query)
