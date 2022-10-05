<template>
  <div class="demo">
    <h2>学生名称：{{studentName}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <hr />
    <button @click="sendStudentName">把学生名给School</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      studentName: 'John111',
      myAge: 18,
    }
  },
  methods: {
    sendStudentName() {
      //发布消息
      pubsub.publish('hello', 666)
    },
  },
}
</script>
<style>
.demo {
  background-color: rgb(189, 130, 130);
}
</style>