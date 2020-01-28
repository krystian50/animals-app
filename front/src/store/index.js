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

      try {
        store.dispatch('auth/setUser', token)
      } catch (error) {
        alert('Session expired. You are logout')

        localStorage.removeItem('access_token')
      }
    }
  ]
})
