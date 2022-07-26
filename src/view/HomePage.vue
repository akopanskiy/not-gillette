<script>
import { mapGetters, mapActions } from 'vuex';
import { getImage } from '@/mixins/mixins';
import MovieList from '../components/MovieList.vue';

export default {
  name: 'HomePage',
  components: { MovieList },
  mixins: [getImage],
  mounted() {
    this.setMovieTrend();
    this.$store.commit('setSearchMovie', []);
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
  <MovieList :movies="getMovieTrend" imageSize="300" />
</template>

<style scoped></style>
