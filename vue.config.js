const path = require("path")
module.exports = {
  publicPath: "/goodluck-ui/", // 打包至github pages，需要设置为仓库名
  outputDir: "docs", // 打包文件名
  // 修改 pages 入口
  pages: {
    index: {
      entry: "examples/main.ts", // 入口
      template: "public/index.html", // 模板
      filename: "index.html" // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @默认指向src目录，改成examples,并新增~指向packages
    config.resolve.alias.set("@", path.resolve("examples")).set("~", path.resolve("packages"))
    // 把packages和examples加入编译
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options
      })
  },
  // 配置全局scss
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "styles/global.scss";`
      }
    }
  },
  devServer: {
    open: true, // 是否在devServer启动且第一次构建完成时，自动用默认浏览器打开
    hot: false //是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览
  }
}
