<template>
  <div class="container">
    <count></count>
    <hr />
    <person></person>
  </div>
</template>

<script>
import Count from './component/Count.vue'
import Person from './component/Person.vue'
export default {
  name: 'App',
  components: { Count, Person },

  mounted() {
    // console.log(this.$store)
  },
}
</script>

<style >
</style>