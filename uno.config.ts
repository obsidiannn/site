import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, transformerAttributifyJsx
} from 'unocss'

export default defineConfig({
  theme: {
   
  },
  rules:
  [
        [
          /^cc-bg-(\w+)-(\w+)-(png|jpg|gif)$/,
          ([, dir, fname, fext]) => ({
            'background-image': `url(src/assets/${dir}/${fname}.${fext})`
          })
        ]
      ],
  shortcuts: {
   // 这里可以放全局公共样式
    // 'h-btn': 'h-48px w-100% bg-#5C33BE b-none text-white rounded-8px'
  },
  safelist: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
})
