<script>
import { fetchReviews } from '@/api/moviesAPI';

export default {
  name: 'MovieReviews',
  data() {
    return {
      reviews: {},
      movieId: '',
    };
  },
  created() {
    this.movieId = this.$route.params.movieId;
  },
  mounted() {
    fetchReviews(this.movieId).then(res => {
      const result = res.data.results;
      this.reviews = result;
      console.log(this.reviews);
    });
  },
};
</script>

<template>
  <ul class="reviews">
    <li v-for="review in reviews" :key="review.id">
      <h4 class="review-name">{{ review.author_details.username }}</h4>
      <p class="review-description">{{ review.content }}</p>
    </li>
  </ul>
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
