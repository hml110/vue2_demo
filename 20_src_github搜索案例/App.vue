<template>
  <div class="container">
    <search></search>
    <list></list>
  </div>
</template>

<script>
import Search from './component/Search.vue'
import List from './component/List.vue'
export default {
  name: 'App',
  components: { Search, List },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style >
</style>