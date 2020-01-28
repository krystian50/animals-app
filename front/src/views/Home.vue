<template>
  <article class="home">
    <h2>Animal list</h2>

    <span v-if="isLoading">...is loading</span>

    <AnimalList
      v-else
      :is-removable="isAdmin"
      :animals="animals"
      @remove="onRemoveAnimalSubmit"
    />

    <AnimalForm
      v-if="isAdmin"
      @submit="onAddAnimalSubmit"
    />
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AnimalList from '@/components/AnimalList'

export default {
  name: 'Home',

  components: {
    AnimalList,
    AnimalForm: () => import(/* webpackChunkName: "AnimalForm" */ '@/components/AnimalForm.vue')
  },

  computed: {
    ...mapGetters({
      animals: 'animals/animals',
      userRole: 'auth/userRole'
    }),

    isAdmin () {
      return this.userRole === 'admin'
    },

    isLoading () {
      return this.animals === null
    }
  },

  created () {
    this.getAnimals()
  },

  methods: {
    ...mapActions({
      getAnimals: 'animals/getAnimals',
      addAnimal: 'animals/addAnimal',
      removeAnimal: 'animals/removeAnimal'
    }),
    async onAddAnimalSubmit (form) {
      await this.addAnimal(form)
      this.getAnimals()
    },
    async onRemoveAnimalSubmit (id) {
      await this.removeAnimal(id)
      this.getAnimals()
    }
  }
}
</script>
