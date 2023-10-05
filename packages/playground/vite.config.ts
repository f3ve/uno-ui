import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';

import generateSitemap from 'vite-ssg-sitemap';

import 'vite-ssg';

export default defineConfig({
  optimizeDeps: {
    entries: ['./src/**/*.vue'],
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
    onFinished() {
      generateSitemap({
        readable: true,
        hostname: 'https://freedomevenden.com',
      });
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    AutoImport({
      imports: [
        'vue',
        {
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'useRouter',
            'useRoute',
          ],
        },
      ],
      dirs: ['src/core/composables', 'src/store'],
      vueTemplate: true,
    }),

    Components({
      dirs: ['src/core/components', 'src/pages/**/components/**'],
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    Pages({
      exclude: ['**/components/**'],
      extensions: ['vue'],
    }),
  ],
});
