import { BASE_PATH } from '@/services/config'
import { request } from '@/services/request'

export class SongRequst {
  // 获取用户歌单
  static request_user_playlist(uid: number) {
    return request(BASE_PATH + `/user/playlist?uid=${uid}`, 'GET', {}, { showloading: true })
  }

  // 更新歌单
  static update_user_playlist(id: number, name: string, desc: string, tags: string) {
    return request(
      BASE_PATH + `/playlist/update?id=${id}&name=${name}&desc=${desc}&tags=${tags}`,
      'GET',
      {},
      { showloading: true }
    )
  }

  // 更新歌单描述
  static update_playlist_desc(id: number, desc: string) {
    return request(
      BASE_PATH + `/playlist/desc/update?id=${id}&desc=${desc}`,
      'GET',
      {},
      { showloading: true }
    )
  }

  // 获取音乐url
  static request_song(id: string) {
    return request(BASE_PATH + `/check/url?id=${id}`, 'GET', {}, { showloading: true })
  }

  // 检查歌曲是否可用
  static check_music(id: string) {
    return request(BASE_PATH + `/check/music?id=${id}`, 'GET', {}, { showloading: true })
  }
}
