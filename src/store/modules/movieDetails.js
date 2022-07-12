import { fetchMovieDetailsPage } from '@/api/moviesAPI';

const state = {
  movieDetails: {},
};

const getters = {
  getMovieDetails(state) {
    return state.movieDetails;
  },
};

const mutations = {
  setMovieDetails(state, payload) {
    state.movieDetails = payload;
  },
};

const actions = {
  async setMovieDetails({ commit }, movieId) {
    try {
      const res = await fetchMovieDetailsPage(movieId);
      commit('setMovieDetails', res.data);
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
