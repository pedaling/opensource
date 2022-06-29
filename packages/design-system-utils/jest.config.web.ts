export default {
  displayName: 'design-system-utils-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/design-system-utils',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
