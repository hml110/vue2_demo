<template>
  <div class="todo-footer"
       v-show="total">
    <label>
      <!-- <input type="checkbox"
             :checked="isAll"
             @change="changeAll" /> -->
      <input type="checkbox"
             v-model="isAll" />
    </label>
    <span>
      <span>已完成</span>{{doneTotal}} / 全部{{total}}
    </span>
    <button class="btn btn-danger"
            @click="callDeleteCompleted">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos'],
  computed: {
    isAll: {
      get() {
        //总数相等且不为0
        return this.doneTotal === this.total && this.total > 0 ? true : false
      },
      set(value) {
        // console.log('###', value)
        // this.changeAllorNot(value)
        this.$emit('changeAllorNot', value)
      },
    },

    total() {
      return this.todos.length
    },
    doneTotal() {
      //方式一：
      //   return this.todos.filter((todo) => {
      //     return todo.status === true
      //   }).length

      //方式二：
      //   let i = 0
      //   this.todos.forEach((todo) => {
      //     if (todo.status === true) {
      //       i++
      //     }
      //   })
      //   return i

      //方式三：
      //previousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。
      //currentValue：数组中正在处理的元素。在第一次调用时，若指定了初始值
      //initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]

      //此处使用reduce方法做条件统计
      //   console.log('doneTotal()')
      const x = this.todos.reduce((pre, todo) => {
        return pre + (todo.status ? 1 : 0)
      }, 0)
      //   console.log(this.todos)
      return x
    },
  },
  methods: {
    // changeAll(event) {
    //   console.log(event.target.checked)
    //   //告诉App进行全选/全不选
    //   this.changeAllorNot(event.target.checked)
    // },

    callDeleteCompleted() {
      //告诉App删除已完成的
      //   this.DeleteComplete()
      this.$emit('DeleteComplete')
    },
  },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>