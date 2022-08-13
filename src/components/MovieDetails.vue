<script>
import { getImage, notify } from '@/mixins/mixins';
import { mapGetters, mapActions } from 'vuex';
import { Delete } from '@element-plus/icons-vue';
import firebase from 'firebase/compat/app';

export default {
  name: 'MovieDetails',
  components: { Delete },
  mixins: [getImage, notify],
  data() {
    return {
      movieId: '',
      disabled: false,
    };
  },
  created() {
    this.movieId = this.$route.params.movieId;
  },
  mounted() {
    this.setMovieDetails(this.movieId);
  },
  computed: {
    ...mapGetters(['getMovieDetails', 'isLogin', 'getUserMovie']),
    disabledAddButton() {
      return this.getUserMovie.some(el => el.id === this.movieId);
    },
    nameButton() {
      return !this.disabledAddButton ? 'Додати в Вибрані' : 'Додано у Вибрані';
    },
  },
  methods: {
    ...mapActions(['setMovieDetails']),
    async addMovieToFavorites(id, poster, title) {
      await this.$store.dispatch('addMovie', { id, poster, title });
      this.notify('Info', 'Фільм додано до списку улюблених.', 'info');
    },
    async removeMovie(id) {
      const uid = await this.$store.dispatch('getUserId');
      const movieKey = this.getUserMovie.find(el => el.id === id).key;
      await firebase
        .database()
        .ref(`/users/${uid}/movies/${movieKey}`)
        .remove();
      this.notify('Info', 'Фільм видалено зі списку улюблених.', 'info');
      this.$store.dispatch('fetchMovie');
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div>
        <img
          class="movie-poster"
          :src="getImage(getMovieDetails.poster_path, 300)"
          :alt="getMovieDetails.title"
        />
        <div class="button">
          <el-button
            v-if="isLogin"
            class="button-add"
            :disabled="this.getUserMovie.some(el => el.id === this.movieId)"
            :style="{
              backgroundColor: !disabledAddButton ? '#2ea44f' : 'gray',
              margin: !disabledAddButton ? '10px auto' : '10px',
            }"
            @click="
              addMovieToFavorites(
                movieId,
                getMovieDetails.poster_path,
                getMovieDetails.title,
              )
            "
          >
            {{ nameButton }}
          </el-button>
          <el-button
            v-if="disabledAddButton"
            type="danger"
            class="button-remove"
            @click="removeMovie(movieId)"
            ><el-icon><Delete /></el-icon
          ></el-button>
        </div>
      </div>
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

.button {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.button-add {
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  color: #fff;
  display: flex;
  text-align: center;
  font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 5px 15px;
}

.button-add:active {
  transform: scale(0.9);
}

.button-remove {
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
