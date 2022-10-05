//该文件用于创建Vuex中最为核心的store
import Vue from "vue";
//引入vuex
import Vuex from "vuex";

//使用vuex
Vue.use(Vuex);

//准备actions  ----- 用于相应组件中的动作
// (服务员)
const actions = {
  // context 上下文
  // value   传递的参数

  // 不参与业务逻辑，可以省略
  //   jia(context, value) {
  //     console.log("actions.jia被调用了", context, value);
  //     context.commit("JIA", value);
  //   },

  //   jian(context, value) {
  //     context.commit("JIAN", value);
  //   },

  jiaOdd(context, value) {
    if (context.state.sum % 2 == 0) {
      context.commit("JIA", value);
    }
    //支持复杂逻辑处理value
    // context.dispatch("demo1", value);
  },
  //   demo1(context, value) {
  //     console.log("demo1");
  //     context.dispatch("demo2", value);
  //   },
  //   demo2(context, value) {
  //     console.log("demo2");
  //     console.log(value);
  //   },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit("JIA", value);
    }, 500);
  },
};

//准备mutations   ----- 用于操作数据(state)
// （后厨）
const mutations = {
  JIA(state, value) {
    console.log("mutations.JIA()被调用了", state, value);
    state.sum += value;
  },
  JIAN(state, value) {
    state.sum -= value;
  },
};

//state   ----- 用于存储数据
const state = {
  sum: 0,
};

//创建并暴露store
export default new Vuex.Store({
  state,
  mutations,
  actions,
});
