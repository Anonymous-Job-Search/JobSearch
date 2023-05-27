import { fileURLToPath, URL } from 'node:url'
import { defineConfig, HmrOptions } from 'vite'
import vue from '@vitejs/plugin-vue'

const toNumberOrUndefined = (value: string | undefined) =>
  undefined === value ? undefined : +value

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'clientHost',
      transform(code, id) {
        // https://github.com/vitejs/vite/issues/8666
        if (process.env.HMR_CLIENT_HOST && id.endsWith('dist/client/client.mjs')) {
          return code.replace('__HMR_HOSTNAME__', JSON.stringify(process.env.HMR_CLIENT_HOST))
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    hmr: Object.fromEntries(
      Object.entries({
        host: process.env.HMR_HOST,
        protocol: process.env.HMR_PROTOCOL,
        path: process.env.HMR_PATH,
        port: toNumberOrUndefined(process.env.HMR_PORT),
        clientPort: toNumberOrUndefined(process.env.HMR_CLIENT_PORT),
      } as HmrOptions).filter(([_, value]) => value !== undefined)
    ),
  },
})
