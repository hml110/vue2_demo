//该文件用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../pages/Detail.vue";

//创建并暴露一个路由器
const router = new VueRouter({
  mode: "history",
  routes: [
    //   一级路由
    {
      //命名路由
      name: "guanyu",
      path: "/about",
      component: About,
      meta: { title: "关于", isAuth: true },
    },
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      meta: { title: "主页" },
      //   子路由
      children: [
        {
          name: "xinwen",
          path: "news",
          component: News,
          //配置路由元
          meta: {
            isAuth: true,
            title: "新闻",
          },

          //独享路由守卫
          //   beforeEnter: (to, from, next) => {
          //     if (to.meta.isAuth) {
          //       if (localStorage.getItem("school") === "hml") {
          //         next();
          //       } else {
          //         alert("学校名不对！无权限查看");
          //       }
          //     } else {
          //       next();
          //     }
          //   },
        },
        {
          name: "xiaoxi",
          path: "message",
          component: Message,
          meta: {
            isAuth: true,
            title: "消息",
          },
          //三级路由
          children: [
            {
              //命名路由
              name: "xiangqing",
              path: "detail",
              component: Detail,
              meta: { title: "详情" },
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

//全局前置路由守卫  在初始化的时候、每一次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//   console.log("前置路由守卫", to, from);
//   //根据localStorage制定放行逻辑
//   //   if (to.path === "/home/news" || to.path === "/home/message") {
//   //   if (to.name === "xinwen" || to.name === "xiaoxi") {
//   //判断是否需要鉴权
//   if (to.meta.isAuth) {
//     if (localStorage.getItem("school") === "hml") {
//       next();
//     } else {
//       alert("学校名不对！无权限查看");
//     }
//   } else {
//     next();
//   }
// });

//全局后置路由守卫  在初始化的时候、每一次路由切换之后被调用
// router.afterEach((to, from) => {
//   console.log("后置路由守卫", to, from);
//   //配置网页标签标题
//   document.title = to.meta.title || "vue";
// });

export default router;
