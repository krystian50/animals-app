<template>
  <BaseList
    :list-items="animals"
  >
    <template v-slot:listItem="{ listItem }">
      <span>{{ listItem.name }}</span>

      <button
        v-if="isRemovable"
        @click="$emit('remove', listItem.id)"
      >
        x
      </button>
    </template>
  </BaseList>
</template>
<script>
import BaseList from '@/components/BaseList'

export default {
  components: {
    BaseList
  },

  props: {
    animals: {
      type: Array,
      default: () => []
    },
    isRemovable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
