<template>
  <div>
    <student name="李四"
             sex="男"></student>
    <hr />

  </div>

</template>

<script>
import student from './component/Student.vue'

export default {
  name: 'App',
  components: {
    student,
  },
  data() {
    return {
      msg: 'hello world',
    }
  },
  methods: {},
}
</script>

<style>
</style>