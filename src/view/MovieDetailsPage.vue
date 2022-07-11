<script>
import MovieDetails from '../components/MovieDetails.vue';
import { fetchMovieDetailsPage } from '@/api/moviesAPI';
export default {
  name: 'MovieDetailsPage',
  components: { MovieDetails },
  data() {
    return {
      movieDetails: {},
      movieId: '',
    };
  },
  created() {
    this.movieId = this.$route.params.movieId;
  },
  mounted() {
    fetchMovieDetailsPage(this.movieId).then(res => {
      const movie = res.data;
      this.movieDetails = movie;
      console.log(this.movieDetails);
    });
  },
};
</script>

<template>
  <div class="movie-container">
    <MovieDetails :movie="movieDetails" />

    <router-view></router-view>
  </div>
</template>

<style scoped>
.movie-container {
  width: 80vw;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
}
</style>
