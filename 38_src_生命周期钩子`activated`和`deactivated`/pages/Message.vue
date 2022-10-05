<template>
  <div>
    <ul>
      <li v-for="m in msgList"
          :key="m.id"
          style="padding-top:10px">
        <!-- 跳转路由并携带params参数,to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        <!-- 跳转路由并携带params参数,to的对象写法 -->
        <router-link :to="{
            //path:'/home/message/detail',
            //注意：使用params  必须使用name 命名路由  不能使用path
            //使用命名路由
            name:'xiangqing',
            query: {
              id: m.id,
              title: m.title
            }
        }">
          {{m.title}}
        </router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      msgList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' },
      ],
    }
  },
  methods: {
    pushShow(m) {
      //   console.log('路由器：', this.$router)
      this.$router.push({
        name: 'xiangqing',
        query: {
          id: m.id,
          title: m.title,
        },
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'xiangqing',
        query: {
          id: m.id,
          title: m.title,
        },
      })
    },
  },
}
</script>

<style>
</style>