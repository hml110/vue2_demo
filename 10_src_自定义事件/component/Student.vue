<template>
  <div class="demo">
    <h2>学生名称：{{studentName}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <h2>当前number:{{number}}</h2>

    <button @click="add">number++</button>

    <button @click="sendStudentName(studentName)">把学生姓名传递给APP</button>

    <button @click="unbind">解绑hml事件</button>

    <button @click="death">销毁student的实列对象</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
      studentName: 'John111',
      myAge: 18,
    }
  },

  methods: {
    add() {
      console.log('add 被调用了！！！')
      this.number++
    },
    sendStudentName(name) {
      // 触发Student组件实例身上的hml事件
      this.$emit('hml', name, 666, 88, 999)
      // 触发Student组件实例身上的demo事件
      //   this.$emit('demo')
      //触发原生事件
      this.$emit('click')
    },
    unbind() {
      this.$off('hml') //解绑一个自定义事件

      //   this.$off(['hml', 'demo']) //解绑多个自定义事件
      //   this.$off() //解绑所有的自定义事件
    },
    death() {
      this.$destroy() //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
    },
  },
}
</script>
<style>
.demo {
  background-color: rgb(189, 130, 130);
}
</style>