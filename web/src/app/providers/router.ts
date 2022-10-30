import { createRouter, createWebHistory } from 'vue-router';
import { useBeforeEachAuthMiddleware } from "@/entities/viewer/lib/router/middlewares";
import { routes } from "@/shared/lib/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(guard => {
  useBeforeEachAuthMiddleware(guard)
})

export {router}
