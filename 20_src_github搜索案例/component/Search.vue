<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text"
             placeholder="enter the name you search"
             v-model="keyWord" />&nbsp;
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
//https://api.github.com/search/users?q=xxx

import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    getUsers() {
      //数据提供方
      //请求前更新List的数据
      this.$bus.$emit('updateListData', {
        isFirst: false,
        isLoading: true,
        errorMsg: '',
        users: [],
      })
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (res) => {
          // 请求成功以后
          console.log('请求成功了！', res.data.items)
          this.$bus.$emit('updateListData', {
            isLoading: false,
            errorMsg: '',
            users: res.data.items,
          })
        },
        (error) => {
          // 请求失败以后
          console.log('请求失败了！')
          this.$bus.$emit('updateListData', {
            isLoading: false,
            errorMsg: error.message,
            users: [],
          })
        }
      )
    },
  },
}
</script>

<style>
</style>