//该文件用于创建Vuex中最为核心的store
import Vue from "vue";
//引入vuex
import Vuex from "vuex";

//引入
import countOptions from "./count.js";
import personOptions from "./person.js";

//使用vuex
Vue.use(Vuex);

// //求和功能相关的配置
// const countOptions = {
//   // 开启命名空间
//   namespaced: true,
//   actions: {
//     jiaOdd(context, value) {
//       if (context.state.sum % 2 == 0) {
//         context.commit("JIA", value);
//       }
//     },

//     jiaWait(context, value) {
//       setTimeout(() => {
//         context.commit("JIA", value);
//       }, 500);
//     },
//   },
//   mutations: {
//     JIA(state, value) {
//       console.log("mutations.JIA()被调用了", state, value);
//       state.sum += value;
//     },
//     JIAN(state, value) {
//       state.sum -= value;
//     },
//   },
//   state: {
//     sum: 0,
//     school: "xx大学",
//     subject: "前端",
//   },
//   getters: {
//     bigSum(state) {
//       return state.sum * 10;
//     },
//   },
// };

// //人员管理相关的配置
// const personOptions = {
//   namespaced: true,
//   actions: {
//     //只添加姓王的
//     addPersonWang(context, person) {
//       if (person.name.indexOf("王") === 0) {
//         context.commit("ADD_PERSON", person);
//       } else {
//         alert("添加的人必须姓王！！！");
//       }
//     },
//   },
//   mutations: {
//     ADD_PERSON(state, personObj) {
//       console.log("mutations.ADD_PERSON()被调用了", state, personObj);
//       state.personList.unshift(personObj);
//     },
//   },
//   state: { personList: [{ id: "001", name: "John" }] },
//   getters: {
//     //返回第一个人的名字
//     firstPersonName(state) {
//       return state.personList[0].name;
//     },
//   },
// };

//创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});
