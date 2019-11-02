const mockFetch = require("./mock/index");
// 打包体积优化
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: () => {
    // 进行生产模式打包时，进行模块化打包
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [new BundleAnalyzerPlugin()]
      };
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://adv.zhangpeiyue.com", //访问的服务器地址
        changeOrigin: true, //true为开启代理
        pathRewrite: {
          "^/api": "/" //路径的替换规则
        }
      }
    },
    port: 8080,
    host: "0.0.0.0",
    headers: {
      "X-foo": "112233"
    },
    inline: true,
    overlay: true,
    stats: "errors-only",
    before: app => {
      // 本地模拟请求
      mockFetch(app);
    }
  }
};
