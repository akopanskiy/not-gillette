import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router/router';
import store from './store/index';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBJXPp5u20bFEilGL__OFdNORM80CCymTc',
  authDomain: 'vue-movie-kopa.firebaseapp.com',
  projectId: 'vue-movie-kopa',
  storageBucket: 'vue-movie-kopa.appspot.com',
  messagingSenderId: '673372913756',
  appId: '1:673372913756:web:b30df7f66c0ebeaad32699',
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  createApp(App).use(store).use(router).use(ElementPlus).mount('#app');
});
