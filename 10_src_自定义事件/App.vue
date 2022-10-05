<template>
  <div class="div12">
    <h2>你好：{{studentName}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
    <school :getShcoolName="getShcoolName"></school>

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <student v-on:hml="getStudentName"></student> -->
    <!-- <student @hml.once="getStudentName"></student> -->
    <student v-on:hml="getStudentName"
             @demo="m1"></student>

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据（第二种写法，使用ref） -->
    <student ref="student"
             @click="show"
             @click.native="show2"></student>
    <hr />

  </div>

</template>

<script>
import student from './component/Student.vue'
import school from './component/School.vue'

export default {
  name: 'App',
  components: {
    student,
    school,
  },
  data() {
    return {
      studentName: '',
    }
  },
  methods: {
    getShcoolName(name) {
      console.log('APP收到了一个学校名：', name, 66, 88)
    },
    getStudentName(name, ...params) {
      console.log('APP收到了一个学生名：', params)
      this.studentName = name
    },
    m1() {
      console.log('demo事件被触发了！！！')
    },
    show() {
      alert(this.studentName)
    },
    show2() {
      alert(this)
    },
  },
  mounted() {
    // this.$refs.student.$on('hml', this.getStudentName)
    // this.$refs.student.$once('hml', this.getStudentName)
    // this.$refs.student.$on('hml', function (name, ...params) {
    //   console.log('APP收到了一个学生名：', name, params)
    //   console.log(this) //这里的this是Student组件的实列对象，可以写成箭头函数来做到修改
    //   this.studentName = name
    // })
    this.$refs.student.$on('hml', (name, ...params) => {
      console.log('APP收到了一个学生名：', name, params)
      console.log(this) //这里的this就是app组件实列对象,箭头函数没有实列对象
      this.studentName = name
    })
  },
}
</script>

<style>
.div12 {
  color: lightcoral;
}
</style>