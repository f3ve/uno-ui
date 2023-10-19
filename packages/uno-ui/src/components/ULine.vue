<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';

const props = withDefaults(
  defineProps<{
    fullWidth?: boolean;
    height?: string | number;
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
    fullWidth: true,
    height: 2,
    type: 'default',
  },
);

const show = computed(() => props.fullWidth);

const className = computed(() => `u-line-${props.type}`);

const compHeight = computed(() =>
  typeof props.height === 'number' || !/(px|%|vh|rem|em|pt)$/.test(props.height)
    ? `${props.height}px`
    : props.height,
);
</script>
<template>
  <div
    class="u-line"
    :class="{
      'w-0': !show,
      'w-full': show,
      [className]: !!className,
    }"
    :style="{ height: compHeight }"
  ></div>
</template>
