import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../view/HomePage';
import SearchMovie from '../view/SearchMovie';
import MovieDetails from '../view/MovieDetails';
import NotFound from '../view/NotFound';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/search',
    component: SearchMovie,
  },
  {
    path: '/movie/:movieId',
    component: MovieDetails,
  },
  {
    path: '/:notFound(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
