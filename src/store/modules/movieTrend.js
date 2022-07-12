import { fetchHomePage } from '@/api/moviesAPI';

const state = {
  movieTrend: [],
};

const getters = {
  getMovieTrend(state) {
    return state.movieTrend;
  },
};

const mutations = {
  setMovieTrend(state, payload) {
    state.movieTrend = [...payload];
  },
};

const actions = {
  async setMovieTrend({ commit }) {
    try {
      const res = await fetchHomePage();
      commit('setMovieTrend', res.data.results);
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
