import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//不推荐
// const Demo = Vue.extend({});
// const d = new Demo();
// Vue.prototype.x = d;

console.log(Vue.prototype);

const vm = new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});
