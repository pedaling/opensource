const multiInput = require('rollup-plugin-multi-input').default;
const rollupTypescript = require('rollup-plugin-typescript2');

module.exports = function rollupConfig(config, options) {
  const { moduleSuffixes = [''], typeCheck = true } = options;

  const tsPluginIndex = config.plugins.findIndex(plugin => plugin.name === 'rpt2');

  config.plugins[tsPluginIndex] = rollupTypescript({
    check: typeCheck,
    tsconfig: options.tsConfig,
    tsconfigOverride: {
      compilerOptions: {
        rootDir: options.entryRoot,
        allowJs: false,
        declaration: true,
        moduleSuffixes,
      },
    },
    include: [options.entryRoot],
  });

  config.plugins.splice(0, 0, multiInput({ relative: options.entryRoot }));

  return config;
};
