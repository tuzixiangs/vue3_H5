import { createStore } from 'vuex'
// 用于数据持久化的插件，默认全局不使用，可在需要的vuex模块中开启
import createPersistedState from 'vuex-persistedstate'
import user from './module/user'
export default createStore({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    addCount(state) {
      state.count++
    },
    subCount(state) {
      state.count--
    },
  },
  actions: {},
  modules: {
    user,
  },
  plugins: [
    // 需要持久化的模块名写入下方paths中即可
    createPersistedState({
      paths: ['user'],
    }),
  ],
})
