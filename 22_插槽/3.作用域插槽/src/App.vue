<template>
  <div class="container">

    <Category title="游戏">
      <template scope="ga">
        {{ga.games}}
        <ul>
          <li v-for="(g,index) in ga.games"
              :key="index">{{g}}</li>
        </ul>
      </template>

    </Category>
    <Category title="游戏">
      <template scope="gaa">
        <ol style="color:red">
          <li v-for="(g,index) in gaa.games"
              :key="index">{{g}}</li>
        </ol>
      </template>

    </Category>
    <Category title="游戏">
      <!-- 支持结构赋值 -->
      <template scope="{games}">
        <h4 v-for="(g,index) in games"
            :key="index">{{g}}</h4>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 新api slot-scope -->
      <template slot-scope="{games}">
        <h4 v-for="(g,index) in games"
            :key="index">{{g}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './component/Category.vue'
export default {
  name: 'App',
  components: { Category },

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