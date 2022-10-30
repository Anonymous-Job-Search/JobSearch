import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './providers';
import App from './ui.vue';

export const app = createApp(App).use(router).use(createPinia);
