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

  jiaOdd(context, value) {
    if (context.state.sum % 2 == 0) {
      context.commit("JIA", value);
    }
  },

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
  ADD_PERSON(state, personObj) {
    console.log("mutations.ADD_PERSON()被调用了", state, personObj);
    state.personList.unshift(personObj);
  },
};

//state   ----- 用于存储数据
const state = {
  sum: 0,
  school: "xx大学",
  subject: "前端",
  personList: [{ id: "001", name: "John" }],
};

//getters   ----- 用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

//创建并暴露store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
