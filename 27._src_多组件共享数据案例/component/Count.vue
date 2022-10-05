<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <h2>当前求和放大10倍为：{{bigSum}}</h2>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3 style="color:red">Person组件的总人数是：{{personList.length}}</h3>
    <!-- v-model.number 收集的值强制转换为数字类型 -->
    <select v-model.number="number">
      <!-- :value="1"  或者value前加：，把引号内容看出表式 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(number)">+</button>
    <!-- <button @click="JIA(number)">+</button> -->
    <button @click="decrement(number)">-</button>
    <!-- <button @click="JIAN(number)">-</button> -->
    <button @click="incrementOdd(number)">当前就和为奇数再加</button>
    <!-- <button @click="jiaOdd(number)">当前就和为奇数再加</button> -->
    <button @click="incrementWait(number)">当前等一等再加</button>
    <!-- <button @click="jiaWait(number)">当前等一等再加</button> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      number: 1, //用户选择的数字
    }
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState(['sum', 'school', 'subject', 'personList']),

    //借助mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters(['bigSum']),
  },
  methods: {
    // 调用mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),

    /**********************************************************/
    // 调用mapActions生成对应的方法，方法中会调用dispatch去联系Actions(对象写法)
    ...mapActions({ jiaOdd: 'jiaOdd', jiaWait: 'jiaWait' }),
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