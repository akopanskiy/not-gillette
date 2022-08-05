<script>
import { mapGetters, mapActions } from 'vuex';
import { ArrowDown, Avatar } from '@element-plus/icons-vue';
export default {
  components: { ArrowDown, Avatar },
  data() {
    return {
      genre: '',
    };
  },
  mounted() {
    this.setListGenres();
  },
  computed: {
    ...mapGetters(['getListGenres']),
  },
  methods: {
    ...mapActions(['setListGenres']),
    async logout() {
      await this.$store.dispatch('logout');
    },
  },
};
</script>
<template>
  <header class="header-container">
    <ul>
      <li>
        <router-link class="navi" to="/">Головна</router-link>
      </li>

      <el-dropdown trigger="click" v-model="genre">
        <el-button type="primary">
          Жанри
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu
            class="dropdown-menu"
            v-for="genre in getListGenres"
            :key="genre.id"
          >
            <router-link :to="'/genre/' + genre.id">
              <el-dropdown-item>{{ genre.name }}</el-dropdown-item></router-link
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <li>
        <router-link class="navi" to="/search">Пошук</router-link>
      </li>

      <router-link to="/auth" class="auth">
        <el-link type="success" :underline="false">
          Авторизуватися
          <el-icon class="el-icon--right"><avatar /></el-icon>
        </el-link>
      </router-link>

      <button @click="logout">Logout</button>
    </ul>
  </header>
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

.dropdown-menu {
  display: block;
}

.auth {
  display: flex;
  align-items: center;
}

::v-deep .el-dropdown-menu__item {
  padding: 0;
}
</style>
