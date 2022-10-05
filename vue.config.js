const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      //这里可以修改入口文件路径
      entry: "src/main.js",
    },
  },
  // 关闭语法检查
  lintOnSave: false,

  //开启代理服务器  方式一
  //   devServer: {
  //     proxy: "http://localhost:5000",
  //   },

  //开启代理服务器  方式二
  devServer: {
    proxy: {
      // 请求前缀
      "/api": {
        target: "http://localhost:5000", //请求路径
        //正则替换
        pathRewrite: {
          "^/api": "",
        },
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中的host字段
      },

      "/demo": {
        target: "http://localhost:5001", //请求路径
        //正则替换
        pathRewrite: {
          "^/demo": "",
        },
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中的host字段
      },
    },
  },
});
