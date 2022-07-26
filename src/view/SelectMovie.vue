<script>
import { mapGetters, mapActions } from 'vuex';
import MovieList from '@/components/MovieList.vue';
export default {
  name: 'SelectMovie',
  components: { MovieList },
  data() {
    return {
      genreId: '',
    };
  },
  created() {
    this.genreId = this.$route.params.genreId;
    this.setSelectGenre(this.genreId);
    this.$store.commit('setSearchMovie', []);
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
  <MovieList :movies="getSelectGenre" imageSize="300" />
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
