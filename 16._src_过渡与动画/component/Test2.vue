<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 多个元素过渡 -->
    <transition-group name="hello"
                      appear>
      <h1 v-show="!isShow"
          key="1">你好啊！</h1>
      <h1 v-show="isShow"
          key="2">哈哈哈！</h1>
    </transition-group>
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
  /* 变化效果：0.5s 匀速 */
}

/* 进入的起点  离开的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点  离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}

/* 离开的起点 */
/* .hello-leave {
  transform: translateX(0);
} */

/* 离开的终点 */
/* .hello-leave-to {
  transform: translateX(-100%);
} */
</style>