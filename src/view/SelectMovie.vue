<script>
import { getImage } from '@/mixins/mixins';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SelectMovie',
  mixins: [getImage],
  data() {
    return {
      genreId: '',
    };
  },
  created() {
    this.genreId = this.$route.params.genreId;
    this.setSelectGenre(this.genreId);
  },
  computed: {
    ...mapGetters(['getSelectGenre']),
  },
  methods: {
    ...mapActions(['setSelectGenre']),
  },
  watch: {
    $route(newRoute) {
      this.genreId = newRoute.params.genreId;
      this.setSelectGenre(this.genreId);
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <div
        class="movie-container"
        v-for="movie in getSelectGenre"
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
