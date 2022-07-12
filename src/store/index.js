import { fetchHomePage, fetchMovieDetailsPage, fetchMoviesPage } from "@/api/moviesAPI";
import { createStore } from "vuex";

export default createStore({
  state: {
    movieTrend: [],
    movieDetails: {},
    searchMovie: [],
  },
  getters: {
    getMovieTrend(state) {
      return state.movieTrend
    },
    getMovieDetails(state) {
      return state.movieDetails
    },
    getSearchMovie(state) {
      return state.searchMovie
    }
  },
  mutations: {
    setMovieTrend(state, payload) {
      state.movieTrend = [...payload]
    },
    setMovieDetails(state, payload) {
      state.movieDetails = payload
    },
    setSearchMovie(state, payload) {
      state.searchMovie = [...payload]
    }
  },
  actions: {
    async setMovieTrend({ commit }) {
      try {
        const res = await fetchHomePage();
        commit('setMovieTrend', res.data.results )
      } catch(e) {
      console.log(e.message)
    }
    },
    async setMovieDetails({ commit }, movieId) {
      try {
        const res = await fetchMovieDetailsPage(movieId);
        commit('setMovieDetails', res.data )
      } catch(e) {
      console.log(e.message)
    }
    },
    async setSearchMovie({ commit }, query) {
      try {
        const res = await fetchMoviesPage(query);
      commit('setSearchMovie', res.data.results)
      } catch(e) {
      console.log(e.message)
    }
      }
  },
  modules: {},
});
