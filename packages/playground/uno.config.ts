import { defineConfig, presetUno } from 'unocss';
import { presetUnoUI } from 'uno-ui';
import { colors } from 'unocss/preset-mini';

export default defineConfig({
  theme: {
    colors: {
      primary: colors.red,
      accent: colors.blue,
    },
  },
  presets: [presetUno(), presetUnoUI()],
});
