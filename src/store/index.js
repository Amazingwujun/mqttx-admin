import Vue from 'vue'
import Vuex from 'vuex'
import cookies from 'js-cookie'

Vue.use(Vuex)

const CACHE_USER = 'mqttx-admin-user'

const user = {
  mobile: '',
  nickname: '',
  avatar: '',
  token: '',
  roles: []
}

const state = {
  user,
  isCollapse: false
}

const getters = {
  /**
   * 用于判断用户是否登陆
   *
   * @param {*} state
   */
  isSignIn (state) {
    if (state.user.mobile && state.user.mobile.length > 0) {
      return true
    } else {
      // state 中不存在用户信息，从 cookie 再取一次
      let userStr = cookies.get(CACHE_USER)
      console.log('cookies user：' + userStr)
      if (!userStr) {
        return false
      }

      // 将数据赋予 state, 并返回 true
      let user = JSON.parse(userStr)
      state.user = {...user}
      return true
    }
  }
}

const mutations = {

  /**
   * 这里要求 userInfo 与 user 的字段一致
   *
   * @param {*} state
   * @param {用户信息} userInfo
   */
  signIn (state, userInfo) {
    state.user = {...userInfo}
    cookies.set(CACHE_USER, state.user)
  },

  signOut (state) {
    state.user = user
    cookies.remove(CACHE_USER)
  },

  collapse (state) {
    state.isCollapse = !state.isCollapse
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store
