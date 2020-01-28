<template functional>
  <form @submit.prevent="listeners['submit']()">
    <div>
      <slot />

      <button type="submit">
        Submit
      </button>
    </div>

    <span
      v-if="props.error"
      class="error-msg"
    > {{ props.error }}</span>
  </form>
</template>

<script>
export default {
  name: 'AnimalForm',

  props: {
    error: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.error-msg {
  color: red;
}
</style>
