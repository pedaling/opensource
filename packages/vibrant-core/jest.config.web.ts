export default {
  displayName: 'vibrant-core-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/vibrant-core',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
