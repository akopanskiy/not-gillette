<script>
import { getImage } from '@/mixins/mixins';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MovieDetails',
  mixins: [getImage],
  data() {
    return {
      movieId: '',
    };
  },
  created() {
    this.movieId = this.$route.params.movieId;
  },
  mounted() {
    this.setMovieDetails(this.movieId);
  },
  computed: {
    ...mapGetters(['getMovieDetails']),
  },
  methods: {
    ...mapActions(['setMovieDetails']),
  },
};
</script>

<template>
  <div>
    <div class="container">
      <img
        class="movie-poster"
        :src="getImage(getMovieDetails.poster_path, 300)"
        alt="movie.title"
      />
      <div class="movie-info">
        <h1 class="title">{{ getMovieDetails.title }}</h1>
        <h3 class="details-name">
          Дата виходу:
          <span class="details-info">
            {{ getMovieDetails.release_date }}
          </span>
        </h3>
        <ul>
          <h3 class="details-name">Країна:</h3>
          <li
            class="details-info"
            v-for="countries in getMovieDetails.production_countries"
            :key="countries.id"
          >
            {{ countries.name }}
          </li>
        </ul>
        <ul>
          <h3 class="details-name">Студія:</h3>
          <li
            class="details-info"
            v-for="companies in getMovieDetails.production_companies"
            :key="companies.id"
          >
            {{ companies.name }}
          </li>
        </ul>
        <ul>
          <h3 class="details-name">Жанр:</h3>
          <li
            class="details-info"
            v-for="genre in getMovieDetails.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </li>
        </ul>
        <h3 class="details-name">
          Популярність:
          <span class="details-info">
            {{ getMovieDetails.popularity }}
          </span>
        </h3>
        <h3 class="details-name">
          Середня оцінка:
          <span class="details-info">
            {{ getMovieDetails.vote_average }}
          </span>
        </h3>
      </div>
    </div>

    <div class="overview">
      <h2 class="overview-title">Про що фільм {{ getMovieDetails.title }}</h2>
      <p>{{ getMovieDetails.overview }}</p>
    </div>

    <hr class="hr-shadow" />
    <h2 class="overview-title">Додаткова інформація</h2>
    <div class="add-info-container">
      <router-link :to="'/movie/' + getMovieDetails.id + '/cast'">
        <h3 class="additional-name">Актори</h3>
      </router-link>

      <router-link :to="'/movie/' + getMovieDetails.id + '/reviews'">
        <h3 class="additional-name">Відгуки</h3>
      </router-link>
    </div>
    <hr class="hr-shadow" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.movie-poster {
  width: 300px;
  height: 450px;
}

.movie-info {
  display: block;
  margin: 10px 25px;
}

.title {
  display: flex;
  justify-content: center;
  width: calc(80vw - 300px);
}
.details-name {
  color: blueviolet;
  margin-top: 10px;
  margin-bottom: 10px;
}
.details-info {
  color: black;
  font-size: 16px;
}
.overview {
  display: block;
  width: 80vw;
  padding-right: 40px;
  padding-left: 40px;
}

.overview-title {
  display: flex;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 8px;
}
.add-info-container {
  display: flex;
  justify-content: space-evenly;
}
.hr-shadow {
  margin: 0;
  padding-bottom: 0;
  height: 10px;
  border: none;
  border-top: 1px solid #333;
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
}

.additional-name {
  margin: 0;
}

a {
  display: inline-block;
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: rgb(176, 50, 50);
  padding: 0.5rem 1.5rem;
  margin-bottom: 10px;
}

a:hover,
a:active,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
