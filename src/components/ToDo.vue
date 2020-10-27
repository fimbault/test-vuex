<template>
  <text>we have {{numItems}} items in our todo list</text>
  <br>
  <input
      type="text"
      v-model="label" 
      placeholder="What needs to be done?"
      @input="$emit('update:newTodo', $event.target.value)"
  />
  <button @click="addNewItem">Add</button>

  <ul>
      <li v-for="(val, idx) in todos" :key="idx">
        {{ val }}
      </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex'
import ToDoModel from "@/models/ToDoModel";

export default defineComponent({
  components: {
    //ToDoNewItem
  },
  
  setup(){

    const label = ref('');
    const store = useStore(); 

    const todos = computed(() => store.state.todos)
    const numItems = computed(() => store.getters.countAllToDo)

    function addNewItem() {
        store.dispatch('addToDo', new ToDoModel(label.value))
      }

    return { 
        // list
        todos,
        numItems,
        // add new
        label,
        addNewItem 
    }


  }

});
</script>

