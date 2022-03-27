/*
 * @Author: mingwei
 * @Date: 2022-03-21 09:17:26
 * @LastEditors: mingwei
 * @LastEditTime: 2022-03-27 22:49:20
 * @FilePath: /ones/src/services/config.ts
 * @Description: API路由配置
 */
import Config from 'react-native-config'
let base_domain: any

if (Config.MODE == 'development') {
  base_domain = 'http://' + Config.BASE_URL + ':' + Config.PORT
} else if (Config.MODE == 'production') {
  base_domain = 'http://' + Config.BASE_URL + ':' + Config.PORT
} else if (Config.MODE == 'test') {
  base_domain = 'http://' + Config.BASE_URL
}

export const BASE_PATH = base_domain
