<template>
  <div class="container">
    <Category title="美食"
              :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
    </Category>
    <Category title="游戏"
              :listData="games">
      <ul>
        <li v-for="(g,index) in games"
            :key="index">{{g}}</li>
      </ul>
    </Category>
    <Category title="电影"
              :listData="films">
      <video controls
             src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './component/Category.vue'
export default {
  name: 'App',
  components: { Category },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'],
    }
  },
  methods: {},
}
</script>

<style >
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 200px;
  height: 200px;
}
video {
  width: 200px;
  height: 200px;
}
</style>