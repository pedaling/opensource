/* eslint-disable no-console */

const path = require('node:path');
const { run: jscodeshift } = require('jscodeshift/src/Runner');
const [, , transformer, target] = process.argv;
const transformPath = path.resolve(__dirname, `../src/lib/${transformer}.js`);
const paths = [target];
const options = {
  print: true,
  verbose: 1,
  parser: 'tsx',
};

(async () => {
  const res = await jscodeshift(transformPath, paths, options);

  console.log(res);
})();
