import trend from './modules/movieTrend';
import movieDetails from './modules/movieDetails';
import search from './modules/searchMovie';
import cast from './modules/cast';
import reviews from './modules/reviews';
import listGenres from './modules/listGenres';
import selectGenre from './modules/selectGenre';
import auth from './modules/auth';
import info from './modules/info';
import { createStore } from 'vuex';

export default createStore({
  modules: {
    trend,
    movieDetails,
    search,
    cast,
    reviews,
    listGenres,
    selectGenre,
    auth,
    info,
  },
});
