import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre:'',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    set(state, payload) {
      state.tareas.push(payload);
      console.log(state.tareas)
    },
    delete(state, id) {

      const newTareas = state.tareas.filter(tarea => tarea.id !== id);
      state.tareas = newTareas;
    }
  },
  actions: {
    setTarea({commit}, tarea) {
      commit('set', tarea)
    },
    deleteTarea({commit}, id) {
      commit('delete', id)
    }
  },
  modules: {
  }
})
