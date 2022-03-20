import { observable, makeObservable } from 'mobx'

export class UserStore {
  constructor() {
    makeObservable(this, {})
  }

  async request_login(data: { phone: string; password: string }) {}
}
