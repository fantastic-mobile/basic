export default {
  plugins: {
    'postcss-mobile-forever': {
      viewportWidth: 375,
      maxDisplayWidth: 600,
      border: true,
      rootContainingBlockSelectorList: [
        'van-popup',
      ],
    },
    'autoprefixer': {},
  },
}
