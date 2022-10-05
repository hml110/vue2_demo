<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件的求和结果：{{Sum}}</h3>
    <h3 style="color:red">列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text"
           placeholder="请输入名字"
           v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">只添加姓王的</button>
    <button @click="addServer">添加一个随机的人</button>
    <ul>
      <li v-for="p in personList"
          :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Person',
  data() {
    return {
      name: '',
    }
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList
    },
    Sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    },
  },
  methods: {
    add() {
      const person = { id: nanoid(), name: this.name }
      this.name = ''
      this.$store.commit('personAbout/ADD_PERSON', person)
    },
    addWang() {
      const person = { id: nanoid(), name: this.name }
      this.name = ''
      this.$store.dispatch('personAbout/addPersonWang', person)
    },
    addServer() {
      this.$store.dispatch('personAbout/addPersonServer')
    },
  },
}
</script>

<style>
</style>