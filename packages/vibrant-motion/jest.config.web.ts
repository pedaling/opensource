export default {
  displayName: 'vibrant-motion-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/vibrant-motion',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
