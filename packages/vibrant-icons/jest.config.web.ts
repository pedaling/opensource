export default {
  displayName: 'vibrant-icons-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/vibrant-icons',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
