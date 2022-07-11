export const getImage = {
  methods: {
    getImage(url, size) {
      return `https://image.tmdb.org/t/p/w${size}${url}`;
    },
  },
};
