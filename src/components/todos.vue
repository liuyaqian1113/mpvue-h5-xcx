<template>
  <div id="app" class="todoList">

    <p :class="{'done': item.done}"
      v-for="(item, index) in todos"
      :key="index"
      @click="deleteDone(index)">
      {{index+1}}: {{item.name}}
    </p>
    <input v-model='inputValue' @keyup.enter="changeTitle" class="inputValue"/>
    <button class="button" @click="changeTitle">修改</button>
    <button class="button" @click="clean">清空</button>
    <p class="num">{{remain}}/{{todos.length}}</p>

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
.todoList {
  padding: 20px;
}
.done {
  text-decoration: line-through;
  color: red;
}

.inputValue {
  width: 80%;
  height: 30px;
  border: 1px solid #ccc;
  margin: 10px auto;
  display: block;
}
.num {
  text-align: center;
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
