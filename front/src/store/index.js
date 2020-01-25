import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import animals from './animals'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    animals
  },
  plugins: [
    store => {
      const token = localStorage.getItem('access_token')

      if (!token) {
        return
      }

      store.dispatch('auth/setUser', token)
    }
  ]
})
