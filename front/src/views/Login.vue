<template>
  <div class="login">
    <h1>Please login</h1>
    <LoginForm
      :error="error"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LoginForm from '@/components/LoginForm'

export default {
  components: {
    LoginForm
  },

  data: () => ({
    error: ''
  }),

  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    async onSubmit (form) {
      try {
        this.error = ''

        await this.login(form)

        this.$router.push({ path: this.$route.query.redirect })
      } catch (error) {
        this.error = 'An error occured'
      }
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.isLoggedIn) {
        vm.$router.push({ name: 'home' })
      }
    })
  }
}
</script>
