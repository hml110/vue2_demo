<template>
  <ul class="todo-main">
    <transition-group name="todo"
                      appear>
      <my-item v-for="todoObj in todos"
               :key="todoObj.id"
               :todo="todoObj"></my-item>
    </transition-group>
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

/* 支持命名v,可以用设置的name替换 */
/* 进入时动画 */
.todo-enter-active {
  animation: myAnimation 1s;
}

/* 离开时动画 */
.todo-leave-active {
  animation: myAnimation 1s reverse;
}

/* 定义关键帧 */
@keyframes myAnimation {
  from {
    transform: translate(100%);
  }
  to {
    transform: translate(0px);
  }
}
</style>