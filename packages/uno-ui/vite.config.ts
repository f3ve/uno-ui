import { URL, fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  optimizeDeps: {
    entries: ['./src/**/*.vue'],
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UnocssComponents',
      fileName: 'unocss-components',
    },
    rollupOptions: {
      external: ['vue', 'unocss'],
      output: {
        globals: {
          vue: 'Vue',
          unocss: 'Unocss',
        },
      },
    },
  },

  plugins: [
    vue(),
    dts({ rollupTypes: true }),
    UnoCSS({ configFile: './uno.config.ts' }),
  ],
});
