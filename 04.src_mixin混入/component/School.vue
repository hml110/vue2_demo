<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 @click='showName'>学校名称：{{name}}</h2>
    <h2>学生性别：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
import { mixin } from '../mixin'
export default {
  data() {
    return {
      msg: 'HelloWorld',
      name: 'xx大学',
      address: '南京',
    }
  },

  methods: {},
  //配置混合
  mixins: [mixin],
}
</script>

<style>
.demo {
  background-color: green;
}
</style>