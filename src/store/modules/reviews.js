import { fetchReviews } from '@/api/moviesAPI';

const state = {
  reviews: [],
};

const getters = {
  getReviews(state) {
    return state.reviews;
  },
};

const mutations = {
  setReviews(state, payload) {
    state.reviews = [...payload];
  },
};

const actions = {
  async setReviews({ commit }, id) {
    try {
      const res = await fetchReviews(id);
      commit('setReviews', res.data.results);
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
