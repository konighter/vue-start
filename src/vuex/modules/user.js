
const state = {
  login: false,
  user_info : { userName : '未登录用户'}
}

const getters = {
  isLogin : state => state.login
}

const mutations = {
  login (state, payLoad) {
    console.log(payLoad);
    console.log("user login start~~~~~~~")
    state.login = payLoad.login
    console.log("user login end~~~~~~~")
    state.user_info.userName = payLoad.user.name;

  }
}

export default {
  state,
  getters,
  mutations
}
