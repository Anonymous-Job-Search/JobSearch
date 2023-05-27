import { HmrOptions } from 'vite'

const toNumberOrUndefined = (value: string | undefined) =>
  undefined === value ? undefined : +value

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['normalize.css', '@/assets/style.scss'],
  typescript: {
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/variables/_variables.scss";
          `,
        },
      },
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
    plugins: [
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
  },
  modules: ['@element-plus/nuxt', '@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  eslint: {
    lintOnStart: false,
  },
  stylelint: {
    lintOnStart: false,
  },
  elementPlus: {
    components: [
      'ElForm',
      'ElFormItem',
      'ELInput',
      'ElSelect',
      'ElOption',
      'ElCol',
      'ElTimePicker',
      'ElSwitch',
      'ElCheckBox',
      'ElRadio',
      'ElRadioGroup',
      'ElButton',
    ],
  },
})