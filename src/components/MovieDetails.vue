<script>
import { getImage } from '@/mixins/mixins';
export default {
  name: 'MovieDetails',
  mixins: [getImage],
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <img
        class="movie-poster"
        :src="getImage(movie.poster_path, 300)"
        alt="movie.title"
      />
      <div class="movie-info">
        <h1 class="title">{{ movie.title }}</h1>
        <h3 class="details-name">
          Дата виходу:
          <span class="details-info">
            {{ movie.release_date }}
          </span>
        </h3>
        <ul>
          <h3 class="details-name">Країна:</h3>
          <li
            class="details-info"
            v-for="countries in movie.production_countries"
            :key="countries.id"
          >
            {{ countries.name }}
          </li>
        </ul>
        <ul>
          <h3 class="details-name">Студія:</h3>
          <li
            class="details-info"
            v-for="companies in movie.production_companies"
            :key="companies.id"
          >
            {{ companies.name }}
          </li>
        </ul>
        <ul>
          <h3 class="details-name">Жанр:</h3>
          <li
            class="details-info"
            v-for="genre in movie.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </li>
        </ul>
        <h3 class="details-name">
          Популярність:
          <span class="details-info">
            {{ movie.popularity }}
          </span>
        </h3>
        <h3 class="details-name">
          Середня оцінка:
          <span class="details-info">
            {{ movie.vote_average }}
          </span>
        </h3>
      </div>
    </div>

    <div class="overview">
      <h2 class="overview-title">Про що фільм {{ movie.title }}</h2>
      <p>{{ movie.overview }}</p>
    </div>

    <hr class="hr-shadow" />
    <h2 class="overview-title">Додаткова інформація</h2>
    <div class="add-info-container">
      <router-link :to="'/movie/' + movie.id + '/cast'">
        <h3>Актори</h3>
      </router-link>

      <router-link :to="'/movie/' + movie.id + '/reviews'">
        <h3>Відгуки</h3>
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
</style>
