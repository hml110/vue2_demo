<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 多个元素过渡 -->
    <transition-group appear
                      name="animate__animated animate__bounce"
                      enter-active-class="animate__zoomInDown"
                      leave-active-class="animate__zoomOutRight">
      <h1 v-show="!isShow"
          key="1">你好啊！</h1>
      <h1 v-show="isShow"
          key="2">哈哈哈！</h1>
    </transition-group>
  </div>

</template>

<script>
import 'animate.css'
export default {
  name: 'App',
  data() {
    return {
      isShow: 'true',
    }
  },
}
</script>

<style scoped>
h1 {
  margin-top: 20px;
  background-color: darkcyan;
  /* 变化效果：0.5s 匀速 */
}
</style>