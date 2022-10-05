<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 @click='showName'>学生名称：{{name | mySlice}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'HelloWorld',
      name: 'John111',
      myAge: 18,
    }
  },

  methods: {},
}
</script>

<style>
.demo {
  background-color: green;
}
</style>