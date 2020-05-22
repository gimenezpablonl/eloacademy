import axios from 'axios'

export const state = () => ({
  status: '',
  token: '',
  user: {},
})

export const mutations = {
  update(state, { token, user }) {
    state.token = token
    state.user = user
  },
  auth_request(state) {
    state.status = 'loading'
  },
  auth_success(state, { token, user }) {
    state.status = 'success'
    state.token = token
    state.user = user
  },
  auth_error(state) {
    state.status = 'error'
  },
  logout(state) {
    state.status = ''
    state.token = ''
  },
}

export const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios
        .post('/auth/signin', user)
        .then((resp) => {
          const token = resp.data.token
          const user = resp.data.userToken
          if (process.browser) {
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
          }
          axios.defaults.headers.common.Authorization = token
          commit('auth_success', { token, user })
          resolve(resp)
        })
        .catch((err) => {
          commit('auth_error')
          if (process.browser) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
          }
          reject(err)
        })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout')
      if (process.browser) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      }
      delete axios.defaults.headers.common.Authorization
      resolve()
    })
  },
}

export const getters = {
  isLoggedIn: (state) => !!state.token,
  authStatus: (state) => state.status,
}
