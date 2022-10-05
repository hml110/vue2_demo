<template>
  <div class="todo-header">
    <input type="text"
           placeholder="请输入你的任务名称，按回车键确认"
           @keyup.enter="add"
           v-model="titleNew" />
  </div>
</template>

<script>
//引入nanoid
import { nanoid } from 'nanoid'

export default {
  name: 'MyHeader1',
  data() {
    return {
      titleNew: '',
    }
  },
  props: ['addTodo'],

  methods: {
    add(event) {
      // 方法2：  console.log(this.titleNew)
      //校验数据：过滤为空的值
      if (!event.target.value.trim()) {
        alert('输入不能为空！')
        return
      }

      //将用户的输入包装成为一个todo对象
      const todoObj = {
        id: nanoid(),
        title: event.target.value,
        status: false,
      }
      console.log(todoObj)
      this.addTodo(todoObj)
      //恢复输入框的空状态
      event.target.value = ''
    },
  },
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>