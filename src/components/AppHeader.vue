<script>
export default {};
</script>

<template>
  <header class="header-container">
    <ul>
      <li>
        <router-link to="/">Головна</router-link>
      </li>
      <li>
        <router-link to="/search">Пошук</router-link>
      </li>
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
</style>
