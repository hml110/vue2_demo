import Vue from "vue";
import App from "./App.vue";
//引入vue-router
import VueRouter from "vue-router";
//引入路由器
import router from "./router/index.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  el: "#app",
  //配置路由
  router: router,
  render: (h) => h(App),
});
