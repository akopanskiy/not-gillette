<script>
import { getImage } from '@/mixins/mixins';
export default {
  name: 'FavoriteMovie',
  mixins: [getImage],
  data() {
    return {
      myMovies: [],
    };
  },
  created() {
    this.myMovies = this.$store.getters.getUserMovie;
  },
};
</script>

<template>
  <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item v-for="movie in myMovies" :key="movie.id">
      <img :src="getImage(movie.poster, 300)" :alt="movie.title" />
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

::v-deep .el-carousel__container {
  margin-top: 100px;
}
::v-deep .el-carousel-item--card {
  width: 650px;
  height: 750px;
}
</style>
