<script>
import TodoService from "../services/TodoService";
import moment from "moment";

export default {
  name: "UndoneList",
  props: {
    todos: [],
  },
  data() {
    return {
      edit: null,
      newTitle:''
    }
  },
  computed: {
    todoTodos() {
      return this.todos.filter(todo => todo.done === false)
    },
  },
  filters: {
    dateFormat:function (date) {
      if (date) {
        return moment(String(date)).format('MMMM Do YYYY, h:mm:ss a');
      }
    }
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
    editAndSave(toEdit) {
      for(let i = 0; i< this.todos.length; i++) {
        let todo = this.todos[i];
        if(todo.title === toEdit.title) {
          console.log(toEdit);
          TodoService.editTodo({title: toEdit.title, index: i})
          this.$emit('update', true);
          break;
        }
      }
      this.edit = null;

    }
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
        <td>
          <input v-if="edit == index" v-model="newTitle">
          <span v-else>{{todo.title}}</span>
        </td>
        <td>{{todo.date | dateFormat}}</td>
        <td>
          <button class="btn btn-secondary" @click="markAsDone(todo)"> Done </button>
        <!--
          <div v-if="edit == index">
            <button  class="btn btn-primary" @click="editAndSave(todo)"> Save </button>
            <button  class="btn btn-danger" @click="edit = false;"> Cancel </button>
          </div>
          <button v-else class="btn btn-secondary" @click="edit = index"> edit </button>
          -->
        </td>
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