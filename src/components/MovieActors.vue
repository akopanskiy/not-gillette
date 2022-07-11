<script>
import { fetchCast } from '@/api/moviesAPI';
import { getImage } from '@/mixins/mixins';
export default {
  name: 'MovieActors',
  mixins: [getImage],
  data() {
    return {
      cast: {},
      movieId: '',
    };
  },
  created() {
    this.movieId = this.$route.params.movieId;
  },
  mounted() {
    fetchCast(this.movieId).then(res => {
      const actors = res.data.cast;
      this.cast = actors;
    });
  },
};
</script>

<template>
  <ul class="cast">
    <li class="cast-item" v-for="actor in cast" :key="actor.id">
      <img
        v-if="actor.profile_path !== null"
        class="img-hero"
        :src="getImage(actor.profile_path, 200)"
        alt=""
      />
      <img v-else src="../assets/default.jpg" class="img-hero" />
      <h4 class="actor-name">{{ actor.name }}</h4>
      <p class="actor-hero">{{ actor.character }}</p>
    </li>
  </ul>
</template>

<style scoped>
.cast {
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-top: -10px;
  list-style: none;
  width: 80vw;
  padding: 5px;
}
.cast-item {
  margin-left: 10px;
  margin-top: 10px;

  flex-basis: calc((100% - 50px) / 5);

  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  justify-content: center;
}
.img-hero {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 200px;
}
.actor-name {
  text-align: center;
}
.actor-hero {
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.19;
}
</style>
