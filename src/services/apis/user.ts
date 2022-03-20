import { BASE_PATH } from '@/services/config'
import { request } from '@/services/request'

export class UserRequest {
  static request_login(data: { phone: string; password: string }) {
    return request(BASE_PATH + '/login', 'GET', data, { showloading: true })
  }
}
