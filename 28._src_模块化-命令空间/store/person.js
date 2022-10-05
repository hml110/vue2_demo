import axios from "axios";
import { nanoid } from "nanoid";
export default {
  namespaced: true,
  actions: {
    //只添加姓王的
    addPersonWang(context, person) {
      if (person.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", person);
      } else {
        alert("添加的人必须姓王！！！");
      }
    },
    addPersonServer(context) {
      axios.get("http://api.uixsj.cn/hitokoto/get?type=social").then(
        (res) => {
          context.commit("ADD_PERSON", {
            id: nanoid(),
            name: res.data,
          });
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, personObj) {
      console.log("mutations.ADD_PERSON()被调用了", state, personObj);
      state.personList.unshift(personObj);
    },
  },
  state: { personList: [{ id: "001", name: "John" }] },
  getters: {
    //返回第一个人的名字
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};
