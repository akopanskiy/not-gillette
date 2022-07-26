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
        <li>
          <router-link :to="'/movie/' + movie.id">
            <img
              :src="getImage(movie.poster_path, imageSize)"
              alt="movie.title"
            />
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
