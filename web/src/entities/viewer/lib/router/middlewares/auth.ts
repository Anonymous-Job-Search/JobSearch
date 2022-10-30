import type {NavigationGuardWithThis, NavigationHookAfter, RouteLocationNormalized} from "vue-router";

// NavigationGuardWithThis
export const useBeforeEachAuthMiddleware = (guard: RouteLocationNormalized) => {
  if (guard.meta in AUTH) {
    // TODO check store
  }
}
