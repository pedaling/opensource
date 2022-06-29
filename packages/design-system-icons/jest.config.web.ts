export default {
  displayName: 'design-system-icons-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/design-system-icons',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
