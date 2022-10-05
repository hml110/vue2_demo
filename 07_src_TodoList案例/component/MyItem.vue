<template>
  <li>
    <label>
      <input type="checkbox"
             :checked="todo.status"
             @change="handleCheck(todo.id)" />

      <!-- 不太推荐使用的一种情况 -->
      <!-- <input type="checkbox"
             v-model="todo.status" /> -->
      <!-- @click="handleCheck(todo.status)" -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger"
            @click="deleteObj(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  //声明接收todo对象
  props: ['todo', 'checkTodo', 'removeTodo'],
  methods: {
    handleCheck(id) {
      //通知app组件将对应的status取反
      this.checkTodo(id)
    },
    deleteObj(id) {
      if (confirm('Are you sure you want to delete?')) {
        //通知App删除一个数组值
        this.removeTodo(id)
      }
    },
  },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* 按钮被隐藏 */
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: rgba(165, 167, 169, 0.921);
}

/* 显示按钮 */
li:hover button {
  display: inline;
}
</style>