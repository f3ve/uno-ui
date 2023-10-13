import { defineConfig, presetUno } from 'unocss';
import { presetUnoUI } from '@uno-ui/preset';

export default defineConfig({
  presets: [presetUno(), presetUnoUI()],
});
