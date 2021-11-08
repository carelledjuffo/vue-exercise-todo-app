<template>
  <div>
    <DoneList v-bind:todos="todos" v-on:update="getAllTodos" />
  </div>
</template>

<script>
import DoneList from "../components/DoneList";
import TodoService from "../services/TodoService";
export default {
  name: "Done",
  components: {DoneList},
  data() {
    return {
      todos: [],
    }
  },
  created() {
    this.getAllTodos();
  },
  methods: {
    getAllTodos() {
      TodoService.getTodos().then(
          (result) => {
            this.todos = result;
          }
      )
    },
  }
}
</script>


<style scoped>
.todo-add-message {
  display: flex;
  flex-flow: row;
  margin: 5em 10em 5em 10em;
}
.todo-add-message > h3 {
  flex: 0 0 30%;
  margin-left: 10%;
}
.todo-add-message > button {
  flex: 0 0 10%;
  margin-left: 10%;
}
.input-todo {
  display: flex;
  flex-flow: row;
  align-items: center;
}
.close-modal-button {
  float: right;
}
.save-todo-button {
  margin-left: 4%;
}

</style>

