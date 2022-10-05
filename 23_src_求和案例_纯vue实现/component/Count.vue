<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
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
      sum: 0, //当前的和
      number: 1, //用户选择的数字
    }
  },
  methods: {
    increment() {
      console.log(this.sum)
      this.sum += this.number
    },
    decrement() {
      this.sum -= this.number
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.number
      }
    },
    incrementWait() {
      setTimeout(() => (this.sum += this.number), 500)
    },
  },
}
</script>

<style>
button {
  margin-left: 10px;
}
</style>