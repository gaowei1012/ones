import config from '@/config/const'
let base_domain: any

base_domain = 'http://' + config.dataServerDev.host

export const BASE_PATH = base_domain + ':' + config.dataServerDev.port

//
