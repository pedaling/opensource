export const env = process.env.NODE_ENV;

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}
