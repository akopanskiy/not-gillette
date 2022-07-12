import { fetchMoviesPage } from '@/api/moviesAPI';

const state = {
  searchMovie: [],
};

const getters = {
  getSearchMovie(state) {
    return state.searchMovie;
  },
};

const mutations = {
  setSearchMovie(state, payload) {
    state.searchMovie = [...payload];
  },
};

const actions = {
  async setSearchMovie({ commit }, query) {
    try {
      const res = await fetchMoviesPage(query);
      commit('setSearchMovie', res.data.results);
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
