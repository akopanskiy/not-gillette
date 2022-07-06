<script>
import { fetchHomePage } from '../api/moviesAPI';
export default {
  name: 'HomePage',
  data() {
    return {
      movieTrend: [],
    };
  },
  created() {
    fetchHomePage().then(res => {
      const trend = res.data.results;
      this.movieTrend = [...trend];
      console.log(this.movieTrend);
    });
  },
  methods: {
    getImage(url) {
      return `https://image.tmdb.org/t/p/w300${url}`;
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <div class="movie-container" v-for="movie in movieTrend" :key="movie.id">
        <li>
          <router-link :to="'/movie/' + movie.id + `?name=${movie.title}`">
            <img :src="getImage(movie.poster_path)" alt="movie.title" />
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
