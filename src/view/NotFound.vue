<template>
  <div>
    <h3>
      Пс... Тут нічого немає...
      <router-link to="/">Повертайся назад!)</router-link>
    </h3>
    <img src="../assets/notfound.jpg" alt="some cats" />
  </div>
</template>

<style scoped>
div {
  width: 100vw;
  height: 100vh;
}
img {
  width: 100%;
  height: 100%;
}
h3 {
  display: flex;
  justify-content: center;
}
a {
  margin-left: 5px;
  text-decoration: none;
}
</style>
