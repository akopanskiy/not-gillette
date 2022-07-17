import { fetchSelect } from '@/api/moviesAPI';

const state = {
  selectGenre: [],
};

const getters = {
  getSelectGenre(state) {
    return state.selectGenre;
  },
};

const mutations = {
  setSelectGenre(state, payload) {
    state.selectGenre = [...payload];
  },
};

const actions = {
  async setSelectGenre({ commit }, id) {
    try {
      const res = await fetchSelect(id);
      commit('setSelectGenre', res.data.results);
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
