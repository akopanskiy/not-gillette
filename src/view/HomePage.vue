<script>
import { mapGetters, mapActions } from 'vuex';
import { getImage } from '@/mixins/mixins';
import MovieList from '../components/MovieList.vue';

export default {
  name: 'HomePage',
  components: { MovieList },
  mixins: [getImage],
  async mounted() {
    this.setMovieTrend();
    this.$store.commit('setSearchMovie', []);
    if (this.isLogin) {
      await this.$store.dispatch('fetchInfo');
    }
  },
  computed: {
    ...mapGetters(['getMovieTrend', 'isLogin']),
  },
  methods: {
    ...mapActions(['setMovieTrend']),
  },
};
</script>

<template>
  <MovieList :movies="getMovieTrend" imageSize="300" />
</template>
