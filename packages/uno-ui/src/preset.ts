import { definePreset } from '@unocss/core';
import { type PresetUnoOptions, presetUno } from '@unocss/preset-uno';

export const presetUnoUI = definePreset((options: PresetUnoOptions = {}) => {
  const uno = presetUno(options);
  return {
    ...uno,
    name: 'preset-uno-ui',
    variants: [...uno.variants!],
  };
});
