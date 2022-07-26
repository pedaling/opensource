module.exports = {
  babelrcRoots: ['*'],
  presets: process.env.NODE_ENV === 'test' ? ['babel-preset-expo'] : undefined,
};
