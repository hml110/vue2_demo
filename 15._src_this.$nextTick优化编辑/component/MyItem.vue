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
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input v-show="todo.isEdit"
             type="text"
             :value="todo.title"
             @blur="handleBlur(todo,$event)"
             ref="inputTitle">
    </label>
    <button class="btn btn-danger"
            @click="deleteObj(todo.id)">删除</button>
    <button class="btn btn-edit"
            @click="handEdit(todo)"
            v-show="!todo.isEdit">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'MyItem',
  //声明接收todo对象
  props: ['todo'],
  methods: {
    handleCheck(id) {
      //通知app组件将对应的status取反
      //   this.checkTodo(id)
      //触发自定义事件
      this.$bus.$emit('checkTodo', id)
    },
    deleteObj(id) {
      if (confirm('Are you sure you want to delete?')) {
        //通知App删除一个数组值
        // this.removeTodo(id)
        //触发自定义事件
        // this.$bus.$emit('removeTodo', id)
        pubsub.publish('removeTodoId', id)
      }
    },
    handEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        console.log('todo身上没有isEdit')
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function () {
        //重新获取焦点
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点的时候    真正实现修改逻辑
    handleBlur(todo, e) {
      todo.isEdit = false
      console.log(todo.id, e.target.value)
      //空值校验
      if (!e.target.value.trim()) {
        return alert('输入不能为空！')
      }
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
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