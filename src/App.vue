<script>
import './assets/base.css';
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  components: { AppHeader },
};
</script>

<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
