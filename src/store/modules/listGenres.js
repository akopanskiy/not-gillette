import { fetchList } from '@/api/moviesAPI';

const state = {
  genres: {},
};

const getters = {
  getListGenres(state) {
    return state.genres;
  },
};

const mutations = {
  setListGenres(state, payload) {
    state.genres = payload;
  },
};

const actions = {
  async setListGenres({ commit }) {
    try {
      const res = await fetchList();
      commit('setListGenres', res.data.genres);
    } catch (e) {
      console.log(e.message);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
