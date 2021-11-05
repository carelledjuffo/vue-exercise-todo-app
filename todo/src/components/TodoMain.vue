<template>
  <div class="main-app">
    <TodoHeader />
    <TodoModal />
    <UndoneList  v-bind:todos="todos"  v-on:update="getAllTodos"/>
    <DoneList v-bind:todos="todos" v-on:update="getAllTodos" />


  </div>

</template>

<script>
import TodoModal from "./TodoModal";
import TodoHeader from "./TodoHeader";
import DoneList from "./DoneList";
import TodoService from "../services/TodoService";
import UndoneList from "./UndonelIst";
export default {
  name: 'TodoMain',
  props: {
    msg: String
  },
  setup:{

  },
  data() {
    return {
      todos: [],
    }
  },
  components: {
    UndoneList,
    DoneList,
    TodoModal,
    TodoHeader
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
