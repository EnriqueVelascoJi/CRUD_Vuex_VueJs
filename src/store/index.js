import { createStore } from 'vuex'
import router from '../router'

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
      localStorage.setItem('tareas', JSON.stringify(state.tareas));
      
    },
    delete(state, id) {

      const newTareas = state.tareas.filter(tarea => tarea.id !== id);
      state.tareas = newTareas;
      localStorage.setItem('tareas', JSON.stringify(state.tareas));

    },
    view(state, id) {

      if(!state.tareas.find( tarea => tarea.id === id)) {
        router.push('/');
        return 
      }
      const viewTarea = state.tareas.find( tarea => tarea.id === id);
      state.tarea = viewTarea;

    },
    update(state, payload) {
      
      const newTareas = state.tareas.map( tarea => tarea.id === payload.id ? payload : tarea)
      state.tareas = newTareas;
      localStorage.setItem('tareas', JSON.stringify(state.tareas));
      router.push('/');

    },
    cargar(state) {

      state.tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    } 
    
  },
  actions: {
    setTarea({commit}, tarea) {
      commit('set', tarea)
    },
    deleteTarea({commit}, id) {
      commit('delete', id)
    },
    viewTarea({commit}, id) {
      commit('view', id)
    },
    updateTarea({commit}, tarea) {
      commit('update', tarea)
    },
    cargarLocalStorage({commit}) {
      commit('cargar')
    }
  },
  modules: {
  }
})
