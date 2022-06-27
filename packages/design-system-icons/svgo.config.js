let id = 0;

module.exports = {
  plugins: [
    {
      name: 'cleanupIDs',
      params: {
        prefix: {
          toString() {
            id += 1;

            return `id-${id}`;
          },
        },
      },
    },
  ],
};
