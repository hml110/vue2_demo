<template>
  <div>
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

<style>
</style>