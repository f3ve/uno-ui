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
  props.type === 'default' ? `bg-gray` : `bg-${props.type}-600`,
);
</script>

<template>
  <button class="rounded px-4 py-2" :class="className">
    <slot />
  </button>
</template>
