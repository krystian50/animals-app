import HttpClient from '@/services/HttpClient'

const parseJwt = (token) => {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''))

  return JSON.parse(jsonPayload)
}

export default {
  namespaced: true,
  state: () => ({
    user: null
  }),
  getters: {
    isLoggedIn: ({ user }) => !!user,
    userRole: ({ user }) => user.role
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    async login ({ commit, dispatch }, form) {
      const { data } = await HttpClient.post('/auth/login', form)

      localStorage.setItem('access_token', data.token)
      dispatch('setUser', data.token)
    },

    setUser ({ commit }, token) {
      const user = parseJwt(token)

      if (new Date(user.exp * 1000) < new Date()) {
        throw new Error('token is expired')
      }

      HttpClient.defaults.headers.common['Authorization'] = token

      commit('SET_USER', user)
    }
  }
}
