import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      // cc-bg-login-login_bg-jpg --> /assets/login/login_bg.jpg
      rules:
        [
              [
                /^cc-bg-(\w+)-(\w+)-(png|jpg|gif)$/,
                ([, dir, fname, fext]) => ({
                  'background-image': `url(src/assets/${dir}/${fname}.${fext})`
                })
              ]
            ]
    }),
    react(),
  ],
})
