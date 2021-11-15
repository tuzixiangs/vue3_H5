const user = {
  namespaced: true,
  state: () => ({
    name: 'hello,word',
    age: '24',
  }),
  getters: {},
  mutations: {
    editName(state, name) {
      state.name = name
    },
  },
  actions: {},
}

export default user
