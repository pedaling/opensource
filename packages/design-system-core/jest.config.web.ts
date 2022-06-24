export default {
  displayName: 'design-system-core-web',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/design-system-core',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
