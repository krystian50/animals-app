<template>
  <form @submit.prevent="onSubmit()">
    <div>
      <label for="login">Login</label>

      <input
        v-model="login"
        type="text"
        name="login"
        @input="isShowError = false"
      >

      <label for="password">Login</label>

      <input
        v-model="password"
        type="password"
        name="password"
        @input="isShowError = false"
      >

      <button type="submit">
        Login
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
  name: 'LoginForm',

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
    login: '',
    password: '',
    isShowError: false
  }),

  methods: {
    onSubmit () {
      this.$emit('submit', { login: this.login, password: this.password })
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
