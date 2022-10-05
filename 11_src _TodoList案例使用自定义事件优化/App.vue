<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <my-header @addTodo="addTodo"></my-header>
        <my-list :todos="todos"
                 :checkTodo="checkTodo"
                 :removeTodo="removeTodo"></my-list>
        <my-footer :todos="todos"
                   @changeAllorNot="changeAllorNot"
                   @DeleteComplete="DeleteComplete"></my-footer>
      </div>
    </div>
  </div>

</template>

<script>
import MyHeader from './component/MyHeader1.vue'
import MyList from './component/MyList.vue'
import MyFooter from './component/MyFooter.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      // 🔴从本地存储中获得数据，null就创建空数组[]
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    }
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      console.log('我是app组件，我收到了数据:', todoObj)
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status
        }
      })
      console.log(this.todos)
      console.log(id)
    },
    //删除一个数组值
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
      console.log(this.todos)
    },
    //全选or全不选
    changeAllorNot(status) {
      this.todos.forEach((todo) => {
        todo.status = status
      })
    },
    //删除全部
    DeleteComplete() {
      this.todos = this.todos.filter((todo) => {
        return todo.status !== true
      })
    },
  },
  // 🔴数据发生改变就放到本地存储中，注意深度侦听，以及JSON转化为字符串
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      },
    },
  },
}
</script>

<style >
/*base*/
body {
  background: #fff;
}

#root {
  margin-top: 50px;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>