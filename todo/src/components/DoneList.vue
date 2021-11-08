

<script>
import TodoService from "../services/TodoService";
import moment from 'moment'

export default {
  name: "DoneList",
  props: {
    todos: [],
  },
  computed: {
    doneTodos() {
      return this.todos.filter(todo => todo.done === true);
    }
  },
  filters: {
    dateFormat:function (date) {
      if (date) {
        return moment(String(date)).format('MMMM Do YYYY, h:mm:ss a');
      }
    }
  },
  methods: {
    getAllTodos() {
      TodoService.getTodos().then((result) => {
        this.todos = result;
      })
    },
    markAsUndone(undone) {
      for(let i = 0; i< this.todos.length; i++) {
        let todo = this.todos[i];
        if(todo.title === undone.title && todo.date == undone.date) {
          TodoService.markAsUndone(i);
          this.getAllTodos();
          this.$emit('update', true);
        }
      }
    },
    deleteTodo(toDeleteTodo) {
      for(let i = 0; i< this.todos.length; i++) {
        let todo = this.todos[i];
        if(todo.title === toDeleteTodo.title && todo.date == toDeleteTodo.date) {
          TodoService.deleteTodo(i);
          this.getAllTodos();
        }
      }
    }
  }
}
</script>
<template>
  <div v-if="doneTodos.length" class="done-list">
    <h2 class="done-list-message">Done</h2>
    <table class="table table-striped done-list-table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Date</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(todo,index) in doneTodos" :key="todo.title">
        <td>{{index + 1}}</td>
        <td>{{todo.title}}</td>
        <td>{{todo.date | dateFormat}}</td>
        <td>
          <span> <button class="btn btn-secondary" @click="markAsUndone(todo)"> undone </button> <button class="btn btn-danger" @click="deleteTodo(todo)"> Delete </button></span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.done-list {
  display: flex;
  flex-flow: row;
  margin: 2em;
}
.done-list-message {
  flex: 0 0 10%;
  margin-left: 4%;
  text-align: center;
  padding-top: 0.8em;
}
.done-list-table {
  flex: 0 0 80%;
  margin-left: 4%
}

</style>