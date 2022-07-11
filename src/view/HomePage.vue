<script>
import { fetchHomePage } from '../api/moviesAPI';
import { getImage } from '@/mixins/mixins';
export default {
  name: 'HomePage',
  mixins: [getImage],
  data() {
    return {
      movieTrend: [],
    };
  },
  created() {
    fetchHomePage().then(res => {
      const trend = res.data.results;
      this.movieTrend = [...trend];
    });
  },
};
</script>

<template>
  <div>
    <ul>
      <div class="movie-container" v-for="movie in movieTrend" :key="movie.id">
        <li>
          <router-link :to="'/movie/' + movie.id">
            <img :src="getImage(movie.poster_path, 300)" alt="movie.title" />
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  width: 300px;
  height: 300px;
  background-size: contain;
}
.movie-container {
  width: 300px;
  height: 300px;
  border: 1px solid green;
  margin: 5px;
}
</style>
