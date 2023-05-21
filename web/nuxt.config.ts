import {HmrOptions} from "vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/style.scss"],
  typescript: {
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/variables/_variables.scss" as *;'
        }
      }
    },
    server: {
      hmr: Object.fromEntries(Object.entries({
        host: process.env.HMR_HOST,
        protocol: process.env.HMR_PROTOCOL,
        path: process.env.HMR_PATH,
        port: undefined === process.env.HMR_PORT ? undefined : +process.env.HMR_PORT,
        clientPort: undefined === process.env.HMR_CLIENT_PORT ? undefined : +process.env.HMR_CLIENT_PORT,
      } as HmrOptions).filter(([_, value]) => value !== undefined))
    },
    plugins: [
      {
        name: 'clientHost',
        transform(code, id) {
          // https://github.com/vitejs/vite/issues/8666
          if (process.env.HMR_CLIENT_HOST && id.endsWith('dist/client/client.mjs')) {
            return code.replace('__HMR_HOSTNAME__', JSON.stringify(process.env.HMR_CLIENT_HOST))
          }
        }
      }
    ],
  },
});
