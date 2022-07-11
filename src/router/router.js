import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../view/HomePage';
import SearchMovie from '../view/SearchMovie';
import MovieDetailsPage from '../view/MovieDetailsPage';
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
    component: MovieDetailsPage,
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
