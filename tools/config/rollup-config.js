const { join } = require('path');
const { dts } = require('rollup-plugin-dts');
const rollupTypescript = require('rollup-plugin-typescript2');
const { workspaceRoot } = require('@nx/devkit');

module.exports = function rollupConfig(config, options) {
  const projectRoot = join(workspaceRoot, options.projectRoot);
  const outDir = join(workspaceRoot, options.outputPath);

  const bundleTypes = {
    input: join(projectRoot, 'src/index.ts'),
    output: [{ file: join(outDir, 'index.d.ts'), format: 'es' }],
    plugins: [dts()],
  };

  const webConfig = {
    ...config,
    plugins: config.plugins
      .filter(plugin => plugin && plugin.name !== 'dts-bundle')
      .map(plugin => {
        if (plugin.name === 'rpt2') {
          return rollupTypescript({
            check: false,
            tsconfig: options.tsConfig,
            tsconfigOverride: {
              compilerOptions: {
                rootDir: projectRoot,
                declaration: false,
              },
            },
          });
        }
        return plugin;
      }),
    output: config.output.map(output => ({
      ...output,
      interop: 'auto',
      preserveModules: true,
    })),
  };

  const reactNativeConfig = {
    ...config,
    input: {
      'index.native': config.input.index,
    },
    plugins: config.plugins
      .filter(plugin => plugin && plugin.name !== 'dts-bundle')
      .filter(plugin => plugin && plugin.name !== 'rollup-plugin-nx-generate-package-json')
      .map(plugin => {
        if (plugin.name === 'rpt2') {
          return rollupTypescript({
            check: false,
            tsconfig: options.tsConfig.replace('tsconfig.lib.json', 'tsconfig.native.json'),
            tsconfigOverride: {
              compilerOptions: {
                rootDir: projectRoot,
                declaration: false,
              },
            },
          });
        }
        return plugin;
      }),
    output: config.output.map(output => ({
      ...output,
      interop: 'auto',
      preserveModules: false,
    })),
  };

  if (options.reactNativeBuild) {
    return [webConfig, reactNativeConfig, bundleTypes];
  }

  return [webConfig, bundleTypes];
};
