import Vue from "vue";
import App from "./App.vue";
//引入插件
import vueResource from "vue-resource";

//引入store
import store from "./store/index";

Vue.config.productionTip = false;
//使用插件
Vue.use(vueResource);

new Vue({
  el: "#app",
  render: (h) => h(App),
  store: store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
