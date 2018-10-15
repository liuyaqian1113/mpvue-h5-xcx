<template>
  <div class="container">


    <div class="usermotto">
        <card :text="motto"></card>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a class="counter" @click="gotoGame('pages/counter/main')">去往Vuex示例页面</a>
    <a class="counter" @click="gotoGame('pages/todoList/main')">去往todoList页面</a>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    gotoGame (path) {
      this.reLaunchPageTo(this.router + path)
    }
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.userinfo-nickname {
  color: #aaa;
}

/*.usermotto {
  margin-top: 150px;
  height: 50px;
}*/

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  height: 30px;
}
.form-control {
  font-size: 18px;
}
.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
  font-size: 18px;
}
</style>
