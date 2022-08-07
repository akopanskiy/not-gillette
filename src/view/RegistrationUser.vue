<script>
export default {
  name: 'RegistrationUser',
  data() {
    return {
      email: '',
      password: '',
      name: '',
    };
  },
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      try {
        await this.$store.dispatch('register', formData);
        this.$router.push('/auth');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<template>
  <div class="overlay">
    <div class="auth-container">
      <form class="auth-form" @submit.prevent>
        <h3 class="auth-title">Реєстрація</h3>

        <input
          class="auth-field"
          type="text"
          placeholder="Ім'я"
          v-model="name"
        />
        <input
          class="auth-field"
          type="email"
          placeholder="Пошта"
          v-model="email"
        />
        <input
          class="auth-field"
          type="password"
          placeholder="Пароль"
          v-model="password"
        />
        <button class="auth-button" type="submit" @click="submitHandler">
          Зареєструватися
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  display: block;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background: linear-gradient(90deg, #444 10%, #000 90%);
}

.auth-container {
  position: absolute;
  left: 50%;
  top: 40%;
  margin-left: -160px;
  width: 320px;
  color: #fff;
}

.auth-form {
  display: block;
  text-align: center;
}

.auth-title {
  margin: 0;
  font-size: 25px;
  letter-spacing: 1px;
}
.auth-field {
  width: 280px;
  height: 40px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid transparent;
}

.auth-field:focus {
  border: 1px solid orangered;
}

.auth-button {
  width: 280px;
  height: 40px;
  background-color: orange;
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 15px;
}

::v-deep .el-link__inner {
  margin-top: 15px;
}
</style>
