import Vue from 'vue'
import Vuex from 'vuex'

import onClientInit from './onClientInit'
import auth from './modules/auth'
import animals from './modules/animals'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    animals
  },
  plugins: [
    onClientInit
  ]
})
