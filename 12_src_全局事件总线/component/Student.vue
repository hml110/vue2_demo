<template>
  <div class="demo">
    <h2>学生名称：{{studentName}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <hr />
    <button @click="sendStudentName">把学生名给School</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentName: 'John111',
      myAge: 18,
    }
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit('hello', this.studentName)
    },
  },
}
</script>
<style>
.demo {
  background-color: rgb(189, 130, 130);
}
</style>