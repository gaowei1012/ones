import { BASE_PATH } from '@/services/config'
import { request } from '@/services/request'

export class UserRequest {
  // 手机号码登录
  static request_phone_login(data: { phone: string; password: string }) {
    return request(
      BASE_PATH + `/login/cellphone?phone=${data.phone}&password=${data.password}`,
      'GET',
      {},
      { showloading: true }
    )
  }

  // 邮箱登录
  static request_email_login(data: { email: string; password: string }) {
    return request(
      BASE_PATH + `/login?email=${data.email}&password=${data.password}`,
      'GET',
      {},
      { showloading: true }
    )
  }

  // 获取登录状态
  static request_login_status() {
    return request(BASE_PATH + '/login/status', 'GET', {}, { showloading: true })
  }

  // 刷新登录
  static login_refresh() {
    return request(BASE_PATH + '/login/refresh', 'GET', {}, { showloading: true })
  }

  // 检查手机号是都已注册
  static request_check(phone: string, countrycode: number | 86) {
    return request(
      BASE_PATH + `/cellphone/existence/check?phone=${phone}&countrycode=${countrycode}`,
      'GET',
      {},
      { showloading: true }
    )
  }

  // 退出登录
  static request_logout() {
    return request(BASE_PATH + '/logout', 'POST', {}, { showloading: true })
  }

  // 获取用户信息
  static request_user_detail(uid: string) {
    return request(BASE_PATH + `/user/detail?uid=${uid}`, 'GET', {}, { showloading: true })
  }

  // 获取用户等级
  static request_user_level() {
    return request(BASE_PATH + '/user/level', 'GET', {}, { showloading: true })
  }
}
