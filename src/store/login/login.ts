import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'

import { accountLoginReq } from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginReq(payload)
      console.log(loginResult)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行 phoneLoginAction')
    }
  }
}

export default loginModule
