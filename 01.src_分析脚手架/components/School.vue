<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click='show'>点我提示学校名称</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法）
// Vue.extend() 可省略
export default {
  name: 'SchoolName',
  //获取数据 写成函数形式
  data() {
    return {
      SchoolName: 'XX小学',
      address: 'localhost',
    }
  },
  methods: {
    show() {
      alert(this.SchoolName)
    },
  },
}

// 默认暴露
// export default school
</script>

<style>
/* 组件的样式 */
.demo {
  background-color: blueviolet;
}
</style>