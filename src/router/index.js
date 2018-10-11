import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index/index.vue'
import todoList from '../pages/todoList/index.vue'
import counter from '../pages/counter/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      alias: '/pages/index/main'
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: todoList,
      alias: '/pages/todoList/main'
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter,
      alias: '/pages/counter/main'
    }
  ]
})
