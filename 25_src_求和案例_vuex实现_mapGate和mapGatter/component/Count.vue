<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前求和放大10倍为：{{bigSum}}</h2>
    <h3>我在{{$store.state.school}}，学习{{$store.state.subject}}</h3>
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
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      number: 1, //用户选择的数字
    }
  },
  computed: {
    //靠程序员亲自去写计算属性
    // sum() {
    //   return this.$store.state.sum
    // },
    // school() {
    //   return this.$store.state.school
    // },
    // subject() {
    //   return this.$store.state.subject
    // },

    //借助mapState生成计算属性，从state中读取数据（对象写法）
    // ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
    //借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState(['sum', 'school', 'subject']),

    // bigSum() {
    //   return this.$store.getters.bigSum
    // },
    //借助mapGetters生成计算属性，从getters中读取数据（对象写法）
    // ...mapGetters({ bigSum: 'bigSum' }),
    //借助mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters(['bigSum']),
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
  mounted() {
    const x = mapState({ he: 'sum', school: 'school', subject: 'subject' })
    console.log(x)
  },
}
</script>

<style>
button {
  margin-left: 10px;
}
</style>