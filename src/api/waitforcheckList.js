import http from '../tools/http/http'
export const waitForList = (query) => http.GET('/api/managerApplication/pageList', query)
export const checkedList = (query) => http.GET('/api/managerApplication/checkedPageList', query)
export const batchApproveApp = (query) => http.POST('/api/managerApplication/submitsApprove', query)
export const batchDisApproveApp = (query) => http.POST('/api/managerApplication/submitsDisApprove', query)
