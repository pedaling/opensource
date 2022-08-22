export default {
  displayName: 'vibrant-components-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/vibrant-components',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
