import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    addCount(state) {
      state.count++
    },
    subCount(state) {
      state.count--
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
})
