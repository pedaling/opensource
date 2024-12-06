module.exports = function rollupConfig(config, options) {
  return {
    ...config,
    output: config.output.map((output) => {
      return {
        ...output,
        interop: 'auto',
      };
    }),
  }
}