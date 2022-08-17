<script>
import { getImage } from '@/mixins/mixins';
import { mapGetters } from 'vuex';
export default {
  name: 'FavoriteMovie',
  mixins: [getImage],
  data() {
    return {
      myMovies: [],
    };
  },
  computed: {
    ...mapGetters(['getUserMovie']),
  },
  watch: {
    getUserMovie() {
      this.myMovies = this.getUserMovie;
    },
  },
};
</script>

<template>
  <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item v-for="movie in myMovies" :key="movie.id">
      <router-link :to="'/movie/' + movie.id">
        <img :src="getImage(movie.poster, 300)" :alt="movie.title" />
      </router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
img {
  display: block;
  width: 650px;
  height: 100%;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
}

:deep(.el-carousel__container) {
  margin-top: 100px;
}
:deep(.el-carousel-item--card) {
  width: 650px;
  height: 750px;
}
</style>
