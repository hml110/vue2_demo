<template>
  <div class="div1">
    <h3>学生姓名：{{name}}</h3>
    <h3>学生年龄：{{age}}</h3>
  </div>
</template>

<script>
export default {
  name: 'StudentName',
  data() {
    return {
      name: '张三',
      age: '23',
    }
  },
}
</script>
<style>
.div1 {
  color: aqua;
}
</style>