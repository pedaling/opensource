import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
// eslint-disable-next-line @nx/enforce-module-boundaries
import react from '@vitejs/plugin-react';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/vibrant-benchmark-web',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },
});
