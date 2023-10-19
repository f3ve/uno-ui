<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';
import ULine from './ULine.vue';

const props = withDefaults(
  defineProps<{
    /**
     * Changes the color of the button
     * @default 'default'
     */
    type?:
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'error'
      | 'success'
      | 'warning'
      | 'info'
      | 'default';

    /**
     * Specifies the appearance of the button
     * @default 'flat'
     */
    variant: 'flat' | 'underlined';
  }>(),
  {
    type: 'default',
    variant: 'flat',
  },
);

const btnClassName = computed(() => {
  switch (props.variant) {
    case 'flat':
      return `u-btn-${props.type} u-btn`;
    case 'underlined':
      return 'u-btn-underlined';
  }
});
</script>

<template>
  <div></div>
  <button :class="btnClassName">
    <slot />
    <u-line v-if="variant === 'underlined'" full-width :type="type" />
  </button>
</template>
