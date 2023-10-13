<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';

const props = withDefaults(
  defineProps<{
    type?:
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'error'
      | 'success'
      | 'warning'
      | 'info'
      | 'default';
  }>(),
  {
    type: 'default',
  },
);

const className = computed(() =>
  props.type === 'default'
    ? `bg-gray-500 hover:bg-gray-400`
    : `bg-${props.type}-500 hover:bg-${props.type}-400 `,
);
</script>

<template>
  <button
    class="text-white rounded px-4 py-2 transition-colors"
    :class="className"
  >
    <slot />
  </button>
</template>
