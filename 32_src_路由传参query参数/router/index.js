//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    //   一级路由
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      //   子路由
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          //三级路由
          children: [
            {
              path: "detail",
              component: Detail,
            },
          ],
        },
      ],
    },
  ],
});
