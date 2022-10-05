<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 @click='showName'>学校名称：{{name}}</h2>
    <h2>学生性别：{{address}}</h2>
    <button @click="hello1">点我测试给Vue原型上添加一个方法（vm和vc就都能用了）</button>
    <input type="text"
           v-fbind>
  </div>
</template>

<script>
//引入一个混合

export default {
  data() {
    return {
      msg: 'HelloWorld',
      name: 'xx大学',
      address: '南京',
    }
  },

  methods: {
    hello1() {
      this.hello()
    },
  },
}
</script>

<style>
.demo {
  background-color: green;
}
</style>