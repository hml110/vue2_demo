<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot :games="games">
      我是默认的一些内容
    </slot>

  </div>

</template>

<script>
export default {
  name: 'Category',
  props: ['listData', 'title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    }
  },
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