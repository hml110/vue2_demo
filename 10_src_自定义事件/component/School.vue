<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学生性别：{{address}}</h2>
    <hr />
    <hr />
    <button @click="sendSchoolName(schoolName)">把学校姓名传递给APP</button>
  </div>
</template>

<script>
//引入一个混合

export default {
  data() {
    return {
      msg: 'HelloWorld',
      schoolName: 'xx大学',
      address: '南京',
    }
  },
  props: ['getShcoolName'],

  methods: {
    sendSchoolName(name, x, y) {
      this.getShcoolName(name, x, y)
    },
  },
}
</script>

<style scoped>
.demo {
  background-color: green;
}
</style>