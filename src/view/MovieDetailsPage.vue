<script>
import MovieDetails from '../components/MovieDetails.vue';

export default {
  name: 'MovieDetailsPage',
  components: { MovieDetails },
};
</script>

<template>
  <div class="movie-container">
    <MovieDetails />

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
