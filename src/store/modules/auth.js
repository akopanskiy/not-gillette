import firebase from 'firebase/compat/app';
const actions = {
  async login({ dispatch, commit }, { email, password }) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch('fetchMovie');
      commit('changeIsLogin', true);
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  async register({ dispatch }, { email, password, name }) {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const uid = await dispatch('getUserId');
    await firebase.database().ref(`/users/${uid}/info`).set({
      name,
    });
  },
  getUserId() {
    const user = firebase.auth().currentUser;
    return user ? user.uid : null;
  },
  async logout({ commit }) {
    await firebase.auth().signOut();
    commit('clearInfo');
    commit('changeIsLogin', false);
  },
};

export default {
  actions,
};
