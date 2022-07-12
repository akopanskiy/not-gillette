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
ul {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-right: 15px;
  margin-left: 15px;
}

a {
  display: inline-block;
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
