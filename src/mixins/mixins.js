import { ElNotification } from 'element-plus';

export const getImage = {
  methods: {
    getImage(url, size) {
      return `https://image.tmdb.org/t/p/w${size}${url}`;
    },
  },
};

export const notify = {
  methods: {
    notify(title, message, type) {
      return ElNotification({
        title,
        message,
        type,
      });
    },
  },
};
