module.exports = {
  pwa: {
    name: 'Clean Baked Studios',
    themeColor: '#191c26',
    msTileColor: '#191c26'
  },
  lintOnSave: true,
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: 'assets',
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/css/variables.scss";
          @import "@/assets/css/fonts.scss";
        `
      }
    }
  }
}
