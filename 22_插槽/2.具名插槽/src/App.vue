<template>
  <div class="container">
    <Category title="美食">
      <img slot="center"
           src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
      <a slot="footer"
         href="http://s3.ax1x.com">更多美食</a>
    </Category>
    <Category title="游戏"
              :listData="games">
      <ul slot="center">
        <li v-for="(g,index) in games"
            :key="index">{{g}}</li>
      </ul>
      <div class="foot"
           slot="footer">
        <a href="http://www.atguigu.com">单机游戏</a>
        <a href="http://www.atguigu.com">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video slot="center"
             controls
             src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <!-- v-slot:footer 仅仅支持 template-->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
          <a href="http://www.atguigu.com">热门</a>
          <a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观看</h4>
      </template>

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
  height: 100px;
}
.foot {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
h4 {
  text-align: center;
}
</style>