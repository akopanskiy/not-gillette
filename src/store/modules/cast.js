import { fetchCast } from '@/api/moviesAPI';

const state = {
  cast: {},
};

const getters = {
  getCast(state) {
    return state.cast;
  },
};

const mutations = {
  setCast(state, payload) {
    state.cast = payload;
  },
};

const actions = {
  async setCast({ commit }, id) {
    try {
      const res = await fetchCast(id);
      commit('setCast', res.data.cast);
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
