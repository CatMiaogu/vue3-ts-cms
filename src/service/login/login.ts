import axRequest from '../index'
import { IAccount } from './types'

export function accountLoginReq(accountInfo: IAccount) {
  return axRequest.post({ url: '/login', data: accountInfo })
}
