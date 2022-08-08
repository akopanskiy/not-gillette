<script>
import { getImage } from '@/mixins/mixins';
export default {
  mixins: [getImage],
  props: {
    movies: {
      type: Array,
      required: true,
    },
    imageSize: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <div class="movie-container" v-for="movie in movies" :key="movie.id">
        <li class="movie-item">
          <router-link class="movie-link" :to="'/movie/' + movie.id">
            <img
              :src="getImage(movie.poster_path, imageSize)"
              :alt="movie.title"
            />
            <span class="movie-name">{{ movie.title }}</span>
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
  display: block;
  width: 100%;
  height: 280px;
  background-size: contain;
}
.movie-container {
  width: 280px;
  height: 320px;
  border: 1px solid green;
  margin: 5px;
  background: rgb(49, 43, 43);
}

.movie-item {
  height: 100%;
}

.movie-link {
  text-decoration: none;
}

.movie-name {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: azure;
  margin: 0;
  padding: 0 5px;
}
</style>
