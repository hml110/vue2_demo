//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import Home from "../component/Home.vue";
import About from "../component/About.vue";

//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});
