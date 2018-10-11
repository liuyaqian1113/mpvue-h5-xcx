<template>
  <div class="counter-warp">
    <p class="cont">Vuex counter：{{ count }}</p>
    <p>
      <button class="button" @click="increment">+</button>
      <button class="button" @click="decrement">-</button>
    </p>

    <a class="home" @click="gotoGame('pages/index/main')">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    gotoGame (path) {
      this.reLaunchPageTo(this.router + path)
    }
  }

}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.cont {
  font-size: 18px;
}
.button {
  font-size: 18px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  display: block;
  margin: 10px auto;
  border: 1px solid #ccc;
  background: #f5f5f5;
}
</style>
