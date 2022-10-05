export default {
  // 开启命名空间
  namespaced: true,
  actions: {
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
  },
  mutations: {
    JIA(state, value) {
      console.log("mutations.JIA()被调用了", state, value);
      state.sum += value;
    },
    JIAN(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "xx大学",
    subject: "前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
