<template>
  <div class="panel">
    <div class="panel-body">
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul class="nav nav-tabs">
            <li>
              <router-link class="list-group-item"
                           to="/home/news"
                           active-class="active">News</router-link>
            </li>
            <li>
              <router-link class="list-group-item"
                           to="/home/message"
                           active-class="active">Message</router-link>
            </li>
          </ul>
          <!-- include=  组件名 -->
          <keep-alive :include="['News','Message']">
            <router-view></router-view>
          </keep-alive>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  //   beforeDestroy() {
  //     console.log('Home is now destroyed')
  //   },
  mounted() {
    // console.log('Home is now mounted', this)
  },
}
</script>

<style>
</style>