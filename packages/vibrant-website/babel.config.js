const path = require('path');

module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'babel-plugin-tsconfig-paths',
      {
        root: path.join(__dirname, '../../'),
        tsconfig: require.resolve('../../tsconfig.base.json'),
      },
    ],
  ],
};
