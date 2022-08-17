<script>
import { mapGetters, mapActions } from 'vuex';
import { Avatar, ArrowDown } from '@element-plus/icons-vue';

export default {
  components: { Avatar, ArrowDown },
  data() {
    return {
      genre: '',
      isLoading: false,
    };
  },
  mounted() {
    this.setListGenres();
  },
  computed: {
    ...mapGetters(['getListGenres', 'isLogin', 'getInfo']),
  },
  methods: {
    ...mapActions(['setListGenres']),
    async logout() {
      this.isLoading = true;
      await this.$store.dispatch('logout');
      this.$router.push('/');
      this.isLoading = false;
    },
    goToProfile() {
      this.isLoading = true;
      this.$store.dispatch('fetchMovie');
      this.$router.push('/profile');
      this.isLoading = false;
    },
  },
};
</script>
<template>
  <div>
    <header class="header-container">
      <ul>
        <li>
          <router-link class="navi" to="/">Головна</router-link>
        </li>

        <el-dropdown trigger="hover" v-model="genre">
          <el-button type="primary">
            Жанри
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu
              class="dropdown-menu-genre"
              v-for="genre in getListGenres"
              :key="genre.id"
            >
              <router-link :to="'/genre/' + genre.id">
                <el-dropdown-item>{{
                  genre.name
                }}</el-dropdown-item></router-link
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <li>
          <router-link class="navi" to="/search">Пошук</router-link>
        </li>

        <div v-if="!isLogin" class="auth">
          <router-link to="/auth">
            <el-link type="success" :underline="false">
              Авторизуватися
              <el-icon class="el-icon--right"><avatar /></el-icon>
            </el-link>
          </router-link>
        </div>
        <div v-else>
          <el-dropdown trigger="click">
            <el-button type="warning">
              Алоха, {{ getInfo.name }}
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu class="dropdown-menu-profile" placement="top">
                <el-dropdown-item>
                  <button @click="goToProfile" class="button-profile">
                    Вибрані
                  </button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <button class="button-logout" @click="logout">Вихід</button>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </ul>
    </header>
    <div v-if="isLoading" v-loading="isLoading" class="loader-container"></div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  width: 100%;
  height: 70px;
  background-color: palevioletred;
  align-items: center;
}
ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-right: 15px;
  margin-left: 15px;
}

.navi {
  display: inline-block;
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
}

.navi:hover,
.navi:active,
.navi.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}

.dropdown-menu-genre {
  display: block;
}

.auth {
  display: flex;
  align-items: center;
}

:deep(.el-dropdown-menu__item) {
  padding: 0;
}

.dropdown-menu-profile {
  display: block;
}

.button-profile {
  position: relative;
  display: flex;
  align-items: center;
  width: 90px;
  font-weight: bold;
  color: blue;
  text-decoration: none;
  line-height: 1.1;
  padding: 0.5em 3em 0.5em 0.6em;
  background: linear-gradient(#ecc92b, #fce25b);
  box-shadow: 0 0 0 1px #fce25b inset, -1px 0px rgb(220, 195, 35),
    -1px 1px rgb(192, 167, 7), -2px 1px rgb(219, 194, 34),
    -2px 2px rgb(191, 166, 6), -3px 2px rgb(218, 193, 33),
    -3px 3px rgb(190, 165, 5), -4px 3px rgb(217, 192, 32),
    -4px 4px rgb(189, 164, 4), -5px 4px rgb(216, 191, 31),
    -5px 5px rgb(188, 163, 3), -6px 5px rgb(215, 190, 30),
    -6px 6px rgb(187, 162, 2), -7px 6px rgb(214, 189, 29),
    -7px 7px rgb(186, 161, 1), -8px 7px rgb(213, 188, 28),
    -8px 8px rgb(185, 160, 0), -7px 9px 1px rgba(0, 0, 0, 0.4),
    -5px 11px 1px rgba(0, 0, 0, 0.2), -1px 13px 4px rgba(0, 0, 0, 0.2),
    4px 16px 7px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  margin-bottom: 15px;
}

.button-logout {
  position: relative;
  display: flex;
  align-items: center;
  width: 90px;
  font-weight: bold;
  color: yellow;
  text-decoration: none;
  line-height: 1.1;
  padding: 0.5em 3em 0.5em 0.6em;
  background: linear-gradient(#1c54ae, #2161c8);
  box-shadow: 0 0 0 1px #3652c4 inset, -1px 0px rgb(26, 60, 231),
    -1px 1px rgb(26, 60, 231), -2px 1px rgb(26, 60, 231),
    -2px 2px rgb(27, 61, 232), -3px 2px rgb(25, 59, 230),
    -3px 3px rgb(28, 62, 233), -4px 3px rgb(24, 58, 229),
    -4px 4px rgb(29, 63, 234), -5px 4px rgb(23, 57, 228),
    -5px 5px rgb(30, 64, 235), -6px 5px rgb(22, 56, 227),
    -6px 6px rgb(31, 65, 236), -7px 6px rgb(21, 55, 226),
    -7px 7px rgb(32, 66, 237), -8px 7px rgb(20, 54, 225),
    -8px 8px rgb(33, 67, 238), -7px 9px 1px rgba(0, 0, 0, 0.4),
    -5px 11px 1px rgba(0, 0, 0, 0.2), -1px 13px 4px rgba(0, 0, 0, 0.2),
    4px 16px 7px rgba(0, 0, 0, 0.3);
  transition: 0.4s;
  margin-bottom: 10px;
}

.button-profile:active,
.button-logout:active {
  box-shadow: none;
  -webkit-transform: translate(-7px, 8px);
  transform: translate(-7px, 8px);
}

.loader-container {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
