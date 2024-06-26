const multiInput = require('rollup-plugin-multi-input').default;
const rollupTypescript = require('rollup-plugin-typescript2');
const { visualizer } = require('rollup-plugin-visualizer');

module.exports = function rollupConfig(config, options) {
  if (!options.watch) {
    process.env.NODE_ENV = 'production';
  }

  const { moduleSuffixes = [''], typeCheck = true, main, analyzer, disablePreserveModules } = options;

  const tsPluginIndex = config.plugins.findIndex(plugin => plugin.name === 'rpt2');

  if (options.outputFileName) {
    config.input[options.outputFileName] = config.input[options.outputFileName.split('.')[0]];
    delete config.input[options.outputFileName.split('.')[0]];
  }

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

  if (main.includes('*')) {
    config.plugins.splice(0, 0, multiInput({ relative: options.entryRoot }));
  }

  if (analyzer) {
    config.plugins.push(
      visualizer({
        gzipSize: true,
        open: true,
      })
    );
  }

  if (options.forceOutputJsExtension) {
    config.output.entryFileNames = '[name].js';
    config.output.chunkFileNames = '[name].js';
  }

  if (!disablePreserveModules) {
    config.output.preserveModules = true;
  }

  return config;
};
