import HttpClient from '@/services/HttpClient'

export default {
  namespaced: true,
  state: () => ({
    animals: null
  }),
  getters: {
    animals: ({ animals }) => animals
  },
  mutations: {
    SET_ANIMALS (state, animals) {
      state.animals = animals
    }
  },
  actions: {
    async getAnimals ({ commit }) {
      const { data } = await HttpClient.get('/animals')

      commit('SET_ANIMALS', data)
    },
    addAnimal ({ commit }, form) {
      return HttpClient.post('/animals', form)
    },
    removeAnimal ({ commit }, id) {
      return HttpClient.delete(`/animals/${id}`)
    }
  }
}
