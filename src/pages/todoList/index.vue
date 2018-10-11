<template>
	<div class="todoList">
	    <p>this is mpvue</p>
	    <todos></todos>
      <a class="home" @click="gotoGame('pages/index/main')">去往首页</a>
  </div>
</template>

<script>

import todos from '../../components/todos'

export default {
  components: {
    todos
  },

  data () {
    return {
      logs: [],
      page: 'aaa'
    }
  },

  methods: {
    gotoGame (path) {
      console.log(path)
      this.reLaunchPageTo(this.router + path)
    }
  }
}
</script>

<style>
.todoList {
  font-size: 16px;
}
</style>
