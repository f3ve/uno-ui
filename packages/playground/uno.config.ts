import { defineConfig, presetUno } from 'unocss';
import { presetUnoUI, generateVariants } from 'uno-ui';
import { colors } from 'unocss/preset-mini';

export default defineConfig({
  theme: {
    colors: {
      primary: generateVariants('#00c988'),
      accent: colors.blue,
    },
  },
  presets: [presetUno(), presetUnoUI()],
});
