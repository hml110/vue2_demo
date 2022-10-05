<template>
  <div>
    <test></test>
    <test2></test2>
    <test3></test3>
  </div>
</template>

<script>
import Test from './component/Test.vue'
import Test2 from './component/Test2.vue'
import Test3 from './component/Test3.vue'

export default {
  name: 'App',
  components: {
    Test,
    Test2,
    Test3,
  },
}
</script>

<style >
</style>