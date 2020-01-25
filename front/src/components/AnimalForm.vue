<template>
  <form @submit.prevent="onSubmit()">
    <div>
      <label
        for="name"
      >Animal Name</label>

      <input
        v-model="name"
        type="text"
        name="name"
        @input="isShowError = false"
      >

      <button type="submit">
        Submit
      </button>
    </div>

    <span
      v-if="isShowError && error"
      class="error-msg"
    > {{ error }}</span>
  </form>
</template>

<script>
export default {
  name: 'AnimalForm',

  props: {
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
<style lang="scss" scoped>
.error-msg {
  color: red;
}
</style>
