<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MovieReviews',
  data() {
    return {
      movieId: '',
    };
  },
  created() {
    this.movieId = this.$route.params.movieId;
  },
  mounted() {
    this.setReviews(this.movieId);
  },
  computed: {
    ...mapGetters(['getReviews']),
  },
  methods: {
    ...mapActions(['setReviews']),
  },
};
</script>

<template>
  <ul v-if="getReviews.length > 0" class="reviews">
    <li v-for="review in getReviews" :key="review.id">
      <h4 class="review-name">{{ review.author_details.username }}</h4>
      <p class="review-description">{{ review.content }}</p>
    </li>
  </ul>
  <h4 v-else>We don`t have any reviews for this movie.</h4>
</template>

<style scoped>
.review-name {
  font-weight: 600;
  font-size: 20px;
  color: rgba(238, 16, 16, 0.815);
  margin-top: 5px;
  margin-bottom: 5px;
}
.review-description {
  margin: 0;
  padding-bottom: 5px;
}
</style>
