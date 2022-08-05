import firebase from 'firebase/compat/app';

const state = {
  info: {},
  isLogin: false,
};

const getters = {
  getInfo(state) {
    return state.info;
  },
  isLogin(state) {
    return state.isLogin;
  },
};

const mutations = {
  setInfo(state, payload) {
    state.info = payload;
  },
  clearInfo(state) {
    state.info = {};
  },
  changeIsLogin(state, payload) {
    state.isLogin = payload;
  },
};

const actions = {
  async fetchInfo({ dispatch, commit }) {
    const uid = await dispatch('getUserId');
    const info = (
      await firebase.database().ref(`/users/${uid}/info`).once('value')
    ).val();
    commit('setInfo', info);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
