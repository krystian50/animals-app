<template functional>
  <section>
    <ul v-if="props.listItems.length">
      <li
        v-for="listItem in props.listItems"
        :key="listItem.id"
      >
        <slot
          name="listItem"
          :list-item="listItem"
        >
          {{ listItem }}
        </slot>
      </li>
    </ul>

    <span v-else>empty...</span>
  </section>
</template>
<script>
export default {
  name: 'BaseList',

  props: {
    listItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>
