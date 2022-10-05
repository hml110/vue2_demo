<template>
  <ul class="todo-main">
    <my-item v-for="todoObj in todos"
             :key="todoObj.id"
             :todo="todoObj"></my-item>
  </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
  name: 'MyList',
  //声明App传递过来的数据
  props: ['todos'],
  components: {
    MyItem,
  },
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>