/*
    该文件是整个项目的引入文件
*/

// 引入vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//关系生产提示
Vue.config.productionTip = false

new Vue({
    //render函数功能：将App组件放入容器中
    render: h => h(App),

    // template: '<App></App>',
    // components: {
    //     App
    // },

    // 完整形式
    // render:(createElement) =>{
    //     console.log("render()")
    //     console.log(typeof createElement) //function
    //     return createElement('h1','你好啊')
    // },
    // 简写形式
    // render:q=>q('h1','你好啊')
    },

    
).$mount('#app')
