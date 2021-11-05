<script>
import TodoService from "../services/TodoService";

export default {
  name: "UndoneList",
  props: {
    todos: [],
  },
  computed: {
    todoTodos() {
      return this.todos.filter(todo => todo.done === false)
    },
  },
  methods: {
    markAsDone(done) {
      for(let i = 0; i< this.todos.length; i++) {
        let todo = this.todos[i];
        if(todo.title === done.title) {
          TodoService.markAsDone(i);

          TodoService.getTodos().then((result) => {
            this.todos = result;
          });
          this.$emit('update', true);
        }
      }
    },
  }
}
</script>
<template>
  <div v-if="todoTodos.length" class="undone-list">
    <h2 class="undone-list-message">Todo</h2>
    <table class="table table-striped undone-list-table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Date</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(todo , index) in todoTodos" :key="todo.title">
        <td>{{index + 1}}</td>
        <td>{{todo.title}}</td>
        <td>{{todo.date}}</td>
        <td><button class="btn btn-secondary" @click="markAsDone(todo)"> Done </button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>



<style scoped>
.undone-list {
  display: flex;
  flex-flow: row;
  margin: 2em;
}
.undone-list-message {
  flex: 0 0 10%;
  margin-left: 4%;
  text-align: center;
  padding-top: 0.8em;
}
.undone-list-table {
  flex: 0 0 80%;
  margin-left: 4%
}
</style>