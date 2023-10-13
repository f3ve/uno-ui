import '@unocss/reset/tailwind.css';
import 'uno-ui/dist/style.css';
import 'uno.css';

import App from './App.vue';
import { ViteSSG } from 'vite-ssg';
import routes from '~pages';

export const createApp = ViteSSG(App, {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && !to.hash) {
      savedPosition.behavior = 'instant';
      return savedPosition;
    }

    if (!to.hash) {
      return { top: 0, behavior: 'smooth' };
    }
  },
  routes,
});
