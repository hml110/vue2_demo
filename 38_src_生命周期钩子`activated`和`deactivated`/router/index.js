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
      //命名路由
      name: "guanyu",
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
              //命名路由
              name: "xiangqing",
              path: "detail",
              component: Detail,
              //谁接收东西，谁写props
              //props的第一种写法  值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
              //   props: {
              //     a: 1,
              //     b: "hello",
              //   },

              //props的第二种写法  值为布尔值，若布尔值为真,就会把该路由组件收到的params参数(注意只针对params参数)，以props的形式传递给Detail组件
              //   props: true,

              //props的第三种写法  值为函数,提供参数$route，可以使用相关参数属性

              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title,
                };
              },
              //   props($route) {
              //     return {
              //       //结构赋值 方式1
              //       id: query.id,
              //       title: query.title,
              //     };
              //   },

              //结构赋值 方式2
              //   props({{query:{id,title}}}) {
              //     return {
              //      id,title
              //     };
              //   },
            },
          ],
        },
      ],
    },
  ],
});
