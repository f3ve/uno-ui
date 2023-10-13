import { URL, fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'UnoUiPreset',
      fileName: 'uno-ui-preset',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['unocss'],
      output: {
        globals: {
          unocss: 'Unocss',
        },
      },
    },
  },

  plugins: [dts()],
});
