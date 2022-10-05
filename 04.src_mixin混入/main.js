import Vue from "vue";
import App from "./App.vue";

//引入全局混合
import { hunhe, hunhe2 } from "./mixin";

Vue.config.productionTip = false;

Vue.mixin({ hunhe });
Vue.mixin({ hunhe2 });

new Vue({
  el: "#app",
  render: (h) => h(App),
});
