module.exports = function rollupConfig(config, options) {
  return {
    ...config,
    output: config.output.map(output => ({
      ...output,
      interop: 'auto',
    })),
  };
};
