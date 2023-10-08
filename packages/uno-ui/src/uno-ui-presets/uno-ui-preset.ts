import { definePreset } from '@unocss/core';
import type { PresetMiniOptions } from '@unocss/preset-mini';
import { presetUno } from 'unocss';

export interface PresetUnoUiOptions extends PresetMiniOptions {}

export const presetUnoUI = definePreset((options: PresetUnoUiOptions = {}) => {
  const uno = presetUno(options);
  return {
    ...uno,
    name: 'preset-uno-ui',
    variants: [...uno.variants!],
  };
});
