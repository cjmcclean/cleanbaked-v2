module.exports = {
  pwa: {
    name: 'Clean Baked Studios',
    themeColor: '#191c26',
    msTileColor: '#191c26'
  },

  lintOnSave: undefined,
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
  },
  chainWebpack: config => {
    config.module
      .rule('url-loader')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10000,
        name: 'fonts/[name].[ext]?[hash]'
      })
  }
}
