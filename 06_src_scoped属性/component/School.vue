<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 @click='showName'>学校名称：{{name}}</h2>
    <h2>学生性别：{{address}}</h2>
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

<style scoped>
.demo {
  background-color: green;
}
</style>