import { createStore } from 'vuex'
import ToDoModel from '../models/ToDoModel'

// here it's an inmemory store (resets if url is refreshed) 
export default createStore({
  state: {
    todos: Array<ToDoModel>()
  },
  getters: {
    countAllToDo: (state) => {
      return state.todos.length
    },
    countRemainingToDo: (state) => {
      return state.todos.filter(todo => !todo.IsCompleted).length
    }
  },
  mutations: {
    addToDo (state, todoModel: ToDoModel) {
      state.todos.push(todoModel)
    }
  },
  actions: {
    addToDo (context, todoModel: ToDoModel) {
      context.commit('addToDo', todoModel)
    }
  }
})
