<template>
  <div class="div12">
    <h2>你好：{{studentName}}</h2>
    <school></school>
    <student></student>
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
}
</script>

<style>
.div12 {
  color: lightcoral;
}
</style>