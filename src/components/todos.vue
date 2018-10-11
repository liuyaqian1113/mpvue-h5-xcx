<template>
  <div id="app">

    <p :class="{'done': item.done}" v-for="(item, index) in todos" :key="index" @click="deleteDone(index)">{{index+1}}: {{item.name}}</p>
    <input v-model='inputValue' @keyup.enter="changeTitle" class="inputValue"/>
    <button @click="changeTitle">修改</button>
    <button @click="clean">清空</button>
    <p>{{remain}}/{{todos.length}}</p>

  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      todos: [
        {
          name: '吃饭',
          done: false
        },
        {
          name: '睡觉',
          done: false
        },
        {
          name: '写代码',
          done: false
        }
      ],
      inputValue: ''
    }
  },

  computed: {
    remain () {
      return this.todos.filter(v => !v.done).length
    }
  },

  methods: {
    changeTitle () {
      console.log(this.inputValue)
      this.todos.push({
        name: this.inputValue,
        done: false
      })
    },
    deleteDone (i) {
      this.todos[i].done = !this.todos[i].done
    },
    clean () {
      this.todos = this.todos.filter(v => !v.done)
    }
  }
}
</script>

<style>

.done {
  text-decoration: line-through;
  color: red;
}

.inputValue {
  border: 1px solid #ccc;
  margin: 10px;
}
</style>
