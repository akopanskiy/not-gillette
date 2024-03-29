import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../view/HomePage';
import SearchMovie from '../view/SearchMovie';
import MovieDetailsPage from '../view/MovieDetailsPage';
import MovieActors from '../components/MovieActors';
import MovieReviews from '../components/MovieReviews';
import SelectMovie from '../view/SelectMovie';
import AuthorizationUser from '../view/AuthorizationUser';
import RegistrationUser from '../view/RegistrationUser';
import FavoriteMovie from '../view/FavoriteMovie';
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
    children: [
      { path: 'cast', component: MovieActors },
      { path: 'reviews', component: MovieReviews },
    ],
  },
  {
    path: '/genre/:genreId',
    component: SelectMovie,
  },
  {
    path: '/auth',
    component: AuthorizationUser,
  },
  {
    path: '/registration',
    component: RegistrationUser,
  },
  {
    path: '/profile',
    component: FavoriteMovie,
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
