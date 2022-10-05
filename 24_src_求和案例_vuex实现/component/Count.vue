<template>
  <div>
    <h2>当前求和为：{{$store.state.sum}}</h2>
    <!-- v-model.number 收集的值强制转换为数字类型 -->
    <select v-model.number="number">
      <!-- :value="1"  或者value前加：，把引号内容看出表达式 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前就和为奇数再加</button>
    <button @click="incrementWait">当前等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      number: 1, //用户选择的数字
    }
  },
  methods: {
    increment() {
      //   this.$store.dispatch('jia', this.number)
      //越过Action
      this.$store.commit('JIA', this.number)
    },
    decrement() {
      //越过Action
      //   this.$store.dispatch('jian', this.number)
      this.$store.commit('JIAN', this.number)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.number)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.number)
    },
  },
}
</script>

<style>
button {
  margin-left: 10px;
}
</style>