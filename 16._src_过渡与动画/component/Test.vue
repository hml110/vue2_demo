<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello"
                appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>

</template>

<script>
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
}

/* 支持命名v,可以用设置的name替换 */
/* 进入时动画 */
.hello-enter-active {
  animation: myAnimation 1s;
}

/* 离开时动画 */
.hello-leave-active {
  animation: myAnimation 1s reverse;
}

/* 定义关键帧 */
@keyframes myAnimation {
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(0px);
  }
}
</style>