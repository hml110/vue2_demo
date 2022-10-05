<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 @click='showName'>学生名称：{{name}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
  </div>
</template>

<script>
//引入一个混合
import { mixin } from '../mixin'
export default {
  data() {
    return {
      msg: 'HelloWorld',
      name: 'John',
      myAge: 18,
    }
  },
  //配置混合
  mixins: [mixin],

  methods: {},
}
</script>

<style>
.demo {
  background-color: green;
}
</style>