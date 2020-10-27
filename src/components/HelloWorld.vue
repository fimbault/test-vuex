<template>
  <div>
    <h1>{{ msg }}</h1>
    <text> some stats: there are {{ num }} remaining todos</text>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  // this property is set by the parent component
  props: {
    msg: String
  },
  setup(){
    const store = useStore(); 
    const num = computed(() => store.getters.countRemainingToDo)

    return {
      num
    }
  }

});
</script>
