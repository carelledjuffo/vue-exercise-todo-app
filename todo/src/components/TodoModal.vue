<template>
  <div>
    <div class="todo-add-message">
      <h3>New Element</h3>
      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')"> Add Todo</b-button>
    </div>
    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title>
        New Todo Entry
      </template>
      <div class="d-block text-center">
        <form class="input-todo">
          <input placeholder="Hier" v-model="title" >
          <button class="btn btn-secondary save-todo-button" @click="addNewTodo">save</button>
        </form>
      </div>
      <b-button class="mt-3 close-modal-button" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
    </b-modal>
  </div>
</template>

<script>
import TodoService from "../services/TodoService";
export default {
  name: "TodoModal",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addNewTodo: function () {
      TodoService.postNewTodo(this.title);
      this.$emit('update', true);
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

