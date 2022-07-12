<script>
import { mapGetters, mapActions } from 'vuex';
import { getImage } from '@/mixins/mixins';
import { fetchList } from '@/api/moviesAPI';
export default {
  name: 'HomePage',
  mixins: [getImage],
  mounted() {
    fetchList().then(res => console.log(res.data));
    this.setMovieTrend();
  },
  computed: {
    ...mapGetters(['getMovieTrend']),
  },
  methods: {
    ...mapActions(['setMovieTrend']),
  },
};
</script>

<template>
  <div>
    <ul>
      <div
        class="movie-container"
        v-for="movie in getMovieTrend"
        :key="movie.id"
      >
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
