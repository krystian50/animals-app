<template>
  <BaseForm
    :error="isShowError ? error : ''"
    @submit="onSubmit()"
  >
    <label for="login">Login</label>

    <input
      v-model="login"
      type="text"
      name="login"
      @input="isShowError = false"
    >

    <label for="password">Password</label>

    <input
      v-model="password"
      type="password"
      name="password"
      @input="isShowError = false"
    >
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/BaseForm'

export default {
  name: 'LoginForm',

  components: {
    BaseForm
  },

  props: {
    error: {
      type: String,
      default: ''
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
