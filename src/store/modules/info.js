import firebase from 'firebase/compat/app';

const state = {
  info: {},
  userMovie: [],
  isLogin: false,
};

const getters = {
  getInfo(state) {
    return state.info;
  },
  getUserMovie(state) {
    return state.userMovie;
  },
  isLogin(state) {
    return state.isLogin;
  },
};

const mutations = {
  setInfo(state, payload) {
    state.info = payload;
  },
  setUserMovie(state, payload) {
    state.userMovie = payload;
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
  async addMovie({ dispatch }, { id, poster, title }) {
    const uid = await dispatch('getUserId');
    await firebase
      .database()
      .ref(`/users/${uid}/movies`)
      .push({ id, poster, title });
    await dispatch('fetchMovie');
  },
  async fetchMovie({ dispatch, commit }) {
    const uid = await dispatch('getUserId');
    const movieData = (
      await firebase
        .database()
        .ref()
        .child('users')
        .child(`${uid}`)
        .once('value')
    ).val();
    const userMovie = Object.entries(movieData.movies).reduce((result, el) => {
      result.push({
        key: el[0],
        id: el[1].id,
        title: el[1].title,
        poster: el[1].poster,
      });
      return result;
    }, []);
    commit('setUserMovie', userMovie);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
