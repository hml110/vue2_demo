<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学生性别：{{address}}</h2>
  </div>
</template>

<script>
//引入消息发布订阅库，pubsub是个对象
import pubsub from 'pubsub-js'

export default {
  data() {
    return {
      msg: 'HelloWorld',
      schoolName: 'xx大学',
      address: '南京',
    }
  },
  methods: {
    demo(messageName, message) {
      console.log(this) //VueComponent
      console.log('消息收到了', messageName, message)
    },
  },
  mounted() {
    //自己身上没有找原型，原型身上没有顺着找到vue的原型对象
    // this.$bus.$on('hello', (data) => {
    //   console.log('我是shcool组件，收到了数据', data)
    // })

    //订阅消息
    // this.pubId = pubsub.subscribe('hello', function (messageName, message) {
    //   console.log(this) //undefined
    //   console.log(
    //     '有人发布了hello消息，消息回调执行！！！',
    //     messageName,
    //     message
    //   )
    // })

    this.pubId = pubsub.subscribe('hello', this.demo)
  },
  beforeDestroy() {
    //解绑事件
    // this.$bus.$off('hello')
    //取消订阅
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style scoped>
.demo {
  background-color: green;
}
</style>