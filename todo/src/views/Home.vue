<template>
  <div>
    <TodoMain />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoMain from "../components/TodoMain";

export default {
  name: 'Home',
  components: {
    TodoMain
  }
}
</script>
