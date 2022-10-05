<template>
  <div class="category">
    <h3>{{title}}</h3>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>

</template>

<script>
export default {
  name: 'Category',
  props: ['listData', 'title'],
}
</script>

<style scoped>
.category {
  background-color: rgb(204, 216, 216);
  width: 200px;
  height: 300px;
  border: 1px solid red;
}
h3 {
  text-align: center;
  color: indianred;
}
</style>