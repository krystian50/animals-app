<template>
  <article class="home">
    <h2>Animal list</h2>

    <span v-if="isLoading">...is loading</span>

    <BaseList
      v-else
      :list-items="animals"
    >
      <template v-slot:listItem="{ listItem }">
        <span>{{ listItem.name }}</span>
        <button
          v-if="userRole === 'admin'"
          @click="onRemoveAnimalSubmit(listItem.id)"
        >
          x
        </button>
      </template>
    </BaseList>

    <AnimalForm
      v-if="userRole === 'admin'"
      @submit="onAddAnimalSubmit"
    />
  </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BaseList from '@/components/BaseList'
import AnimalForm from '@/components/AnimalForm'

export default {
  name: 'Home',

  components: {
    BaseList,
    AnimalForm
  },

  computed: {
    ...mapGetters({
      animals: 'animals/animals',
      userRole: 'auth/userRole'
    }),

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
