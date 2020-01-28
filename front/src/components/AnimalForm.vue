<template>
  <BaseForm
    :error="isShowError ? error : ''"
    @submit="onSubmit()"
  >
    <label
      for="name"
    >Animal Name</label>

    <input
      v-model="name"
      type="text"
      name="name"
      @input="isShowError = false"
    >
  </BaseForm>
</template>

<script>
import BaseForm from './BaseForm'

export default {
  name: 'AnimalForm',

  components: {
    BaseForm
  },

  props: {
    // TODO: add error handling
    error: {
      type: String,
      default: ''
    },

    isLoading: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    name: '',
    isShowError: false
  }),

  methods: {
    onSubmit () {
      this.$emit('submit', { name: this.name })
      this.isShowError = true
    }
  }
}
</script>
