
const state = {
  login: false
}

const getters = {
  isLogin : state => state.login
}

const mutations = {
  login (state, v) {
    console.log("user login start~~~~~~~")
    state.login = v
    console.log("user login end~~~~~~~")
  }
}

export default {
  state,
  getters,
  mutations
}
