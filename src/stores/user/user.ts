import { observable, makeObservable } from 'mobx'

export class UserStore {
  constructor() {
    makeObservable(this, {})
  }

  async request_phone_login(data: { phone: string; password: string }) {}

  async request_email_login(data: { email: string; password: string }) {}
}
