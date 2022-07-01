export default {
  displayName: 'vibrant-utils-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/vibrant-utils',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
