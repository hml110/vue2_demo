<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学生性别：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合

export default {
  data() {
    return {
      msg: 'HelloWorld',
      schoolName: 'xx大学',
      address: '南京',
    }
  },
  mounted() {
    //自己身上没有找原型，原型身上没有顺着找到vue的原型对象
    //绑定事件
    this.$bus.$on('hello', (data) => {
      console.log('我是shcool组件，收到了数据', data)
    })
  },
  beforeDestroy() {
    //解绑事件
    this.$bus.$off('hello')
  },
}
</script>

<style scoped>
.demo {
  background-color: green;
}
</style>