<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '电子大学',
      address: '山东',
    }
  },
}
</script>

<style>
.demo {
  background-color: green;
}
</style>