import { defineConfig } from 'unocss';
import { presetUnoUI } from './src/uno-ui-presets';

export default defineConfig({
  presets: [presetUnoUI()],
});
