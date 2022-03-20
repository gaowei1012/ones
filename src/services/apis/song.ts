import { BASE_PATH } from '@/services/config'
import { request } from '@/services/request'

export class SongRequst {
  // 获取用户歌单
  static request_user_playlist(uid: number) {
    return request(BASE_PATH + `/user/playlist?uid=${uid}`, 'GET', {}, { showloading: true })
  }

  static update_user_playlist(id: number, name: string, desc: string, tags: string) {
    // return request()
  }
}
