<template>

  <ul>
    <li :style="{opacity}">欢迎学习VUe</li>
    <li>news001<input type="text"></li>
    <li>news002<input type="text"></li>
    <li>news003<input type="text"></li>
  </ul>

</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      opacity: 1,
    }
  },
  //   beforeDestroy() {
  //     console.log('News is now destroyed')
  //     clearInterval(this.timer)
  //   },
  //   mounted() {
  //     this.timer = setInterval(() => {
  //       this.opacity -= 0.01
  //       if (this.opacity <= 0) {
  //         this.opacity = 1
  //       }
  //     }, 16)
  //   },

  //组件激活
  activated() {
    console.log('News is activated')
    console.log('@')
    this.timer = setInterval(() => {
      this.opacity -= 0.01
      if (this.opacity <= 0) {
        this.opacity = 1
      }
    }, 16)
  },
  //组件失活
  deactivated() {
    console.log('News is deactivated')
    clearInterval(this.timer)
  },
}
</script>

<style>
</style>