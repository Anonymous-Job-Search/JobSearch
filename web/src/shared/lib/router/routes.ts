import {PageMain} from "@/pages/main";
import {PageSignUp} from "@/pages/signup";
import type {RouteRecordRaw} from "vue-router";
import type {AUTH} from "@/shared/lib/router/types";

export default [
  { path: '/', component: PageMain },
  { path: '/signup', component: PageSignUp },
] as Readonly<RouteRecordRaw[]>
