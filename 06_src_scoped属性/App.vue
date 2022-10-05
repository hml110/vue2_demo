<template>
  <div>
    <h1 class="title">你好啊</h1>
    <school></school>
    <student></student>
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
  data() {},
  methods: {},
}
</script>

<style scoped>
.title {
  color: lightcoral;
}
</style>